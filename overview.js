/**
 * Mobile conversation overview. This module has no browser or Harness imports;
 * the parent bundle calls createMobileOverview with its own React instance.
 *
 * Contract source: ui-conversation/client/contract/{slots,records}.ts and
 * ui-chat/client/contract/{snapshot,chat-nodes}.ts. A completed answer belongs
 * to turn.data.get('turn-tail').closing, never to an invented final channel.
 */

const EMPTY_ARRAY = Object.freeze([])

/** Text intended for the reader, excluding reasoning, tool arguments and images. */
export function assistantText(blocks) {
  return (Array.isArray(blocks) ? blocks : EMPTY_ARRAY)
    .filter(block => block?.kind === 'text' && typeof block.text === 'string')
    .map(block => block.text)
    .join('\n\n')
    .trim()
}

/** A bounded first sentence for an attention card; does not summarize with a model. */
export function firstSentence(text, limit = 160) {
  if (typeof text !== 'string') return ''
  const line = text.trim().split(/\r?\n/).find(value => value.trim())?.trim() ?? ''
  const sentence = line.match(/^.*?[。！？!?](?:[”’"']|$|\s)?|^.*?\.(?:\s|$)/)?.[0]?.trim() || line
  const characters = Array.from(sentence)
  return characters.length > limit ? `${characters.slice(0, Math.max(0, limit - 1)).join('')}…` : sentence
}

/**
 * Latest successfully settled, text-bearing answers in loaded timeline order.
 * An interrupted prefix is available in Chat, but is not a completed answer.
 */
export function selectCompletedReplies(chat, limit = 4) {
  const count = Number.isFinite(limit) ? Math.max(0, Math.floor(limit)) : 4
  if (count === 0) return []
  const timeline = chat?.timeline
  const order = timeline?.turnOrder ?? EMPTY_ARRAY
  const replies = []
  for (let index = order.length - 1; index >= 0 && replies.length < count; index -= 1) {
    const turn = timeline.turns.get(order[index])
    const closing = turn?.data?.get('turn-tail')?.closing
    if (!closing?.finalNode || closing.status !== 'settled' || closing.finalNode.interrupted === true) continue
    const text = assistantText(closing.blocks)
    if (!text) continue
    replies.push({
      key: `reply:${order[index]}:${closing.finalNode.seq}`,
      turn: order[index],
      seq: closing.finalNode.seq,
      time: closing.time,
      text,
    })
  }
  return replies
}

/** Only visible, settled assistant prose can become the stable progress preview. */
export function selectLatestStableProgress(chat) {
  const order = chat?.order ?? EMPTY_ARRAY
  for (let index = order.length - 1; index >= 0; index -= 1) {
    const node = chat.nodes.get(order[index])
    if (node?.kind !== 'assistant-step' || node.visibility !== 'visible') continue
    const data = node.data
    if (data?.status !== 'settled' || !data.finalNode || data.finalNode.interrupted === true) continue
    const text = assistantText(data.blocks)
    if (text) return { key: node.key ?? order[index], text, turn: data.turn, source: 'stable' }
  }
  return null
}

/** Small derived Chat slice; no event folding and no subscription to tool args. */
export function selectOverviewChat(chat) {
  const partial = chat?.legacy?.partial
  const partialText = assistantText(partial?.blocks)
  const calls = chat?.legacy?.runningCalls ?? EMPTY_ARRAY
  const tools = calls
    .filter(call => call?.phase === 'start')
    .map(call => ({ id: call.callId, name: call.name }))
  return {
    hasPartial: partial != null,
    tools,
    progress: partialText
      ? { key: `partial:${partial.turn}:${partial.step}`, text: partialText, turn: partial.turn, source: 'partial' }
      : selectLatestStableProgress(chat),
    replies: selectCompletedReplies(chat),
  }
}

/** Compare copied values because Chat nodes and locations are live keyed readers. */
export function equalOverviewChat(left, right) {
  if (left === right) return true
  if (!left || !right || left.hasPartial !== right.hasPartial || left.tools.length !== right.tools.length) return false
  if (!left.tools.every((tool, index) => tool.id === right.tools[index].id && tool.name === right.tools[index].name)) return false
  if (left.progress?.key !== right.progress?.key || left.progress?.text !== right.progress?.text
    || left.progress?.source !== right.progress?.source || left.progress?.turn !== right.progress?.turn) return false
  return left.replies.length === right.replies.length && left.replies.every((reply, index) => {
    const other = right.replies[index]
    return reply.key === other.key && reply.text === other.text && reply.time === other.time
  })
}

/** Pending interaction takes precedence over all execution and generation states. */
export function selectOverviewStage({ running, pendingInteraction, toolCount = 0, hasPartial = false }) {
  const kind = pendingInteraction?.kind
  if (kind === 'approval') return 'waitingApproval'
  if (kind === 'question') return 'waitingAnswer'
  if (kind === 'plan-review') return 'waitingPlan'
  if (pendingInteraction) return 'waitingResponse'
  if (!running) return 'idle'
  if (toolCount > 0) return 'tools'
  if (hasPartial) return 'generating'
  return 'processing'
}

/** Read presentation fields only; approval/answer methods remain with the composer. */
export function selectPendingAttention(pending, locale = 'zh') {
  if (!pending) return null
  let text = ''
  if (pending.kind === 'approval') {
    text = typeof pending.toolName === 'string' ? pending.toolName : ''
  } else {
    text = firstSentence(pending.questions?.[0]?.question)
  }
  const reason = pending.kind === 'approval'
    ? firstSentence(pending.displayReason?.[locale] ?? pending.displayReason?.[String(locale).split('-')[0]]
      ?? pending.displayReason?.en ?? pending.reason)
    : ''
  return { key: pending.key, kind: pending.kind, text, reason }
}

/** Parent may register these dictionaries in its Client locale namespace. */
export const overviewMessages = {
  zh: {
    'overview.stage': '当前阶段',
    'overview.stage.waitingApproval': '等待确认',
    'overview.stage.waitingAnswer': '等待回答',
    'overview.stage.waitingPlan': '等待确认计划',
    'overview.stage.waitingResponse': '等待回应',
    'overview.stage.tools': '正在执行 {count} 项工具',
    'overview.stage.generating': '正在生成回复',
    'overview.stage.processing': '处理中',
    'overview.stage.idle': '空闲',
    'overview.attention': '需要你处理',
    'overview.attention.approval': '确认工具执行',
    'overview.attention.question': '回答问题',
    'overview.attention.plan-review': '确认下一步计划',
    'overview.attention.generic': '有一项请求等待回应',
    'overview.respondBelow': '请在底部交互区回应，处理后会继续执行。',
    'overview.progress': '最新进展',
    'overview.progress.streaming': '当前回复片段',
    'overview.progress.stable': '最近记录',
    'overview.progress.empty': '新的进展会显示在这里。',
    'overview.progress.reasoning': '正在生成，正文出现后会显示在这里。',
    'overview.progress.tools': '工具执行中，完成后的进展会显示在这里。',
    'overview.expand': '展开进展',
    'overview.collapse': '收起进展',
    'overview.latestReply': '最新已完成回复',
    'overview.earlierReplies': '此前结果',
    'overview.replyNumber': '第 {turn} 轮回复',
    'overview.noReply': '还没有已完成的回复。',
    'overview.noReplyHint': '可以在底部输入消息，完成后的回复会留在这里供你阅读。',
    'overview.fullHistory': '查看完整记录',
    'overview.fullHistoryHint': '工具详情、图片与更早的内容可在完整记录中查看。',
    'overview.stableHint': '仅展示对话中的正文，不包含推理或工具参数。',
  },
  en: {
    'overview.stage': 'Current stage',
    'overview.stage.waitingApproval': 'Waiting for approval',
    'overview.stage.waitingAnswer': 'Waiting for an answer',
    'overview.stage.waitingPlan': 'Waiting for plan review',
    'overview.stage.waitingResponse': 'Waiting for your response',
    'overview.stage.tools': 'Running {count} tools',
    'overview.stage.generating': 'Writing a reply',
    'overview.stage.processing': 'Processing',
    'overview.stage.idle': 'Idle',
    'overview.attention': 'Needs your attention',
    'overview.attention.approval': 'Approve tool execution',
    'overview.attention.question': 'Answer a question',
    'overview.attention.plan-review': 'Review the next steps',
    'overview.attention.generic': 'A request needs your response',
    'overview.respondBelow': 'Respond in the interaction area below to continue.',
    'overview.progress': 'Latest progress',
    'overview.progress.streaming': 'Current reply',
    'overview.progress.stable': 'Recent update',
    'overview.progress.empty': 'New progress will appear here.',
    'overview.progress.reasoning': 'Generating. Reply text will appear here when ready.',
    'overview.progress.tools': 'Tools are running. New progress will appear when available.',
    'overview.expand': 'Show more progress',
    'overview.collapse': 'Show less progress',
    'overview.latestReply': 'Latest completed reply',
    'overview.earlierReplies': 'Earlier results',
    'overview.replyNumber': 'Turn {turn} reply',
    'overview.noReply': 'No completed replies yet.',
    'overview.noReplyHint': 'Send a message below. Completed replies will remain here to read.',
    'overview.fullHistory': 'View full conversation',
    'overview.fullHistoryHint': 'Find tool details, images and older content in the full conversation.',
    'overview.stableHint': 'Shows conversation text without reasoning or tool arguments.',
  },
}

function translate(t, locale, key, values) {
  const language = String(locale ?? 'zh').toLowerCase().startsWith('zh') ? 'zh' : 'en'
  const fallback = overviewMessages[language][key] ?? key
  const translated = typeof t === 'function' ? t(key, values) : undefined
  const text = typeof translated === 'string' && translated !== key ? translated : fallback
  return text.replace(/\{(\w+)\}/g, (match, name) => values?.[name] == null ? match : String(values[name]))
}

export const overviewStyles = `
.dsh-mobile-overview { box-sizing:border-box; width:100%; max-width:900px; margin:0 auto; padding:18px 16px 28px; display:flex; flex-direction:column; gap:20px; color:var(--dsw-alias-label-primary); font-family:inherit; font-size:16px; line-height:1.65; overflow-wrap:anywhere; }
.dsh-mobile-overview *, .dsh-mobile-overview *::before, .dsh-mobile-overview *::after { box-sizing:border-box; }
.dsh-mobile-overview .dmo-stage { padding:16px; border:1px solid var(--dsw-alias-border-l2); border-radius:18px; background:var(--dsw-alias-bg-layer-1); }
.dsh-mobile-overview .dmo-eyebrow { margin:0 0 7px; color:var(--dsw-alias-label-tertiary); font-size:12px; font-weight:600; letter-spacing:.04em; }
.dsh-mobile-overview .dmo-stage-line { display:flex; align-items:center; gap:9px; font-size:17px; font-weight:650; line-height:1.5; }
.dsh-mobile-overview .dmo-dot { width:8px; height:8px; flex:none; border-radius:50%; background:var(--dsw-alias-state-idle-primary); }
.dsh-mobile-overview .dmo-stage[data-busy="true"] .dmo-dot { background:var(--dsw-alias-state-business-primary); }
.dsh-mobile-overview .dmo-stage[data-attention="true"] .dmo-dot { background:var(--dsw-alias-state-warn-primary); }
.dsh-mobile-overview .dmo-tools { display:flex; flex-wrap:wrap; gap:6px; margin:12px 0 0; padding:0; list-style:none; }
.dsh-mobile-overview .dmo-tool { max-width:100%; padding:3px 9px; border-radius:8px; background:var(--dsw-alias-interactive-bg-hover); color:var(--dsw-alias-label-secondary); font-size:12px; overflow-wrap:anywhere; }
.dsh-mobile-overview .dmo-heading { margin:0 0 12px; font-size:14px; font-weight:650; line-height:1.5; color:var(--dsw-alias-label-secondary); }
.dsh-mobile-overview .dmo-attention { padding:16px; border:1px solid var(--dsw-alias-state-warn-primary); border-radius:18px; background:var(--dsw-alias-bg-layer-1); }
.dsh-mobile-overview .dmo-attention-title { margin:0; font-size:16px; font-weight:600; line-height:1.65; }
.dsh-mobile-overview .dmo-hint { margin:8px 0 0; color:var(--dsw-alias-label-tertiary); font-size:13px; line-height:1.65; }
.dsh-mobile-overview .dmo-attention-reason { margin:8px 0 0; color:var(--dsw-alias-label-secondary); }
.dsh-mobile-overview .dmo-progress { padding:16px; border:1px solid var(--dsw-alias-border-l2); border-radius:18px; background:var(--dsw-alias-bg-layer-1); }
.dsh-mobile-overview .dmo-progress-label { color:var(--dsw-alias-label-tertiary); font-size:12px; margin:0 0 8px; }
.dsh-mobile-overview .dmo-progress-text { margin:0; white-space:pre-wrap; }
.dsh-mobile-overview .dmo-progress-text[data-collapsed="true"] { display:-webkit-box; -webkit-line-clamp:4; -webkit-box-orient:vertical; overflow:hidden; }
.dsh-mobile-overview .dmo-button { appearance:none; display:inline-flex; align-items:center; justify-content:center; gap:7px; min-height:44px; min-width:44px; margin:8px 0 0; padding:9px 13px; border:1px solid var(--dsw-alias-border-l2); border-radius:12px; background:var(--dsw-alias-bg-layer-1); color:var(--dsw-alias-label-primary); font:inherit; font-size:14px; font-weight:550; line-height:1.5; cursor:pointer; touch-action:manipulation; }
.dsh-mobile-overview .dmo-button:hover { background:var(--dsw-alias-interactive-bg-hover); }
.dsh-mobile-overview .dmo-button:focus-visible, .dsh-mobile-overview summary:focus-visible { outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:3px; }
.dsh-mobile-overview .dmo-button-link { padding:8px 0; border-color:transparent; background:transparent; color:var(--dsw-alias-link); }
.dsh-mobile-overview .dmo-reply { padding:18px 16px; border:1px solid var(--dsw-alias-border-l2); border-radius:18px; background:var(--dsw-alias-bg-layer-1); }
.dsh-mobile-overview .dmo-readable { font-size:16px; line-height:1.65; }
.dsh-mobile-overview .dmo-readable p { margin:0 0 1em; }
.dsh-mobile-overview .dmo-readable p:last-child { margin-bottom:0; }
.dsh-mobile-overview .dmo-plaintext p { white-space:pre-wrap; }
.dsh-mobile-overview .dmo-readable h1, .dsh-mobile-overview .dmo-readable h2, .dsh-mobile-overview .dmo-readable h3, .dsh-mobile-overview .dmo-readable h4 { margin:1.2em 0 .6em; font-size:1.1em; line-height:1.5; }
.dsh-mobile-overview .dmo-readable h1:first-child, .dsh-mobile-overview .dmo-readable h2:first-child, .dsh-mobile-overview .dmo-readable h3:first-child { margin-top:0; }
.dsh-mobile-overview .dmo-readable ul, .dsh-mobile-overview .dmo-readable ol { padding-inline-start:1.4em; }
.dsh-mobile-overview .dmo-readable li { margin:.35em 0; }
.dsh-mobile-overview .dmo-readable a { color:var(--dsw-alias-link); text-underline-offset:3px; }
.dsh-mobile-overview .dmo-readable pre { max-width:100%; overflow:auto; padding:12px; border-radius:10px; background:var(--dsw-alias-markdown-code-block); font-size:13px; line-height:1.6; }
.dsh-mobile-overview .dmo-readable code { font-size:.875em; overflow-wrap:anywhere; }
.dsh-mobile-overview .dmo-readable blockquote { margin:1em 0; padding-inline-start:12px; border-inline-start:3px solid var(--dsw-alias-border-l3); color:var(--dsw-alias-label-secondary); }
.dsh-mobile-overview .dmo-readable img { max-width:100%; height:auto; }
.dsh-mobile-overview .dmo-readable table { display:block; max-width:100%; overflow-x:auto; border-collapse:collapse; font-size:14px; }
.dsh-mobile-overview .dmo-readable th, .dsh-mobile-overview .dmo-readable td { padding:8px 10px; border:1px solid var(--dsw-alias-border-l2); }
.dsh-mobile-overview .dmo-previous { border:1px solid var(--dsw-alias-border-l2); border-radius:14px; background:var(--dsw-alias-bg-layer-1); }
.dsh-mobile-overview .dmo-previous + .dmo-previous { margin-top:8px; }
.dsh-mobile-overview .dmo-previous summary { min-height:48px; padding:12px 14px; cursor:pointer; touch-action:manipulation; font-size:14px; font-weight:550; }
.dsh-mobile-overview .dmo-previous-preview { display:block; margin-top:4px; color:var(--dsw-alias-label-tertiary); font-size:13px; font-weight:400; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.dsh-mobile-overview .dmo-previous[open] .dmo-previous-preview { display:none; }
.dsh-mobile-overview .dmo-previous-body { padding:2px 14px 16px; }
.dsh-mobile-overview .dmo-empty { padding:24px 16px; border:1px dashed var(--dsw-alias-border-l3); border-radius:18px; }
.dsh-mobile-overview .dmo-empty p { margin:0; }
.dsh-mobile-overview .dmo-footer { padding:0 2px; }
.dsh-mobile-overview .dmo-footer .dmo-button { width:100%; margin:0; }
@media (min-width:700px) { .dsh-mobile-overview { padding:24px 24px 36px; } .dsh-mobile-overview .dmo-reply { padding:22px 24px; } }
`

/**
 * @param {object} React The host's single React instance.
 * @param {{renderMarkdown?: (text:string) => any}} options
 * renderMarkdown must return ReactNode and sanitize any HTML it creates. Without
 * it, paragraphs are rendered as React text, so authored HTML stays inert.
 * @returns {Function} A conversation.view component accepting standard props
 * plus {t, locale}. Register as id 'mobile-overview'; the parent owns selection.
 */
export function createMobileOverview(React, { renderMarkdown } = {}) {
  const h = React.createElement

  function ReadableText({ text }) {
    const content = React.useMemo(() => typeof renderMarkdown === 'function' ? renderMarkdown(text) : null, [text])
    return content != null
      ? h('div', { className: 'dmo-readable' }, content)
      : h('div', { className: 'dmo-readable dmo-plaintext' },
        text.split(/\r?\n\s*\r?\n/).filter(Boolean).map((paragraph, index) => h('p', { key: index }, paragraph)))
  }

  function Progress({ progress, stage, tr }) {
    const [expanded, setExpanded] = React.useState(false)
    const text = progress?.text
    const expandable = text && (text.length > 72 || text.includes('\n'))
    const emptyKey = stage === 'tools' ? 'overview.progress.tools'
      : stage === 'generating' ? 'overview.progress.reasoning' : 'overview.progress.empty'
    return h('section', { className: 'dmo-progress' },
      h('h2', { className: 'dmo-heading' }, tr('overview.progress')),
      text ? h(React.Fragment, null,
        h('p', { className: 'dmo-progress-label' }, tr(progress.source === 'partial' ? 'overview.progress.streaming' : 'overview.progress.stable')),
        h('p', { className: 'dmo-progress-text', 'data-collapsed': expandable && !expanded ? 'true' : 'false' }, text),
        expandable ? h('button', {
          type: 'button', className: 'dmo-button dmo-button-link', 'aria-expanded': expanded,
          onClick: () => setExpanded(value => !value),
        }, tr(expanded ? 'overview.collapse' : 'overview.expand')) : null,
      ) : h('p', { className: 'dmo-hint' }, tr(emptyKey)),
    )
  }

  function OverviewSession(props) {
    const { useChat, useSession, useSessionStatus, sessionId, openView, t, locale } = props
    const running = useSession(state => state.running)
    const pending = useSessionStatus(state => state.get(sessionId)?.pendingInteraction)
    const chat = useChat(selectOverviewChat, equalOverviewChat)
    const tr = (key, values) => translate(t, locale, key, values)
    const attention = selectPendingAttention(pending, locale)
    const stage = selectOverviewStage({ running, pendingInteraction: pending, toolCount: chat.tools.length, hasPartial: chat.hasPartial })
    const latest = chat.replies[0]
    const previous = chat.replies.slice(1)
    const showProgress = running || attention || (chat.progress && chat.progress.text !== latest?.text)
    const attentionKey = `overview.attention.${attention?.kind}`
    const attentionTitle = attention && (attention.text || tr(overviewMessages.en[attentionKey] ? attentionKey : 'overview.attention.generic'))
    const openChat = () => openView('chat', '')

    return h('div', { className: 'dsh-mobile-overview', lang: locale || undefined },
      h('style', null, overviewStyles),
      h('section', { className: 'dmo-stage', 'data-busy': running ? 'true' : 'false', 'data-attention': attention ? 'true' : 'false' },
        h('p', { className: 'dmo-eyebrow' }, tr('overview.stage')),
        h('div', { className: 'dmo-stage-line', role: 'status', 'aria-live': 'polite', 'aria-atomic': 'true' },
          h('span', { className: 'dmo-dot', 'aria-hidden': 'true' }),
          h('span', null, tr(`overview.stage.${stage}`, { count: chat.tools.length })),
        ),
        running && !attention && chat.tools.length ? h('ul', { className: 'dmo-tools' },
          chat.tools.map(tool => h('li', { key: tool.id, className: 'dmo-tool' }, tool.name)),
        ) : null,
      ),
      attention ? h('section', { className: 'dmo-attention', key: attention.key },
        h('h2', { className: 'dmo-heading' }, tr('overview.attention')),
        h('p', { className: 'dmo-attention-title' }, attentionTitle),
        attention.reason ? h('p', { className: 'dmo-attention-reason' }, attention.reason) : null,
        h('p', { className: 'dmo-hint' }, tr('overview.respondBelow')),
      ) : null,
      showProgress ? h(Progress, { key: chat.progress?.key ?? stage, progress: chat.progress, stage, tr }) : null,
      latest ? h('section', { className: 'dmo-reply', key: latest.key },
        h('h2', { className: 'dmo-heading' }, tr('overview.latestReply')),
        h(ReadableText, { text: latest.text }),
      ) : h('section', { className: 'dmo-empty' },
        h('p', null, tr('overview.noReply')),
        h('p', { className: 'dmo-hint' }, tr('overview.noReplyHint')),
      ),
      previous.length ? h('section', null,
        h('h2', { className: 'dmo-heading' }, tr('overview.earlierReplies')),
        previous.map(reply => h('details', { key: reply.key, className: 'dmo-previous' },
          h('summary', null,
            tr('overview.replyNumber', { turn: reply.turn }),
            h('span', { className: 'dmo-previous-preview' }, firstSentence(reply.text, 96)),
          ),
          h('div', { className: 'dmo-previous-body' }, h(ReadableText, { text: reply.text })),
        )),
      ) : null,
      h('footer', { className: 'dmo-footer' },
        h('button', { type: 'button', className: 'dmo-button', onClick: openChat }, tr('overview.fullHistory'),
          h('span', { 'aria-hidden': 'true' }, '→')),
        h('p', { className: 'dmo-hint' }, tr('overview.fullHistoryHint')),
      ),
    )
  }

  // Reset only local disclosure state on an actual Session change. Streaming
  // updates never call scrollIntoView, focus, or any shared scrolling API.
  function MobileOverview(props) {
    return h(OverviewSession, { ...props, key: props.sessionId })
  }
  MobileOverview.displayName = 'MobileOverview'
  return MobileOverview
}
