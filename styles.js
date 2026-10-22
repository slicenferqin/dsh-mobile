export const styles = `
.dsh-mobile-app{position:fixed;inset:0;z-index:180;pointer-events:auto;display:flex;flex-direction:column;min-width:0;height:100dvh;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font:15px/1.5 system-ui,-apple-system,sans-serif;padding-top:env(safe-area-inset-top)}
.dsh-mobile-app *,.dsh-mobile-composer *,.dsh-mobile-settings *{box-sizing:border-box}
.dsh-mobile-app button,.dsh-mobile-app input,.dsh-mobile-app textarea,.dsh-mobile-composer button,.dsh-mobile-composer textarea{font:inherit}
.dsh-mobile-app h1,.dsh-mobile-app h2,.dsh-mobile-app h3,.dsh-mobile-app p{margin:0}
.dsh-mobile-app h1{font-size:26px;font-weight:650;letter-spacing:-.6px;line-height:1.25}
.dsh-mobile-app h2{font-size:17px;font-weight:600}
.dsh-mobile-app button{cursor:pointer}
.dsh-mobile-main{flex:1;min-height:0;display:flex;flex-direction:column;overflow:hidden}
.dsh-mobile-scroll{height:100%;overflow:auto;overscroll-behavior:contain;padding:24px 18px 28px;scrollbar-width:thin}
.dsh-mobile-page-heading{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:22px}
.dsh-mobile-page-heading h1{margin:4px 0 8px}
.dsh-mobile-eyebrow{color:var(--dsw-alias-brand-primary);font-size:12px;letter-spacing:1.2px;font-weight:650}
.dsh-mobile-muted{color:var(--dsw-alias-label-secondary);font-size:13px;line-height:1.6}
.dsh-mobile-grow{flex:1}
.dsh-mobile-button{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:9px 15px;border:1px solid var(--dsw-alias-border-l2);border-radius:12px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);white-space:nowrap;font-size:14px;line-height:24px;cursor:pointer}
.dsh-mobile-primary{background:var(--dsw-alias-brand-primary);border-color:transparent;color:var(--dsw-alias-label-primary-foreground)}
.dsh-mobile-quiet{min-height:44px;padding:8px 10px;border:0;border-radius:10px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:14px;line-height:24px;cursor:pointer}
.dsh-mobile-app button:disabled,.dsh-mobile-composer button:disabled{opacity:.45;cursor:default}
.dsh-mobile-app button:focus-visible,.dsh-mobile-app input:focus-visible,.dsh-mobile-composer textarea:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:3px}
.dsh-mobile-counters{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-bottom:20px}
.dsh-mobile-counter{display:flex;flex-direction:column;align-items:flex-start;gap:4px;padding:14px 12px;border:1px solid var(--dsw-alias-border-l1);border-radius:15px;color:var(--dsw-alias-label-secondary);background:var(--dsw-alias-bg-layer-1);line-height:1.4}
.dsh-mobile-counter strong{font-size:27px;font-weight:600;color:var(--dsw-alias-label-primary)}
.dsh-mobile-counter span{font-size:12px}
.dsh-mobile-counter.is-active{border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-bg-layer-2)}
.dsh-mobile-search{display:block;margin-bottom:22px}
.dsh-mobile-search input{display:block;width:100%;border:1px solid var(--dsw-alias-border-l1);border-radius:13px;padding:12px 14px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);font-size:16px;min-height:46px}
.dsh-mobile-list-title{display:flex;justify-content:space-between;align-items:center;min-height:36px;margin-bottom:10px}
.dsh-mobile-list-title h2{font-size:15px}
.dsh-mobile-task{display:block;width:100%;text-align:left;border:1px solid var(--dsw-alias-border-l1);border-radius:16px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary);padding:16px;margin-bottom:12px}
.dsh-mobile-task-meta,.dsh-mobile-task-foot{display:flex;align-items:center;justify-content:space-between;gap:8px;color:var(--dsw-alias-label-secondary);font-size:11px;line-height:1.5}
.dsh-mobile-task-meta>span:last-child{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;max-width:55%}
.dsh-mobile-task h3{margin:10px 0 14px;font-size:16px;font-weight:600;line-height:1.6;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;overflow-wrap:anywhere}
.dsh-mobile-task p{margin:-4px 0 14px;font-size:13px;line-height:1.5;color:var(--dsw-alias-label-secondary);overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.dsh-mobile-state{display:inline-flex;align-items:center;gap:5px;color:var(--dsw-alias-label-secondary)}
.dsh-mobile-state::before{content:'';width:5px;height:5px;border-radius:50%;corner-shape:round;background:currentColor}
.dsh-mobile-state.is-running{color:var(--dsw-alias-brand-primary)}
.dsh-mobile-state.is-waiting{color:var(--dsw-alias-state-warn-primary)}
.dsh-mobile-empty{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;padding:40px 24px;color:var(--dsw-alias-label-secondary);text-align:center}
.dsh-mobile-bottom{flex:0 0 auto;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border-top:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);padding:4px 14px calc(4px + env(safe-area-inset-bottom))}
.dsh-mobile-bottom button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;min-height:54px;border:0;border-radius:12px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:11px;line-height:1.3}
.dsh-mobile-bottom button[aria-current=page]{color:var(--dsw-alias-brand-primary);font-weight:650}
.dsh-mobile-nav-icon{font-size:23px;line-height:26px;font-weight:400}
.dsh-mobile-session{height:100%;display:flex;flex-direction:column;min-height:0}
.dsh-mobile-session-title{display:flex;align-items:center;gap:6px;padding:8px 14px 2px;min-height:60px;border-bottom:0;background:var(--dsw-alias-bg-layer-1)}
.dsh-mobile-title-copy{flex:1;min-width:0}
.dsh-mobile-title-copy h1{font-size:16px;line-height:1.4;letter-spacing:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.dsh-mobile-title-copy span{font-size:11px}
.dsh-mobile-back{font-size:30px;padding:0 8px;min-width:34px}
.dsh-mobile-tabs{display:flex;gap:18px;padding:0 20px;border-bottom:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1)}
.dsh-mobile-tabs button{position:relative;min-height:42px;border:0;background:transparent;color:var(--dsw-alias-label-secondary);padding:6px 2px;font-size:14px}
.dsh-mobile-tabs button[aria-selected=true]{color:var(--dsw-alias-brand-primary);font-weight:600}
.dsh-mobile-tabs button[aria-selected=true]::after{content:'';position:absolute;left:0;right:0;bottom:0;height:2px;background:currentColor;border-radius:2px}
.dsh-mobile-session-content{display:flex;flex:1;min-height:0;min-width:0}
.dsh-mobile-session-content>[data-conversation-content]{flex:1;min-width:0;min-height:0}
.dsh-mobile-composer{pointer-events:auto;display:flex;flex-direction:column;gap:7px;margin:8px 10px;padding:11px 12px 8px;border:1px solid var(--dsw-alias-border-l2);border-radius:17px;background:var(--dsw-alias-bg-layer-1);color:var(--dsw-alias-label-primary)}
.dsh-mobile-composer textarea{width:100%;min-height:48px;max-height:140px;resize:vertical;background:transparent;border:0;outline:none;color:var(--dsw-alias-label-primary);font:16px/1.5 system-ui,sans-serif;padding:0;margin:0}
.dsh-mobile-composer-actions{display:flex;align-items:center;gap:6px}
.dsh-mobile-composer-actions .dsh-mobile-button{min-height:38px;padding:6px 12px;line-height:24px;font-size:13px}
.dsh-mobile-composer-actions .dsh-mobile-quiet{padding:4px 0;min-height:38px;font-size:12px}
.dsh-mobile-error{color:var(--dsw-alias-state-error-primary);font-size:13px;padding:8px;overflow-wrap:anywhere}
.dsh-mobile-card{padding:18px;border:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1);border-radius:16px;margin-bottom:16px;display:flex;flex-direction:column;gap:14px}
.dsh-mobile-card form{display:flex;flex-direction:column;gap:14px}
.dsh-mobile-card label{display:flex;flex-direction:column;gap:8px;font-size:13px;color:var(--dsw-alias-label-secondary)}
.dsh-mobile-card input{width:100%;min-height:48px;padding:10px 12px;border:1px solid var(--dsw-alias-border-l2);border-radius:10px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font-size:16px}
.dsh-mobile-sheet-mask{position:absolute;inset:0;display:flex;align-items:flex-end;justify-content:center;background:color-mix(in srgb,var(--dsw-alias-label-primary) 20%,transparent);z-index:10}
.dsh-mobile-sheet{width:100%;max-height:75%;overflow:auto;padding:22px 18px calc(18px + env(safe-area-inset-bottom));border-radius:22px 22px 0 0;background:var(--dsw-alias-bg-layer-1);box-shadow:var(--dsw-elevation-prominent)}
.dsh-mobile-row{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:10px}
.dsh-mobile-workspace{display:flex;align-items:center;justify-content:space-between;width:100%;min-height:54px;padding:12px 8px;border:0;border-bottom:1px solid var(--dsw-alias-border-l1);background:transparent;color:var(--dsw-alias-label-primary);text-align:left}
.dsh-mobile-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}
.dsh-mobile-markdown{overflow-wrap:anywhere}
.dsh-mobile-markdown p{margin:0 0 12px;white-space:normal}
.dsh-mobile-markdown ul,.dsh-mobile-markdown ol{padding-left:23px;margin:10px 0 16px}
.dsh-mobile-markdown li{margin:6px 0}
.dsh-mobile-markdown h1,.dsh-mobile-markdown h2,.dsh-mobile-markdown h3{font-size:17px;margin:20px 0 10px;line-height:1.5}
.dsh-mobile-markdown pre{max-width:100%;overflow:auto;padding:12px;border-radius:10px;background:var(--dsw-alias-bg-layer-2);font-size:12px;line-height:1.6}
.dsh-mobile-markdown code{font-size:.87em}
.dsh-mobile-markdown a{color:var(--dsw-alias-brand-primary)}
.dsh-mobile-markdown table{display:block;max-width:100%;overflow:auto;border-collapse:collapse;font-size:13px;margin:12px 0}
.dsh-mobile-markdown th,.dsh-mobile-markdown td{padding:8px;border:1px solid var(--dsw-alias-border-l2);min-width:95px}
.dsh-mobile-settings{display:flex;flex-direction:column;gap:14px;color:var(--dsw-alias-label-primary)}
.dsh-mobile-launcher{display:flex;justify-content:center;padding:6px;background:var(--dsw-alias-bg-layer-1)}
@media(min-width:700px){.dsh-mobile-tasks,.dsh-mobile-device{width:min(100%,720px);align-self:center}.dsh-mobile-session{max-width:900px;width:100%;align-self:center}.dsh-mobile-bottom{padding-left:max(14px,calc((100% - 720px)/2));padding-right:max(14px,calc((100% - 720px)/2))}}
`;
