import assert from 'node:assert/strict'
import test from 'node:test'
import {
  assistantText,
  equalOverviewChat,
  firstSentence,
  selectCompletedReplies,
  selectLatestStableProgress,
  selectOverviewChat,
  selectOverviewStage,
  selectPendingAttention,
} from '../overview.js'

const text = value => ({ kind: 'text', text: value })
const reasoning = value => ({ kind: 'reasoning', text: value })

function answer(turn, content, { seq = turn * 10, status = 'settled', interrupted = false } = {}) {
  return {
    turn, step: 1, status, time: seq * 100, blocks: content,
    finalNode: { kind: 'assistant', seq, turn, step: 1, time: seq * 100, blocks: content, ...(interrupted ? { interrupted: true } : {}) },
  }
}

function snapshot({ turns = [], nodes = [], partial = null, calls = [] } = {}) {
  const store = new Map(nodes.map(node => [node.key, node]))
  return {
    order: nodes.map(node => node.key),
    nodes: { get: key => store.get(key) },
    timeline: {
      turnOrder: turns.map(([turn]) => turn),
      turns: new Map(turns.map(([turn, closing]) => [turn, { turn, data: new Map(closing === undefined ? [] : [['turn-tail', { closing }]]) }])),
    },
    legacy: { partial, runningCalls: calls },
    store,
  }
}

function assistantNode(key, data, visibility = 'visible') {
  return { key, kind: 'assistant-step', visibility, data }
}

test('reader text excludes reasoning, raw arguments, images and unknown blocks', () => {
  assert.equal(assistantText([
    reasoning('private analysis'),
    text('First paragraph.'),
    { kind: 'tool-call', name: 'bash', argsRaw: '{"token":"secret"}', callId: 'tool-1' },
    { kind: 'image', attachment: { id: 'image-1' } },
    { kind: 'other', block: { text: 'opaque secret' } },
    text('Second paragraph.'),
  ]), 'First paragraph.\n\nSecond paragraph.')
  assert.equal(assistantText(undefined), '')
  assert.equal(assistantText([reasoning('nothing public')]), '')
})

test('completed answers follow reversed turnOrder and require turn-tail closing evidence', () => {
  const chat = snapshot({ turns: [
    [11, answer(11, [text('Old answer')], { seq: 999 })],
    [5, answer(5, [text('More recent in timeline')], { seq: 1 })],
    [20, undefined],
  ], nodes: [assistantNode('not-completed', answer(20, [text('A stable step in an open turn')]))] })
  assert.deepEqual(selectCompletedReplies(chat).map(reply => [reply.turn, reply.text]), [
    [5, 'More recent in timeline'], [11, 'Old answer'],
  ])
  assert.equal(selectCompletedReplies(chat, 1).length, 1)
  assert.deepEqual(selectCompletedReplies(chat, 0), [])
  assert.deepEqual(selectCompletedReplies(undefined), [])
})

test('a stopped prefix, reasoning-only closing, and running payload never become completed replies', () => {
  const noFinalNode = { status: 'settled', blocks: [text('missing durable node')] }
  const chat = snapshot({ turns: [
    [1, answer(1, [text('Completed')])],
    [2, answer(2, [text('Frozen prefix')], { status: 'interrupted', interrupted: true })],
    [3, answer(3, [reasoning('only private analysis')])],
    [4, answer(4, [text('Still running')], { status: 'running' })],
    [5, noFinalNode],
    [6, null],
  ] })
  assert.deepEqual(selectCompletedReplies(chat).map(reply => reply.text), ['Completed'])
})

test('bounds history to the latest answer and three earlier results', () => {
  const turns = Array.from({ length: 10 }, (_, index) => [index + 1, answer(index + 1, [text(`Answer ${index + 1}`)])])
  assert.deepEqual(selectCompletedReplies(snapshot({ turns })).map(reply => reply.turn), [10, 9, 8, 7])
})

test('partial public text wins over stable updates, while reasoning is never a progress preview', () => {
  const stable = assistantNode('stable', answer(1, [text('Stable update')]))
  const chat = snapshot({ nodes: [stable], partial: {
    turn: 2, step: 1, blocks: [reasoning('private chain'), text('Current public progress')],
  } })
  assert.deepEqual(selectOverviewChat(chat).progress, {
    key: 'partial:2:1', text: 'Current public progress', turn: 2, source: 'partial',
  })
  chat.legacy.partial.blocks = [reasoning('private chain only')]
  const selected = selectOverviewChat(chat)
  assert.equal(selected.hasPartial, true)
  assert.equal(selected.progress.text, 'Stable update')
  assert.equal(selectOverviewStage({ running: true, hasPartial: selected.hasPartial }), 'generating')
})

test('stable progress skips hidden, interrupted and nonassistant nodes without reading tool arguments', () => {
  const chat = snapshot({ nodes: [
    assistantNode('stable', answer(1, [text('Readable update')])),
    assistantNode('hidden', answer(2, [text('Hidden')]), 'hidden'),
    assistantNode('interrupted', answer(3, [text('Stopped')], { status: 'interrupted' })),
    { key: 'tool', kind: 'tool', visibility: 'visible', get data() { throw new Error('tool data must not be inspected') } },
    assistantNode('reasoning', answer(4, [reasoning('analysis')])),
  ] })
  assert.deepEqual(selectLatestStableProgress(chat), { key: 'stable', text: 'Readable update', turn: 1, source: 'stable' })
})

test('phase gives all pending interactions priority over tools and generation', () => {
  for (const [kind, expected] of [
    ['approval', 'waitingApproval'], ['question', 'waitingAnswer'], ['plan-review', 'waitingPlan'], ['extension-request', 'waitingResponse'],
  ]) {
    assert.equal(selectOverviewStage({ running: true, pendingInteraction: { kind }, toolCount: 4, hasPartial: true }), expected)
    assert.equal(selectOverviewStage({ running: false, pendingInteraction: { kind } }), expected)
  }
  assert.equal(selectOverviewStage({ running: true, toolCount: 2, hasPartial: true }), 'tools')
  assert.equal(selectOverviewStage({ running: true, hasPartial: true }), 'generating')
  assert.equal(selectOverviewStage({ running: true }), 'processing')
  assert.equal(selectOverviewStage({ running: false, toolCount: 2, hasPartial: true }), 'idle')
})

test('tool counts include dispatched calls and avoid reading preparing argument readers', () => {
  const calls = [
    { callId: 'preparing', name: 'bash', phase: 'preparing', get args() { throw new Error('args must stay private') } },
    { callId: 'running', name: 'read', phase: 'start', get argsRaw() { throw new Error('args must stay private') } },
  ]
  assert.deepEqual(selectOverviewChat(snapshot({ calls })).tools, [{ id: 'running', name: 'read' }])
})

test('copied selector values detect live node changes even when reader references stay stable', () => {
  const chat = snapshot({ nodes: [assistantNode('stable', answer(1, [text('Before')]))] })
  const before = selectOverviewChat(chat)
  assert.equal(equalOverviewChat(before, selectOverviewChat(chat)), true)
  chat.store.set('stable', assistantNode('stable', answer(1, [text('After')])) )
  const after = selectOverviewChat(chat)
  assert.equal(before.progress.text, 'Before')
  assert.equal(after.progress.text, 'After')
  assert.equal(equalOverviewChat(before, after), false)
  const changedTurn = { ...after, progress: { ...after.progress, turn: 99 } }
  assert.equal(equalOverviewChat(after, changedTurn), false)
})

test('attention reads the first question sentence and localized approval copy without calling lifecycle methods', () => {
  const pending = {
    key: 'q1', kind: 'question',
    questions: [{ question: '先选择目标。然后解释原因。', detail: 'must not show the entire plan' }],
    answer() { throw new Error('overview must not answer') },
  }
  assert.deepEqual(selectPendingAttention(pending), { key: 'q1', kind: 'question', text: '先选择目标。', reason: '' })
  assert.deepEqual(selectPendingAttention({
    key: 'a1', kind: 'approval', toolName: 'bash', reason: 'audit reason',
    displayReason: { zh: '需要写入配置。额外细节。', en: 'Write configuration.' },
    allow() { throw new Error('overview must not approve') },
  }, 'zh-CN'), { key: 'a1', kind: 'approval', text: 'bash', reason: '需要写入配置。' })
  assert.equal(selectPendingAttention(undefined), null)
})

test('sentence previews respect language punctuation, newlines and Unicode character boundaries', () => {
  assert.equal(firstSentence('First sentence. Second sentence.'), 'First sentence.')
  assert.equal(firstSentence('\n问题第一行\n第二行'), '问题第一行')
  assert.equal(firstSentence('😀😀😀😀😀', 4), '😀😀😀…')
  assert.equal(firstSentence(undefined), '')
})
