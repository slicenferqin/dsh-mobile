import React from 'react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { createMobileOverview, overviewMessages, overviewStyles } from './overview.js';
import en from './locale/en.json';
import zh from './locale/zh.json';
import { styles } from './styles.js';

export const inject = ['slots', 'locale', 'sessions', 'uiWorkspace'];
const NS = 'dsh-mobile';
const h = React.createElement;
const MODE_KEY = 'dsh.mobile.mode';
const SESSION_KEY = 'dsh.mobile.session';
const PASS = value => value;
function readPreference(key, fallback) {
  try { return localStorage.getItem(key) || fallback; }
  catch (error) { return fallback; }
}
function savePreference(key, value) {
  try { localStorage.setItem(key, value); }
  catch (error) { /* Browser privacy settings may disable preference persistence. */ }
}
const markup = text => h('div', { className: 'dsh-mobile-markdown', dangerouslySetInnerHTML: { __html: DOMPurify.sanitize(marked.parse(text, { async: false }), { FORBID_TAGS: ['style', 'script', 'iframe', 'form', 'input', 'button', 'img'] }) } });
const Overview = createMobileOverview(React, { renderMarkdown: markup });

/** Presentation state only; authoritative Session state stays in the Host-backed Client model. */
function createPresentation() {
  let preference = readPreference(MODE_KEY, 'auto');
  let advanced = false;
  let revision = 0;
  const listeners = new Set();
  const media = matchMedia('(max-width: 900px)');
  const emit = () => { revision++; for (const listener of listeners) listener(); };
  return {
    media,
    enabled: () => preference === 'mobile' || (preference === 'auto' && media.matches),
    getPreference: () => preference,
    getAdvanced: () => advanced,
    getSnapshot: () => revision,
    subscribe(listener) { listeners.add(listener); return () => listeners.delete(listener); },
    setPreference(value) { preference = value; savePreference(MODE_KEY, value); emit(); },
    setAdvanced(value) { if (advanced !== value) { advanced = value; emit(); } },
    changed: emit,
  };
}

export function apply(ctx) {
  const ui = createPresentation();
  ctx.effect(() => ctx.locale.register(NS, { en: { ...en.ui, ...overviewMessages.en }, zh: { ...zh.ui, ...overviewMessages.zh } }));
  const t = ctx.locale.bind(NS);
  const usePresentation = () => { React.useSyncExternalStore(ui.subscribe, ui.getSnapshot); return ui; };
  let compactDisposer;
  const syncComposer = () => {
    const needed = ui.enabled() && !ui.getAdvanced();
    if (needed && !compactDisposer) {
      const composer = ctx.slots.inject('conversation.composer.bar', () => ctx.slots.register({ name: 'conversation.composer.bar', priority: -100, locale: NS }, CompactComposer));
      const docks = ctx.slots.inject('conversation.input.dock', () => ['todo', 'goal'].map(id => ctx.slots.register({ name: 'conversation.input.dock', id, priority: -100 }, () => null)));
      compactDisposer = () => { docks(); composer(); };
    } else if (!needed && compactDisposer) {
      compactDisposer(); compactDisposer = undefined;
    }
  };
  ctx.effect(() => {
    ui.media.addEventListener('change', ui.changed);
    const unsubscribe = ui.subscribe(syncComposer);
    syncComposer();
    return () => { unsubscribe(); ui.media.removeEventListener('change', ui.changed); compactDisposer?.(); };
  });

  function CompactComposer(props) {
    const { inputActions, useInput, useSession, sessionId, disabled, blocked, onRequestWorkspace } = props;
    const input = useInput(PASS);
    const running = useSession(value => value?.running ?? false);
    const error = useSession(value => value?.promptError?.error?.message || null);
    const [stopError, setStopError] = React.useState(null);
    const [stopping, setStopping] = React.useState(false);
    const complex = Boolean(input?.attachmentIds.length || input?.occurrences.length || input?.claim);
    React.useEffect(() => { if (complex) ui.setAdvanced(true); }, [complex]);
    const locked = disabled || Boolean(blocked) || !inputActions || !input || input.phase !== 'plain' || complex;
    async function stop() {
      if (!sessionId || stopping) return;
      setStopping(true); setStopError(null);
      try {
        const result = await ctx.sessions.binding(sessionId)?.session.cancel();
        if (result?.ok === false) setStopError(result.error.message);
      } catch (error) { setStopError(t('requestFailed')); }
      finally { setStopping(false); }
    }
    return h('div', { className: 'dsh-mobile-composer', 'data-mobile-composer': '' },
      h('style', null, styles),
      props.accessory,
      blocked ? h('p', { className: 'dsh-mobile-muted', role: 'status' }, blocked.reason) : null,
      h('textarea', {
        'aria-label': t('message'), placeholder: props.placeholder || (running ? t('addMessage') : t('messagePlaceholder')),
        rows: 2, value: input?.draft || '', disabled: locked,
        onChange: event => { inputActions.setDraft(event.target.value); inputActions.persistDraft(); },
        onClick: () => { if (disabled) onRequestWorkspace?.(); },
        onKeyDown: event => {
          if ((event.ctrlKey || event.metaKey) && event.key === 'Enter' && !event.nativeEvent.isComposing && !locked) {
            event.preventDefault(); inputActions.submit();
          }
        },
      }),
      h('div', { className: 'dsh-mobile-composer-actions' },
        h('button', { type: 'button', className: 'dsh-mobile-quiet', onClick: () => ui.setAdvanced(true), 'aria-label': t('moreTools') }, t('moreTools')),
        h('div', { className: 'dsh-mobile-grow' }),
        running ? h('button', { type: 'button', className: 'dsh-mobile-button', onClick: stop, disabled: stopping }, t(stopping ? 'stopping' : 'stop')) : null,
        h('button', { type: 'button', className: 'dsh-mobile-button dsh-mobile-primary', disabled: locked || !input.draft.trim(), onClick: () => inputActions.submit() }, t('send'))),
      error || stopError ? h('p', { className: 'dsh-mobile-error', role: 'alert' }, error || stopError) : null);
  }

  function MobileSession(props) {
    const presentation = usePresentation();
    const running = props.useSession(value => value.running);
    const sessionError = props.useSession(value => value.openError?.message || null);
    const OverviewBody = React.useMemo(() => function OverviewBody(inner) {
      return h(Overview, { ...inner, t, openView: () => props.onMode('record'), inspectCall: undefined, viewRequest: null, completeViewRequest() {} });
    }, [props.onMode]);
    return h('div', { className: 'dsh-mobile-session' },
      h('div', { className: 'dsh-mobile-session-title' },
        h('button', { type: 'button', className: 'dsh-mobile-quiet dsh-mobile-back', onClick: props.onBack, 'aria-label': t('backToTasks') }, '‹'),
        h('div', { className: 'dsh-mobile-title-copy' }, h('h1', null, props.title), h('span', { className: 'dsh-mobile-muted' }, t(running ? 'running' : 'ready'))),
        presentation.getAdvanced() ? h('button', { type: 'button', className: 'dsh-mobile-quiet', onClick: () => ui.setAdvanced(false) }, t('compactInput')) : null),
      h('div', { className: 'dsh-mobile-tabs', role: 'tablist', 'aria-label': t('sessionViews') },
        ['overview', 'record'].map(mode => h('button', { type: 'button', key: mode, role: 'tab', 'aria-selected': props.mode === mode, onClick: () => props.onMode(mode) }, t(mode)))),
      sessionError ? h('p', { className: 'dsh-mobile-error', role: 'alert' }, sessionError) : null,
      h('div', { className: 'dsh-mobile-session-content' }, props.renderFactorySlot('conversation.content', { variant: 'embedded', phase: 'active', hero: false }, {
        slots: { ...(props.mode === 'overview' ? { views: OverviewBody } : {}), widthControls: () => null },
      })));
  }

  function DevicePanel() {
    const [device, setDevice] = React.useState(null);
    const [label, setLabel] = React.useState('');
    const [loading, setLoading] = React.useState(true);
    const [saving, setSaving] = React.useState(false);
    const [notice, setNotice] = React.useState(null);
    const [remote, setRemote] = React.useState(true);
    React.useEffect(() => {
      const controller = new AbortController();
      fetch('__dsh_remote_device', { credentials: 'same-origin', cache: 'no-store', signal: controller.signal }).then(async response => {
        if (!response.ok || !response.headers.get('content-type')?.includes('application/json')) { setRemote(false); return; }
        const value = await response.json(); setDevice(value); setLabel(value.label);
      }).catch(error => { if (error.name !== 'AbortError') setNotice(t('requestFailed')); }).finally(() => { if (!controller.signal.aborted) setLoading(false); });
      return () => controller.abort();
    }, []);
    async function save(event) {
      event.preventDefault();
      if (saving || !label.trim()) return;
      setSaving(true); setNotice(null);
      try {
        const response = await fetch('__dsh_remote_device', { method: 'POST', credentials: 'same-origin', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ label: label.trim() }) });
        if (!response.ok) throw new Error('rename failed');
        const value = await response.json(); setDevice(value); setLabel(value.label); setNotice(t('saved'));
      } catch (error) { setNotice(t('requestFailed')); }
      finally { setSaving(false); }
    }
    return h('div', { className: 'dsh-mobile-scroll dsh-mobile-device' },
      h('div', { className: 'dsh-mobile-page-heading' }, h('p', { className: 'dsh-mobile-eyebrow' }, 'DSH'), h('h1', null, t('device'))),
      h('section', { className: 'dsh-mobile-card' }, h('h2', null, t('deviceName')),
        loading ? h('p', { role: 'status' }, t('loading')) : !remote ? h('p', { className: 'dsh-mobile-muted' }, t('localDeviceNotice')) :
          h('form', { onSubmit: save }, h('label', null, t('deviceName'), h('input', { value: label, onChange: event => setLabel(event.target.value), maxLength: 80, required: true, disabled: saving })),
            h('button', { type: 'submit', className: 'dsh-mobile-button dsh-mobile-primary', disabled: saving || !label.trim() || label.trim() === device?.label }, t(saving ? 'saving' : 'save'))),
        notice ? h('p', { role: 'status', className: 'dsh-mobile-muted' }, notice) : null),
      h('section', { className: 'dsh-mobile-card' }, h('h2', null, t('appearance')), h('p', { className: 'dsh-mobile-muted' }, t('firstVersion')), h('button', { type: 'button', className: 'dsh-mobile-button', onClick: () => ui.setPreference('desktop') }, t('desktopMode'))));
  }

  function MobileRoot(props) {
    const presentation = usePresentation();
    const enabled = presentation.enabled();
    const sessions = props.useSessions(PASS);
    const statuses = props.useSessionStatus(PASS);
    const workspaces = props.useWorkspaces(PASS);
    const [tab, setTab] = React.useState('tasks');
    const [selectedId, setSelectedId] = React.useState(() => readPreference(SESSION_KEY, ''));
    const [reference, setReference] = React.useState(null);
    const [opening, setOpening] = React.useState(false);
    const [openError, setOpenError] = React.useState(null);
    const [query, setQuery] = React.useState('');
    const [filter, setFilter] = React.useState('all');
    const [limit, setLimit] = React.useState(20);
    React.useEffect(() => { setLimit(20); }, [query, filter]);
    const [mode, setMode] = React.useState('overview');
    const [workspaceSheet, setWorkspaceSheet] = React.useState(false);
    const [creating, setCreating] = React.useState(false);
    const selected = sessions.byId[selectedId];
    const sessionReference = React.useRef(null);
    const onMode = React.useCallback(value => setMode(value), []);
    React.useEffect(() => {
      if (!enabled || !selectedId || !selected) { setReference(null); return undefined; }
      let live = true;
      setOpening(true); setOpenError(null);
      const retained = ctx.sessions.retain(selectedId, { source: 'controllerOperation' });
      sessionReference.current = retained;
      retained.ready.then(() => { if (live) { setReference(retained); setOpening(false); } }).catch(error => { if (live) { setOpenError(t('openFailed')); setOpening(false); } });
      return () => { live = false; retained.release(); if (sessionReference.current === retained) sessionReference.current = null; };
    }, [enabled, selectedId, Boolean(selected)]);
    React.useEffect(() => {
      if (!enabled) return undefined;
      const previous = document.activeElement;
      return () => { if (previous instanceof HTMLElement && previous.isConnected) previous.focus({ preventScroll: true }); };
    }, [enabled]);
    if (!enabled) return null;
    const archived = new Set(workspaces.archivedSessionIds);
    const rows = sessions.ids.map(id => sessions.byId[id]).filter(row => row && !row.parentId && !row.blank && !archived.has(row.id));
    const classification = row => statuses.get(row.id)?.pendingInteraction ? 'waiting' : (statuses.get(row.id)?.running ?? row.running) ? 'running' : 'ready';
    const priority = { waiting: 0, running: 1, ready: 2 };
    rows.sort((a, b) => priority[classification(a)] - priority[classification(b)] || b.updatedAt - a.updatedAt);
    const counts = { all: rows.length, waiting: 0, running: 0, ready: 0 };
    for (const row of rows) counts[classification(row)]++;
    const visible = rows.filter(row => (filter === 'all' || classification(row) === filter) && `${row.displayTitle} ${row.cwd || ''}`.toLowerCase().includes(query.toLowerCase()));
    function open(id) {
      ctx.uiWorkspace.openSession(id);
      savePreference(SESSION_KEY, id);
      if (id !== selectedId) setReference(null);
      setSelectedId(id); setMode('overview'); setTab('session');
    }
    async function create(workspaceId) {
      if (creating) return;
      setCreating(true); setOpenError(null);
      try { const id = await ctx.uiWorkspace.connectWorkspace(workspaceId); setWorkspaceSheet(false); open(id); }
      catch (error) { setOpenError(t('createFailed')); }
      finally { setCreating(false); }
    }
    const tasks = h('div', { className: 'dsh-mobile-scroll dsh-mobile-tasks' },
      h('div', { className: 'dsh-mobile-page-heading' }, h('div', null, h('p', { className: 'dsh-mobile-eyebrow' }, t('workbench')), h('h1', null, t('tasks')), h('p', { className: 'dsh-mobile-muted' }, t('tasksHint'))), h('button', { type: 'button', className: 'dsh-mobile-button dsh-mobile-primary', onClick: () => setWorkspaceSheet(true) }, t('newTask'))),
      h('div', { className: 'dsh-mobile-counters' }, ['waiting', 'running', 'ready'].map(kind => h('button', { type: 'button', className: `dsh-mobile-counter ${filter === kind ? 'is-active' : ''}`, key: kind, onClick: () => setFilter(filter === kind ? 'all' : kind) }, h('strong', null, counts[kind]), h('span', null, t(kind))))),
      h('label', { className: 'dsh-mobile-search' }, h('span', { className: 'dsh-mobile-sr' }, t('searchTasks')), h('input', { type: 'search', value: query, onChange: event => setQuery(event.target.value), placeholder: t('searchTasks') })),
      h('div', { className: 'dsh-mobile-list-title' }, h('h2', null, t(filter)), filter !== 'all' ? h('button', { type: 'button', className: 'dsh-mobile-quiet', onClick: () => setFilter('all') }, t('showAll')) : null),
      sessions.phase !== 'ready' ? h('p', { role: 'status' }, t('loading')) : !visible.length ? h('p', { className: 'dsh-mobile-empty' }, t('noTasks')) : visible.slice(0, limit).map(row => {
        const state = classification(row);
        const workspace = workspaces.items.find(item => item.sessionIds.includes(row.id));
        const pending = statuses.get(row.id)?.pendingInteraction;
        const description = pending?.kind === 'approval' ? t('approvalNeeded') : pending?.questions?.[0]?.question;
        return h('button', { type: 'button', key: row.id, className: 'dsh-mobile-task', onClick: () => open(row.id) },
          h('div', { className: 'dsh-mobile-task-meta' }, h('span', { className: `dsh-mobile-state is-${state}` }, t(state)), h('span', null, workspace?.title || row.cwd?.split(/[\\/]/).filter(Boolean).pop() || 'DSH')),
          h('h3', null, row.displayTitle || t('untitled')), description ? h('p', null, description) : null,
          h('div', { className: 'dsh-mobile-task-foot' }, h('span', null, Number.isFinite(row.updatedAt) ? new Intl.DateTimeFormat(undefined, { month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' }).format(row.updatedAt) : ''), h('span', null, t('openTask'), ' ›')));
      }),
      visible.length > limit ? h('button', { type: 'button', className: 'dsh-mobile-button', onClick: () => setLimit(value => value + 20) }, t('loadMore')) : null,
      openError ? h('p', { className: 'dsh-mobile-error', role: 'alert' }, openError) : null);
    const session = !selectedId || !selected ? h('div', { className: 'dsh-mobile-empty' }, h('p', null, t('chooseTask')), h('button', { type: 'button', className: 'dsh-mobile-button', onClick: () => setTab('tasks') }, t('tasks'))) : opening || !reference ? h('div', { className: 'dsh-mobile-empty', role: 'status' }, openError || t('opening')) : h(props.SessionProvider, { session: reference, key: selectedId }, props.renderSlot('dsh-mobile.session', { title: selected.displayTitle || t('untitled'), mode, onMode, onBack: () => setTab('tasks') }));
    return h('section', { className: 'dsh-mobile-app', 'aria-label': t('workbench'), 'data-dsh-mobile': '' },
      h('style', null, styles + overviewStyles),
      h('div', { className: 'dsh-mobile-main' }, tab === 'tasks' ? tasks : tab === 'session' ? session : h(DevicePanel)),
      h('nav', { className: 'dsh-mobile-bottom', 'aria-label': t('mobileNavigation') }, ['tasks', 'session', 'device'].map((value, index) => h('button', { type: 'button', key: value, 'aria-current': tab === value ? 'page' : undefined, onClick: () => setTab(value) }, h('span', { className: 'dsh-mobile-nav-icon', 'aria-hidden': true }, ['▤', '◉', '◇'][index]), h('span', null, t(value))))),
      workspaceSheet ? h('div', { className: 'dsh-mobile-sheet-mask', onClick: () => { if (!creating) setWorkspaceSheet(false); } }, h('section', { className: 'dsh-mobile-sheet', role: 'dialog', 'aria-modal': true, 'aria-label': t('chooseWorkspace'), onClick: event => event.stopPropagation() }, h('div', { className: 'dsh-mobile-row' }, h('h2', null, t('chooseWorkspace')), h('button', { type: 'button', className: 'dsh-mobile-quiet', disabled: creating, onClick: () => setWorkspaceSheet(false) }, t('cancel'))), workspaces.items.map(item => h('button', { type: 'button', key: item.workspaceId, className: 'dsh-mobile-workspace', disabled: creating, onClick: () => create(item.workspaceId) }, item.title, ' ›')), !workspaces.items.length ? h('p', null, t('noWorkspaces')) : null)) : null);
  }

  function MobileLauncher() {
    usePresentation();
    return !ui.enabled() && ui.media.matches ? h('div', { className: 'dsh-mobile-launcher' }, h('style', null, styles), h('button', { type: 'button', className: 'dsh-mobile-button', onClick: () => ui.setPreference('mobile') }, t('openMobile'))) : null;
  }
  ctx.slots.inject('shell.overlay', () => ctx.slots.register({ name: 'shell.overlay', id: 'dsh-mobile.workspace', order: 50, locale: NS, children: { 'dsh-mobile.session': { kind: 'single', scope: 'session' } } }, MobileRoot));
  ctx.slots.inject('dsh-mobile.session', () => ctx.slots.register({ name: 'dsh-mobile.session', locale: NS }, MobileSession));
  ctx.slots.inject('shell.bottom', () => ctx.slots.register({ name: 'shell.bottom', locale: NS }, MobileLauncher));
}
