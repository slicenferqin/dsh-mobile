window.__ModuleLoader__.load({id:'dsh-mobile',factory(require){const module={exports:{}};const exports=module.exports;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// app.js
var app_exports = {};
__export(app_exports, {
  apply: () => apply3,
  inject: () => inject
});
module.exports = __toCommonJS(app_exports);
var import_react = __toESM(require("react"), 1);

// node_modules/.pnpm/marked@16.4.2/node_modules/marked/lib/marked.esm.js
function L() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var T = L();
function G(l3) {
  T = l3;
}
var E = { exec: () => null };
function d(l3, e = "") {
  let t = typeof l3 == "string" ? l3 : l3.source, n = { replace: (r, i) => {
    let s = typeof i == "string" ? i : i.source;
    return s = s.replace(m.caret, "$1"), t = t.replace(r, s), n;
  }, getRegex: () => new RegExp(t, e) };
  return n;
}
var be = (() => {
  try {
    return !!new RegExp("(?<=1)(?<!1)");
  } catch {
    return false;
  }
})();
var m = { codeRemoveIndent: /^(?: {1,4}| {0,3}\t)/gm, outputLinkReplace: /\\([\[\]])/g, indentCodeCompensation: /^(\s+)(?:```)/, beginningSpace: /^\s+/, endingHash: /#$/, startingSpaceChar: /^ /, endingSpaceChar: / $/, nonSpaceChar: /[^ ]/, newLineCharGlobal: /\n/g, tabCharGlobal: /\t/g, multipleSpaceGlobal: /\s+/g, blankLine: /^[ \t]*$/, doubleBlankLine: /\n[ \t]*\n[ \t]*$/, blockquoteStart: /^ {0,3}>/, blockquoteSetextReplace: /\n {0,3}((?:=+|-+) *)(?=\n|$)/g, blockquoteSetextReplace2: /^ {0,3}>[ \t]?/gm, listReplaceTabs: /^\t+/, listReplaceNesting: /^ {1,4}(?=( {4})*[^ ])/g, listIsTask: /^\[[ xX]\] /, listReplaceTask: /^\[[ xX]\] +/, anyLine: /\n.*\n/, hrefBrackets: /^<(.*)>$/, tableDelimiter: /[:|]/, tableAlignChars: /^\||\| *$/g, tableRowBlankLine: /\n[ \t]*$/, tableAlignRight: /^ *-+: *$/, tableAlignCenter: /^ *:-+: *$/, tableAlignLeft: /^ *:-+ *$/, startATag: /^<a /i, endATag: /^<\/a>/i, startPreScriptTag: /^<(pre|code|kbd|script)(\s|>)/i, endPreScriptTag: /^<\/(pre|code|kbd|script)(\s|>)/i, startAngleBracket: /^</, endAngleBracket: />$/, pedanticHrefTitle: /^([^'"]*[^\s])\s+(['"])(.*)\2/, unicodeAlphaNumeric: /[\p{L}\p{N}]/u, escapeTest: /[&<>"']/, escapeReplace: /[&<>"']/g, escapeTestNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, escapeReplaceNoEncode: /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g, unescapeTest: /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, caret: /(^|[^\[])\^/g, percentDecode: /%25/g, findPipe: /\|/g, splitPipe: / \|/, slashPipe: /\\\|/g, carriageReturn: /\r\n|\r/g, spaceLine: /^ +$/gm, notSpaceStart: /^\S*/, endingNewline: /\n$/, listItemRegex: (l3) => new RegExp(`^( {0,3}${l3})((?:[	 ][^\\n]*)?(?:\\n|$))`), nextBulletRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), hrRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), fencesBeginRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}(?:\`\`\`|~~~)`), headingBeginRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}#`), htmlBeginRegex: (l3) => new RegExp(`^ {0,${Math.min(3, l3 - 1)}}<(?:[a-z].*>|!--)`, "i") };
var Re = /^(?:[ \t]*(?:\n|$))+/;
var Te = /^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/;
var Oe = /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/;
var I = /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/;
var we = /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/;
var F = /(?:[*+-]|\d{1,9}[.)])/;
var ie = /^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/;
var oe = d(ie).replace(/bull/g, F).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/\|table/g, "").getRegex();
var ye = d(ie).replace(/bull/g, F).replace(/blockCode/g, /(?: {4}| {0,3}\t)/).replace(/fences/g, / {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g, / {0,3}>/).replace(/heading/g, / {0,3}#{1,6}/).replace(/html/g, / {0,3}<[^\n>]+>\n/).replace(/table/g, / {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex();
var j = /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/;
var Pe = /^[^\n]+/;
var Q = /(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/;
var Se = d(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label", Q).replace("title", /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex();
var $e = d(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g, F).getRegex();
var v = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
var U = /<!--(?:-?>|[\s\S]*?(?:-->|$))/;
var _e = d("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))", "i").replace("comment", U).replace("tag", v).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
var ae = d(j).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
var Le = d(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph", ae).getRegex();
var K = { blockquote: Le, code: Te, def: Se, fences: Oe, heading: we, hr: I, html: _e, lheading: oe, list: $e, newline: Re, paragraph: ae, table: E, text: Pe };
var re = d("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("blockquote", " {0,3}>").replace("code", "(?: {4}| {0,3}	)[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex();
var Me = { ...K, lheading: ye, table: re, paragraph: d(j).replace("hr", I).replace("heading", " {0,3}#{1,6}(?:\\s|$)").replace("|lheading", "").replace("table", re).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", v).getRegex() };
var ze = { ...K, html: d(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", U).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: E, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: d(j).replace("hr", I).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", oe).replace("|table", "").replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").replace("|tag", "").getRegex() };
var Ae = /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/;
var Ee = /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/;
var le = /^( {2,}|\\)\n(?!\s*$)/;
var Ie = /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/;
var D = /[\p{P}\p{S}]/u;
var W = /[\s\p{P}\p{S}]/u;
var ue = /[^\s\p{P}\p{S}]/u;
var Ce = d(/^((?![*_])punctSpace)/, "u").replace(/punctSpace/g, W).getRegex();
var pe = /(?!~)[\p{P}\p{S}]/u;
var Be = /(?!~)[\s\p{P}\p{S}]/u;
var qe = /(?:[^\s\p{P}\p{S}]|~)/u;
var ve = d(/link|precode-code|html/, "g").replace("link", /\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-", be ? "(?<!`)()" : "(^^|[^`])").replace("code", /(?<b>`+)[^`]+\k<b>(?!`)/).replace("html", /<(?! )[^<>]*?>/).getRegex();
var ce = /^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/;
var De = d(ce, "u").replace(/punct/g, D).getRegex();
var He = d(ce, "u").replace(/punct/g, pe).getRegex();
var he = "^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)";
var Ze = d(he, "gu").replace(/notPunctSpace/g, ue).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex();
var Ge = d(he, "gu").replace(/notPunctSpace/g, qe).replace(/punctSpace/g, Be).replace(/punct/g, pe).getRegex();
var Ne = d("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)", "gu").replace(/notPunctSpace/g, ue).replace(/punctSpace/g, W).replace(/punct/g, D).getRegex();
var Fe = d(/\\(punct)/, "gu").replace(/punct/g, D).getRegex();
var je = d(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme", /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email", /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex();
var Qe = d(U).replace("(?:-->|$)", "-->").getRegex();
var Ue = d("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment", Qe).replace("attribute", /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex();
var q = /(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+[^`]*?`+(?!`)|[^\[\]\\`])*?/;
var Ke = d(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label", q).replace("href", /<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title", /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex();
var de = d(/^!?\[(label)\]\[(ref)\]/).replace("label", q).replace("ref", Q).getRegex();
var ke = d(/^!?\[(ref)\](?:\[\])?/).replace("ref", Q).getRegex();
var We = d("reflink|nolink(?!\\()", "g").replace("reflink", de).replace("nolink", ke).getRegex();
var se = /[hH][tT][tT][pP][sS]?|[fF][tT][pP]/;
var X = { _backpedal: E, anyPunctuation: Fe, autolink: je, blockSkip: ve, br: le, code: Ee, del: E, emStrongLDelim: De, emStrongRDelimAst: Ze, emStrongRDelimUnd: Ne, escape: Ae, link: Ke, nolink: ke, punctuation: Ce, reflink: de, reflinkSearch: We, tag: Ue, text: Ie, url: E };
var Xe = { ...X, link: d(/^!?\[(label)\]\((.*?)\)/).replace("label", q).getRegex(), reflink: d(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", q).getRegex() };
var N = { ...X, emStrongRDelimAst: Ge, emStrongLDelim: He, url: d(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol", se).replace("email", /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(), _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/, text: d(/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol", se).getRegex() };
var Je = { ...N, br: d(le).replace("{2,}", "*").getRegex(), text: d(N.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var C = { normal: K, gfm: Me, pedantic: ze };
var M = { normal: X, gfm: N, breaks: Je, pedantic: Xe };
var Ve = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var ge = (l3) => Ve[l3];
function w(l3, e) {
  if (e) {
    if (m.escapeTest.test(l3)) return l3.replace(m.escapeReplace, ge);
  } else if (m.escapeTestNoEncode.test(l3)) return l3.replace(m.escapeReplaceNoEncode, ge);
  return l3;
}
function J(l3) {
  try {
    l3 = encodeURI(l3).replace(m.percentDecode, "%");
  } catch {
    return null;
  }
  return l3;
}
function V(l3, e) {
  let t = l3.replace(m.findPipe, (i, s, a) => {
    let o = false, p = s;
    for (; --p >= 0 && a[p] === "\\"; ) o = !o;
    return o ? "|" : " |";
  }), n = t.split(m.splitPipe), r = 0;
  if (n[0].trim() || n.shift(), n.length > 0 && !n.at(-1)?.trim() && n.pop(), e) if (n.length > e) n.splice(e);
  else for (; n.length < e; ) n.push("");
  for (; r < n.length; r++) n[r] = n[r].trim().replace(m.slashPipe, "|");
  return n;
}
function z(l3, e, t) {
  let n = l3.length;
  if (n === 0) return "";
  let r = 0;
  for (; r < n; ) {
    let i = l3.charAt(n - r - 1);
    if (i === e && !t) r++;
    else if (i !== e && t) r++;
    else break;
  }
  return l3.slice(0, n - r);
}
function fe(l3, e) {
  if (l3.indexOf(e[1]) === -1) return -1;
  let t = 0;
  for (let n = 0; n < l3.length; n++) if (l3[n] === "\\") n++;
  else if (l3[n] === e[0]) t++;
  else if (l3[n] === e[1] && (t--, t < 0)) return n;
  return t > 0 ? -2 : -1;
}
function me(l3, e, t, n, r) {
  let i = e.href, s = e.title || null, a = l3[1].replace(r.other.outputLinkReplace, "$1");
  n.state.inLink = true;
  let o = { type: l3[0].charAt(0) === "!" ? "image" : "link", raw: t, href: i, title: s, text: a, tokens: n.inlineTokens(a) };
  return n.state.inLink = false, o;
}
function Ye(l3, e, t) {
  let n = l3.match(t.other.indentCodeCompensation);
  if (n === null) return e;
  let r = n[1];
  return e.split(`
`).map((i) => {
    let s = i.match(t.other.beginningSpace);
    if (s === null) return i;
    let [a] = s;
    return a.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
var y = class {
  options;
  rules;
  lexer;
  constructor(e) {
    this.options = e || T;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let n = t[0].replace(this.rules.other.codeRemoveIndent, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? n : z(n, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let n = t[0], r = Ye(n, t[3] || "", this.rules);
      return { type: "code", raw: n, lang: t[2] ? t[2].trim().replace(this.rules.inline.anyPunctuation, "$1") : t[2], text: r };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (this.rules.other.endingHash.test(n)) {
        let r = z(n, "#");
        (this.options.pedantic || !r || this.rules.other.endingSpaceChar.test(r)) && (n = r.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: n, tokens: this.lexer.inline(n) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t) return { type: "hr", raw: z(t[0], `
`) };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let n = z(t[0], `
`).split(`
`), r = "", i = "", s = [];
      for (; n.length > 0; ) {
        let a = false, o = [], p;
        for (p = 0; p < n.length; p++) if (this.rules.other.blockquoteStart.test(n[p])) o.push(n[p]), a = true;
        else if (!a) o.push(n[p]);
        else break;
        n = n.slice(p);
        let u = o.join(`
`), c = u.replace(this.rules.other.blockquoteSetextReplace, `
    $1`).replace(this.rules.other.blockquoteSetextReplace2, "");
        r = r ? `${r}
${u}` : u, i = i ? `${i}
${c}` : c;
        let g = this.lexer.state.top;
        if (this.lexer.state.top = true, this.lexer.blockTokens(c, s, true), this.lexer.state.top = g, n.length === 0) break;
        let h2 = s.at(-1);
        if (h2?.type === "code") break;
        if (h2?.type === "blockquote") {
          let R = h2, f = R.raw + `
` + n.join(`
`), O = this.blockquote(f);
          s[s.length - 1] = O, r = r.substring(0, r.length - R.raw.length) + O.raw, i = i.substring(0, i.length - R.text.length) + O.text;
          break;
        } else if (h2?.type === "list") {
          let R = h2, f = R.raw + `
` + n.join(`
`), O = this.list(f);
          s[s.length - 1] = O, r = r.substring(0, r.length - h2.raw.length) + O.raw, i = i.substring(0, i.length - R.raw.length) + O.raw, n = f.substring(s.at(-1).raw.length).split(`
`);
          continue;
        }
      }
      return { type: "blockquote", raw: r, tokens: s, text: i };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n = t[1].trim(), r = n.length > 1, i = { type: "list", raw: "", ordered: r, start: r ? +n.slice(0, -1) : "", loose: false, items: [] };
      n = r ? `\\d{1,9}\\${n.slice(-1)}` : `\\${n}`, this.options.pedantic && (n = r ? n : "[*+-]");
      let s = this.rules.other.listItemRegex(n), a = false;
      for (; e; ) {
        let p = false, u = "", c = "";
        if (!(t = s.exec(e)) || this.rules.block.hr.test(e)) break;
        u = t[0], e = e.substring(u.length);
        let g = t[2].split(`
`, 1)[0].replace(this.rules.other.listReplaceTabs, (H) => " ".repeat(3 * H.length)), h2 = e.split(`
`, 1)[0], R = !g.trim(), f = 0;
        if (this.options.pedantic ? (f = 2, c = g.trimStart()) : R ? f = t[1].length + 1 : (f = t[2].search(this.rules.other.nonSpaceChar), f = f > 4 ? 1 : f, c = g.slice(f), f += t[1].length), R && this.rules.other.blankLine.test(h2) && (u += h2 + `
`, e = e.substring(h2.length + 1), p = true), !p) {
          let H = this.rules.other.nextBulletRegex(f), ee = this.rules.other.hrRegex(f), te = this.rules.other.fencesBeginRegex(f), ne = this.rules.other.headingBeginRegex(f), xe = this.rules.other.htmlBeginRegex(f);
          for (; e; ) {
            let Z = e.split(`
`, 1)[0], A;
            if (h2 = Z, this.options.pedantic ? (h2 = h2.replace(this.rules.other.listReplaceNesting, "  "), A = h2) : A = h2.replace(this.rules.other.tabCharGlobal, "    "), te.test(h2) || ne.test(h2) || xe.test(h2) || H.test(h2) || ee.test(h2)) break;
            if (A.search(this.rules.other.nonSpaceChar) >= f || !h2.trim()) c += `
` + A.slice(f);
            else {
              if (R || g.replace(this.rules.other.tabCharGlobal, "    ").search(this.rules.other.nonSpaceChar) >= 4 || te.test(g) || ne.test(g) || ee.test(g)) break;
              c += `
` + h2;
            }
            !R && !h2.trim() && (R = true), u += Z + `
`, e = e.substring(Z.length + 1), g = A.slice(f);
          }
        }
        i.loose || (a ? i.loose = true : this.rules.other.doubleBlankLine.test(u) && (a = true));
        let O = null, Y;
        this.options.gfm && (O = this.rules.other.listIsTask.exec(c), O && (Y = O[0] !== "[ ] ", c = c.replace(this.rules.other.listReplaceTask, ""))), i.items.push({ type: "list_item", raw: u, task: !!O, checked: Y, loose: false, text: c, tokens: [] }), i.raw += u;
      }
      let o = i.items.at(-1);
      if (o) o.raw = o.raw.trimEnd(), o.text = o.text.trimEnd();
      else return;
      i.raw = i.raw.trimEnd();
      for (let p = 0; p < i.items.length; p++) if (this.lexer.state.top = false, i.items[p].tokens = this.lexer.blockTokens(i.items[p].text, []), !i.loose) {
        let u = i.items[p].tokens.filter((g) => g.type === "space"), c = u.length > 0 && u.some((g) => this.rules.other.anyLine.test(g.raw));
        i.loose = c;
      }
      if (i.loose) for (let p = 0; p < i.items.length; p++) i.items[p].loose = true;
      return i;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t) return { type: "html", block: true, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let n = t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal, " "), r = t[2] ? t[2].replace(this.rules.other.hrefBrackets, "$1").replace(this.rules.inline.anyPunctuation, "$1") : "", i = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline.anyPunctuation, "$1") : t[3];
      return { type: "def", tag: n, raw: t[0], href: r, title: i };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (!t || !this.rules.other.tableDelimiter.test(t[2])) return;
    let n = V(t[1]), r = t[2].replace(this.rules.other.tableAlignChars, "").split("|"), i = t[3]?.trim() ? t[3].replace(this.rules.other.tableRowBlankLine, "").split(`
`) : [], s = { type: "table", raw: t[0], header: [], align: [], rows: [] };
    if (n.length === r.length) {
      for (let a of r) this.rules.other.tableAlignRight.test(a) ? s.align.push("right") : this.rules.other.tableAlignCenter.test(a) ? s.align.push("center") : this.rules.other.tableAlignLeft.test(a) ? s.align.push("left") : s.align.push(null);
      for (let a = 0; a < n.length; a++) s.header.push({ text: n[a], tokens: this.lexer.inline(n[a]), header: true, align: s.align[a] });
      for (let a of i) s.rows.push(V(a, s.header.length).map((o, p) => ({ text: o, tokens: this.lexer.inline(o), header: false, align: s.align[p] })));
      return s;
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t) return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let n = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: n, tokens: this.lexer.inline(n) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t) return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t) return { type: "escape", raw: t[0], text: t[1] };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t) return !this.lexer.state.inLink && this.rules.other.startATag.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && this.rules.other.endATag.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && this.rules.other.startPreScriptTag.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && this.rules.other.endPreScriptTag.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let n = t[2].trim();
      if (!this.options.pedantic && this.rules.other.startAngleBracket.test(n)) {
        if (!this.rules.other.endAngleBracket.test(n)) return;
        let s = z(n.slice(0, -1), "\\");
        if ((n.length - s.length) % 2 === 0) return;
      } else {
        let s = fe(t[2], "()");
        if (s === -2) return;
        if (s > -1) {
          let o = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + s;
          t[2] = t[2].substring(0, s), t[0] = t[0].substring(0, o).trim(), t[3] = "";
        }
      }
      let r = t[2], i = "";
      if (this.options.pedantic) {
        let s = this.rules.other.pedanticHrefTitle.exec(r);
        s && (r = s[1], i = s[3]);
      } else i = t[3] ? t[3].slice(1, -1) : "";
      return r = r.trim(), this.rules.other.startAngleBracket.test(r) && (this.options.pedantic && !this.rules.other.endAngleBracket.test(n) ? r = r.slice(1) : r = r.slice(1, -1)), me(t, { href: r && r.replace(this.rules.inline.anyPunctuation, "$1"), title: i && i.replace(this.rules.inline.anyPunctuation, "$1") }, t[0], this.lexer, this.rules);
    }
  }
  reflink(e, t) {
    let n;
    if ((n = this.rules.inline.reflink.exec(e)) || (n = this.rules.inline.nolink.exec(e))) {
      let r = (n[2] || n[1]).replace(this.rules.other.multipleSpaceGlobal, " "), i = t[r.toLowerCase()];
      if (!i) {
        let s = n[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return me(n, i, n[0], this.lexer, this.rules);
    }
  }
  emStrong(e, t, n = "") {
    let r = this.rules.inline.emStrongLDelim.exec(e);
    if (!r || r[3] && n.match(this.rules.other.unicodeAlphaNumeric)) return;
    if (!(r[1] || r[2] || "") || !n || this.rules.inline.punctuation.exec(n)) {
      let s = [...r[0]].length - 1, a, o, p = s, u = 0, c = r[0][0] === "*" ? this.rules.inline.emStrongRDelimAst : this.rules.inline.emStrongRDelimUnd;
      for (c.lastIndex = 0, t = t.slice(-1 * e.length + s); (r = c.exec(t)) != null; ) {
        if (a = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !a) continue;
        if (o = [...a].length, r[3] || r[4]) {
          p += o;
          continue;
        } else if ((r[5] || r[6]) && s % 3 && !((s + o) % 3)) {
          u += o;
          continue;
        }
        if (p -= o, p > 0) continue;
        o = Math.min(o, o + p + u);
        let g = [...r[0]][0].length, h2 = e.slice(0, s + r.index + g + o);
        if (Math.min(s, o) % 2) {
          let f = h2.slice(1, -1);
          return { type: "em", raw: h2, text: f, tokens: this.lexer.inlineTokens(f) };
        }
        let R = h2.slice(2, -2);
        return { type: "strong", raw: h2, text: R, tokens: this.lexer.inlineTokens(R) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(this.rules.other.newLineCharGlobal, " "), r = this.rules.other.nonSpaceChar.test(n), i = this.rules.other.startingSpaceChar.test(n) && this.rules.other.endingSpaceChar.test(n);
      return r && i && (n = n.substring(1, n.length - 1)), { type: "codespan", raw: t[0], text: n };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t) return { type: "br", raw: t[0] };
  }
  del(e) {
    let t = this.rules.inline.del.exec(e);
    if (t) return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let n, r;
      return t[2] === "@" ? (n = t[1], r = "mailto:" + n) : (n = t[1], r = n), { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let n, r;
      if (t[2] === "@") n = t[0], r = "mailto:" + n;
      else {
        let i;
        do
          i = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])?.[0] ?? "";
        while (i !== t[0]);
        n = t[0], t[1] === "www." ? r = "http://" + t[0] : r = t[0];
      }
      return { type: "link", raw: t[0], text: n, href: r, tokens: [{ type: "text", raw: n, text: n }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let n = this.lexer.state.inRawBlock;
      return { type: "text", raw: t[0], text: t[0], escaped: n };
    }
  }
};
var x = class l {
  tokens;
  options;
  state;
  tokenizer;
  inlineQueue;
  constructor(e) {
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || T, this.options.tokenizer = this.options.tokenizer || new y(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t = { other: m, block: C.normal, inline: M.normal };
    this.options.pedantic ? (t.block = C.pedantic, t.inline = M.pedantic) : this.options.gfm && (t.block = C.gfm, this.options.breaks ? t.inline = M.breaks : t.inline = M.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: C, inline: M };
  }
  static lex(e, t) {
    return new l(t).lex(e);
  }
  static lexInline(e, t) {
    return new l(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(m.carriageReturn, `
`), this.blockTokens(e, this.tokens);
    for (let t = 0; t < this.inlineQueue.length; t++) {
      let n = this.inlineQueue[t];
      this.inlineTokens(n.src, n.tokens);
    }
    return this.inlineQueue = [], this.tokens;
  }
  blockTokens(e, t = [], n = false) {
    for (this.options.pedantic && (e = e.replace(m.tabCharGlobal, "    ").replace(m.spaceLine, "")); e; ) {
      let r;
      if (this.options.extensions?.block?.some((s) => (r = s.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false)) continue;
      if (r = this.tokenizer.space(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        r.raw.length === 1 && s !== void 0 ? s.raw += `
` : t.push(r);
        continue;
      }
      if (r = this.tokenizer.code(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (r = this.tokenizer.fences(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.heading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.hr(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.blockquote(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.list(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.html(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.def(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "paragraph" || s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.raw, this.inlineQueue.at(-1).src = s.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title }, t.push(r));
        continue;
      }
      if (r = this.tokenizer.table(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      if (r = this.tokenizer.lheading(e)) {
        e = e.substring(r.raw.length), t.push(r);
        continue;
      }
      let i = e;
      if (this.options.extensions?.startBlock) {
        let s = 1 / 0, a = e.slice(1), o;
        this.options.extensions.startBlock.forEach((p) => {
          o = p.call({ lexer: this }, a), typeof o == "number" && o >= 0 && (s = Math.min(s, o));
        }), s < 1 / 0 && s >= 0 && (i = e.substring(0, s + 1));
      }
      if (this.state.top && (r = this.tokenizer.paragraph(i))) {
        let s = t.at(-1);
        n && s?.type === "paragraph" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r), n = i.length !== e.length, e = e.substring(r.raw.length);
        continue;
      }
      if (r = this.tokenizer.text(e)) {
        e = e.substring(r.raw.length);
        let s = t.at(-1);
        s?.type === "text" ? (s.raw += (s.raw.endsWith(`
`) ? "" : `
`) + r.raw, s.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue.at(-1).src = s.text) : t.push(r);
        continue;
      }
      if (e) {
        let s = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(s);
          break;
        } else throw new Error(s);
      }
    }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let n = e, r = null;
    if (this.tokens.links) {
      let o = Object.keys(this.tokens.links);
      if (o.length > 0) for (; (r = this.tokenizer.rules.inline.reflinkSearch.exec(n)) != null; ) o.includes(r[0].slice(r[0].lastIndexOf("[") + 1, -1)) && (n = n.slice(0, r.index) + "[" + "a".repeat(r[0].length - 2) + "]" + n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (r = this.tokenizer.rules.inline.anyPunctuation.exec(n)) != null; ) n = n.slice(0, r.index) + "++" + n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    let i;
    for (; (r = this.tokenizer.rules.inline.blockSkip.exec(n)) != null; ) i = r[2] ? r[2].length : 0, n = n.slice(0, r.index + i) + "[" + "a".repeat(r[0].length - i - 2) + "]" + n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    n = this.options.hooks?.emStrongMask?.call({ lexer: this }, n) ?? n;
    let s = false, a = "";
    for (; e; ) {
      s || (a = ""), s = false;
      let o;
      if (this.options.extensions?.inline?.some((u) => (o = u.call({ lexer: this }, e, t)) ? (e = e.substring(o.raw.length), t.push(o), true) : false)) continue;
      if (o = this.tokenizer.escape(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.tag(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.link(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.reflink(e, this.tokens.links)) {
        e = e.substring(o.raw.length);
        let u = t.at(-1);
        o.type === "text" && u?.type === "text" ? (u.raw += o.raw, u.text += o.text) : t.push(o);
        continue;
      }
      if (o = this.tokenizer.emStrong(e, n, a)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.codespan(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.br(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.del(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (o = this.tokenizer.autolink(e)) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      if (!this.state.inLink && (o = this.tokenizer.url(e))) {
        e = e.substring(o.raw.length), t.push(o);
        continue;
      }
      let p = e;
      if (this.options.extensions?.startInline) {
        let u = 1 / 0, c = e.slice(1), g;
        this.options.extensions.startInline.forEach((h2) => {
          g = h2.call({ lexer: this }, c), typeof g == "number" && g >= 0 && (u = Math.min(u, g));
        }), u < 1 / 0 && u >= 0 && (p = e.substring(0, u + 1));
      }
      if (o = this.tokenizer.inlineText(p)) {
        e = e.substring(o.raw.length), o.raw.slice(-1) !== "_" && (a = o.raw.slice(-1)), s = true;
        let u = t.at(-1);
        u?.type === "text" ? (u.raw += o.raw, u.text += o.text) : t.push(o);
        continue;
      }
      if (e) {
        let u = "Infinite loop on byte: " + e.charCodeAt(0);
        if (this.options.silent) {
          console.error(u);
          break;
        } else throw new Error(u);
      }
    }
    return t;
  }
};
var P = class {
  options;
  parser;
  constructor(e) {
    this.options = e || T;
  }
  space(e) {
    return "";
  }
  code({ text: e, lang: t, escaped: n }) {
    let r = (t || "").match(m.notSpaceStart)?.[0], i = e.replace(m.endingNewline, "") + `
`;
    return r ? '<pre><code class="language-' + w(r) + '">' + (n ? i : w(i, true)) + `</code></pre>
` : "<pre><code>" + (n ? i : w(i, true)) + `</code></pre>
`;
  }
  blockquote({ tokens: e }) {
    return `<blockquote>
${this.parser.parse(e)}</blockquote>
`;
  }
  html({ text: e }) {
    return e;
  }
  def(e) {
    return "";
  }
  heading({ tokens: e, depth: t }) {
    return `<h${t}>${this.parser.parseInline(e)}</h${t}>
`;
  }
  hr(e) {
    return `<hr>
`;
  }
  list(e) {
    let t = e.ordered, n = e.start, r = "";
    for (let a = 0; a < e.items.length; a++) {
      let o = e.items[a];
      r += this.listitem(o);
    }
    let i = t ? "ol" : "ul", s = t && n !== 1 ? ' start="' + n + '"' : "";
    return "<" + i + s + `>
` + r + "</" + i + `>
`;
  }
  listitem(e) {
    let t = "";
    if (e.task) {
      let n = this.checkbox({ checked: !!e.checked });
      e.loose ? e.tokens[0]?.type === "paragraph" ? (e.tokens[0].text = n + " " + e.tokens[0].text, e.tokens[0].tokens && e.tokens[0].tokens.length > 0 && e.tokens[0].tokens[0].type === "text" && (e.tokens[0].tokens[0].text = n + " " + w(e.tokens[0].tokens[0].text), e.tokens[0].tokens[0].escaped = true)) : e.tokens.unshift({ type: "text", raw: n + " ", text: n + " ", escaped: true }) : t += n + " ";
    }
    return t += this.parser.parse(e.tokens, !!e.loose), `<li>${t}</li>
`;
  }
  checkbox({ checked: e }) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph({ tokens: e }) {
    return `<p>${this.parser.parseInline(e)}</p>
`;
  }
  table(e) {
    let t = "", n = "";
    for (let i = 0; i < e.header.length; i++) n += this.tablecell(e.header[i]);
    t += this.tablerow({ text: n });
    let r = "";
    for (let i = 0; i < e.rows.length; i++) {
      let s = e.rows[i];
      n = "";
      for (let a = 0; a < s.length; a++) n += this.tablecell(s[a]);
      r += this.tablerow({ text: n });
    }
    return r && (r = `<tbody>${r}</tbody>`), `<table>
<thead>
` + t + `</thead>
` + r + `</table>
`;
  }
  tablerow({ text: e }) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e) {
    let t = this.parser.parseInline(e.tokens), n = e.header ? "th" : "td";
    return (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t + `</${n}>
`;
  }
  strong({ tokens: e }) {
    return `<strong>${this.parser.parseInline(e)}</strong>`;
  }
  em({ tokens: e }) {
    return `<em>${this.parser.parseInline(e)}</em>`;
  }
  codespan({ text: e }) {
    return `<code>${w(e, true)}</code>`;
  }
  br(e) {
    return "<br>";
  }
  del({ tokens: e }) {
    return `<del>${this.parser.parseInline(e)}</del>`;
  }
  link({ href: e, title: t, tokens: n }) {
    let r = this.parser.parseInline(n), i = J(e);
    if (i === null) return r;
    e = i;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + w(t) + '"'), s += ">" + r + "</a>", s;
  }
  image({ href: e, title: t, text: n, tokens: r }) {
    r && (n = this.parser.parseInline(r, this.parser.textRenderer));
    let i = J(e);
    if (i === null) return w(n);
    e = i;
    let s = `<img src="${e}" alt="${n}"`;
    return t && (s += ` title="${w(t)}"`), s += ">", s;
  }
  text(e) {
    return "tokens" in e && e.tokens ? this.parser.parseInline(e.tokens) : "escaped" in e && e.escaped ? e.text : w(e.text);
  }
};
var $ = class {
  strong({ text: e }) {
    return e;
  }
  em({ text: e }) {
    return e;
  }
  codespan({ text: e }) {
    return e;
  }
  del({ text: e }) {
    return e;
  }
  html({ text: e }) {
    return e;
  }
  text({ text: e }) {
    return e;
  }
  link({ text: e }) {
    return "" + e;
  }
  image({ text: e }) {
    return "" + e;
  }
  br() {
    return "";
  }
};
var b = class l2 {
  options;
  renderer;
  textRenderer;
  constructor(e) {
    this.options = e || T, this.options.renderer = this.options.renderer || new P(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.renderer.parser = this, this.textRenderer = new $();
  }
  static parse(e, t) {
    return new l2(t).parse(e);
  }
  static parseInline(e, t) {
    return new l2(t).parseInline(e);
  }
  parse(e, t = true) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.options.extensions?.renderers?.[i.type]) {
        let a = i, o = this.options.extensions.renderers[a.type].call({ parser: this }, a);
        if (o !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "def", "paragraph", "text"].includes(a.type)) {
          n += o || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "space": {
          n += this.renderer.space(s);
          continue;
        }
        case "hr": {
          n += this.renderer.hr(s);
          continue;
        }
        case "heading": {
          n += this.renderer.heading(s);
          continue;
        }
        case "code": {
          n += this.renderer.code(s);
          continue;
        }
        case "table": {
          n += this.renderer.table(s);
          continue;
        }
        case "blockquote": {
          n += this.renderer.blockquote(s);
          continue;
        }
        case "list": {
          n += this.renderer.list(s);
          continue;
        }
        case "html": {
          n += this.renderer.html(s);
          continue;
        }
        case "def": {
          n += this.renderer.def(s);
          continue;
        }
        case "paragraph": {
          n += this.renderer.paragraph(s);
          continue;
        }
        case "text": {
          let a = s, o = this.renderer.text(a);
          for (; r + 1 < e.length && e[r + 1].type === "text"; ) a = e[++r], o += `
` + this.renderer.text(a);
          t ? n += this.renderer.paragraph({ type: "paragraph", raw: o, text: o, tokens: [{ type: "text", raw: o, text: o, escaped: true }] }) : n += o;
          continue;
        }
        default: {
          let a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n;
  }
  parseInline(e, t = this.renderer) {
    let n = "";
    for (let r = 0; r < e.length; r++) {
      let i = e[r];
      if (this.options.extensions?.renderers?.[i.type]) {
        let a = this.options.extensions.renderers[i.type].call({ parser: this }, i);
        if (a !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(i.type)) {
          n += a || "";
          continue;
        }
      }
      let s = i;
      switch (s.type) {
        case "escape": {
          n += t.text(s);
          break;
        }
        case "html": {
          n += t.html(s);
          break;
        }
        case "link": {
          n += t.link(s);
          break;
        }
        case "image": {
          n += t.image(s);
          break;
        }
        case "strong": {
          n += t.strong(s);
          break;
        }
        case "em": {
          n += t.em(s);
          break;
        }
        case "codespan": {
          n += t.codespan(s);
          break;
        }
        case "br": {
          n += t.br(s);
          break;
        }
        case "del": {
          n += t.del(s);
          break;
        }
        case "text": {
          n += t.text(s);
          break;
        }
        default: {
          let a = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent) return console.error(a), "";
          throw new Error(a);
        }
      }
    }
    return n;
  }
};
var S = class {
  options;
  block;
  constructor(e) {
    this.options = e || T;
  }
  static passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens", "emStrongMask"]);
  static passThroughHooksRespectAsync = /* @__PURE__ */ new Set(["preprocess", "postprocess", "processAllTokens"]);
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
  processAllTokens(e) {
    return e;
  }
  emStrongMask(e) {
    return e;
  }
  provideLexer() {
    return this.block ? x.lex : x.lexInline;
  }
  provideParser() {
    return this.block ? b.parse : b.parseInline;
  }
};
var B = class {
  defaults = L();
  options = this.setOptions;
  parse = this.parseMarkdown(true);
  parseInline = this.parseMarkdown(false);
  Parser = b;
  Renderer = P;
  TextRenderer = $;
  Lexer = x;
  Tokenizer = y;
  Hooks = S;
  constructor(...e) {
    this.use(...e);
  }
  walkTokens(e, t) {
    let n = [];
    for (let r of e) switch (n = n.concat(t.call(this, r)), r.type) {
      case "table": {
        let i = r;
        for (let s of i.header) n = n.concat(this.walkTokens(s.tokens, t));
        for (let s of i.rows) for (let a of s) n = n.concat(this.walkTokens(a.tokens, t));
        break;
      }
      case "list": {
        let i = r;
        n = n.concat(this.walkTokens(i.items, t));
        break;
      }
      default: {
        let i = r;
        this.defaults.extensions?.childTokens?.[i.type] ? this.defaults.extensions.childTokens[i.type].forEach((s) => {
          let a = i[s].flat(1 / 0);
          n = n.concat(this.walkTokens(a, t));
        }) : i.tokens && (n = n.concat(this.walkTokens(i.tokens, t)));
      }
    }
    return n;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((n) => {
      let r = { ...n };
      if (r.async = this.defaults.async || r.async || false, n.extensions && (n.extensions.forEach((i) => {
        if (!i.name) throw new Error("extension name required");
        if ("renderer" in i) {
          let s = t.renderers[i.name];
          s ? t.renderers[i.name] = function(...a) {
            let o = i.renderer.apply(this, a);
            return o === false && (o = s.apply(this, a)), o;
          } : t.renderers[i.name] = i.renderer;
        }
        if ("tokenizer" in i) {
          if (!i.level || i.level !== "block" && i.level !== "inline") throw new Error("extension level must be 'block' or 'inline'");
          let s = t[i.level];
          s ? s.unshift(i.tokenizer) : t[i.level] = [i.tokenizer], i.start && (i.level === "block" ? t.startBlock ? t.startBlock.push(i.start) : t.startBlock = [i.start] : i.level === "inline" && (t.startInline ? t.startInline.push(i.start) : t.startInline = [i.start]));
        }
        "childTokens" in i && i.childTokens && (t.childTokens[i.name] = i.childTokens);
      }), r.extensions = t), n.renderer) {
        let i = this.defaults.renderer || new P(this.defaults);
        for (let s in n.renderer) {
          if (!(s in i)) throw new Error(`renderer '${s}' does not exist`);
          if (["options", "parser"].includes(s)) continue;
          let a = s, o = n.renderer[a], p = i[a];
          i[a] = (...u) => {
            let c = o.apply(i, u);
            return c === false && (c = p.apply(i, u)), c || "";
          };
        }
        r.renderer = i;
      }
      if (n.tokenizer) {
        let i = this.defaults.tokenizer || new y(this.defaults);
        for (let s in n.tokenizer) {
          if (!(s in i)) throw new Error(`tokenizer '${s}' does not exist`);
          if (["options", "rules", "lexer"].includes(s)) continue;
          let a = s, o = n.tokenizer[a], p = i[a];
          i[a] = (...u) => {
            let c = o.apply(i, u);
            return c === false && (c = p.apply(i, u)), c;
          };
        }
        r.tokenizer = i;
      }
      if (n.hooks) {
        let i = this.defaults.hooks || new S();
        for (let s in n.hooks) {
          if (!(s in i)) throw new Error(`hook '${s}' does not exist`);
          if (["options", "block"].includes(s)) continue;
          let a = s, o = n.hooks[a], p = i[a];
          S.passThroughHooks.has(s) ? i[a] = (u) => {
            if (this.defaults.async && S.passThroughHooksRespectAsync.has(s)) return (async () => {
              let g = await o.call(i, u);
              return p.call(i, g);
            })();
            let c = o.call(i, u);
            return p.call(i, c);
          } : i[a] = (...u) => {
            if (this.defaults.async) return (async () => {
              let g = await o.apply(i, u);
              return g === false && (g = await p.apply(i, u)), g;
            })();
            let c = o.apply(i, u);
            return c === false && (c = p.apply(i, u)), c;
          };
        }
        r.hooks = i;
      }
      if (n.walkTokens) {
        let i = this.defaults.walkTokens, s = n.walkTokens;
        r.walkTokens = function(a) {
          let o = [];
          return o.push(s.call(this, a)), i && (o = o.concat(i.call(this, a))), o;
        };
      }
      this.defaults = { ...this.defaults, ...r };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
  lexer(e, t) {
    return x.lex(e, t ?? this.defaults);
  }
  parser(e, t) {
    return b.parse(e, t ?? this.defaults);
  }
  parseMarkdown(e) {
    return (n, r) => {
      let i = { ...r }, s = { ...this.defaults, ...i }, a = this.onError(!!s.silent, !!s.async);
      if (this.defaults.async === true && i.async === false) return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));
      if (typeof n > "u" || n === null) return a(new Error("marked(): input parameter is undefined or null"));
      if (typeof n != "string") return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(n) + ", string expected"));
      if (s.hooks && (s.hooks.options = s, s.hooks.block = e), s.async) return (async () => {
        let o = s.hooks ? await s.hooks.preprocess(n) : n, u = await (s.hooks ? await s.hooks.provideLexer() : e ? x.lex : x.lexInline)(o, s), c = s.hooks ? await s.hooks.processAllTokens(u) : u;
        s.walkTokens && await Promise.all(this.walkTokens(c, s.walkTokens));
        let h2 = await (s.hooks ? await s.hooks.provideParser() : e ? b.parse : b.parseInline)(c, s);
        return s.hooks ? await s.hooks.postprocess(h2) : h2;
      })().catch(a);
      try {
        s.hooks && (n = s.hooks.preprocess(n));
        let p = (s.hooks ? s.hooks.provideLexer() : e ? x.lex : x.lexInline)(n, s);
        s.hooks && (p = s.hooks.processAllTokens(p)), s.walkTokens && this.walkTokens(p, s.walkTokens);
        let c = (s.hooks ? s.hooks.provideParser() : e ? b.parse : b.parseInline)(p, s);
        return s.hooks && (c = s.hooks.postprocess(c)), c;
      } catch (o) {
        return a(o);
      }
    };
  }
  onError(e, t) {
    return (n) => {
      if (n.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
        let r = "<p>An error occurred:</p><pre>" + w(n.message + "", true) + "</pre>";
        return t ? Promise.resolve(r) : r;
      }
      if (t) return Promise.reject(n);
      throw n;
    };
  }
};
var _ = new B();
function k(l3, e) {
  return _.parse(l3, e);
}
k.options = k.setOptions = function(l3) {
  return _.setOptions(l3), k.defaults = _.defaults, G(k.defaults), k;
};
k.getDefaults = L;
k.defaults = T;
k.use = function(...l3) {
  return _.use(...l3), k.defaults = _.defaults, G(k.defaults), k;
};
k.walkTokens = function(l3, e) {
  return _.walkTokens(l3, e);
};
k.parseInline = _.parseInline;
k.Parser = b;
k.parser = b.parse;
k.Renderer = P;
k.TextRenderer = $;
k.Lexer = x;
k.lexer = x.lex;
k.Tokenizer = y;
k.Hooks = S;
k.parse = k;
var Zt = k.options;
var Gt = k.setOptions;
var Nt = k.use;
var Ft = k.walkTokens;
var jt = k.parseInline;
var Ut = b.parse;
var Kt = x.lex;

// node_modules/.pnpm/dompurify@3.4.17/node_modules/dompurify/dist/purify.es.mjs
function _OverloadYield(e, d2) {
  this.v = e, this.k = d2;
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _iterableToArrayLimit(r, l3) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l3) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l3); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function AsyncGenerator(e) {
  var t, n;
  function resume(t2, n2) {
    try {
      var r = e[t2](n2), o = r.value, u = o instanceof _OverloadYield;
      Promise.resolve(u ? o.v : o).then(function(n3) {
        if (u) {
          var i = "return" === t2 && o.k ? t2 : "next";
          if (!o.k || n3.done) return resume(i, n3);
          n3 = e[i](n3).value;
        }
        settle(!!r.done, n3);
      }, function(e2) {
        resume("throw", e2);
      });
    } catch (e2) {
      settle(2, e2);
    }
  }
  function settle(e2, r) {
    2 === e2 ? t.reject(r) : t.resolve({
      value: r,
      done: e2
    }), (t = t.next) ? resume(t.key, t.arg) : n = null;
  }
  this._invoke = function(e2, r) {
    return new Promise(function(o, u) {
      var i = {
        key: e2,
        arg: r,
        resolve: o,
        reject: u,
        next: null
      };
      n ? n = n.next = i : (t = n = i, resume(e2, r));
    });
  }, "function" != typeof e.return && (this.return = void 0);
}
AsyncGenerator.prototype["function" == typeof Symbol && Symbol.asyncIterator || "@@asyncIterator"] = function() {
  return this;
}, AsyncGenerator.prototype.next = function(e) {
  return this._invoke("next", e);
}, AsyncGenerator.prototype.throw = function(e) {
  return this._invoke("throw", e);
}, AsyncGenerator.prototype.return = function(e) {
  return this._invoke("return", e);
};
var entries = Object.entries;
var setPrototypeOf = Object.setPrototypeOf;
var isFrozen = Object.isFrozen;
var getPrototypeOf = Object.getPrototypeOf;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var freeze = Object.freeze;
var seal = Object.seal;
var create = Object.create;
var _ref = typeof Reflect !== "undefined" && Reflect;
var apply = _ref.apply;
var construct = _ref.construct;
if (!freeze) freeze = function freeze2(x2) {
  return x2;
};
if (!seal) seal = function seal2(x2) {
  return x2;
};
if (!apply) apply = function apply2(func, thisArg) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
  return func.apply(thisArg, args);
};
if (!construct) construct = function construct2(Func) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) args[_key2 - 1] = arguments[_key2];
  return new Func(...args);
};
var arrayForEach = unapply(Array.prototype.forEach);
Array.prototype.indexOf;
var arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
var arrayPop = unapply(Array.prototype.pop);
var arrayPush = unapply(Array.prototype.push);
var arraySlice = unapply(Array.prototype.slice);
var arraySplice = unapply(Array.prototype.splice);
var arrayIsArray = Array.isArray;
var setCreate = unconstruct(Set);
var setAdd = unapply(Set.prototype.add);
var setHas = unapply(Set.prototype.has);
var stringToLowerCase = unapply(String.prototype.toLowerCase);
var stringToString = unapply(String.prototype.toString);
var stringMatch = unapply(String.prototype.match);
var stringReplace = unapply(String.prototype.replace);
var stringIndexOf = unapply(String.prototype.indexOf);
var stringTrim = unapply(String.prototype.trim);
var numberToString = unapply(Number.prototype.toString);
var booleanToString = unapply(Boolean.prototype.toString);
var bigintToString = typeof BigInt === "undefined" ? null : unapply(BigInt.prototype.toString);
var symbolToString = typeof Symbol === "undefined" ? null : unapply(Symbol.prototype.toString);
var objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
var objectToString = unapply(Object.prototype.toString);
var regExpTest = unapply(RegExp.prototype.test);
var typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) thisArg.lastIndex = 0;
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) args[_key3 - 1] = arguments[_key3];
    return apply(func, thisArg, args);
  };
}
function unconstruct(Func) {
  return function() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) args[_key4] = arguments[_key4];
    return construct(Func, args);
  };
}
function addToSet(set, array) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) setPrototypeOf(set, null);
  if (!arrayIsArray(array)) return set;
  let l3 = array.length;
  while (l3--) {
    let element = array[l3];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array)) array[l3] = lcElement;
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function cleanArray(array) {
  for (let index = 0; index < array.length; index++) if (!objectHasOwnProperty(array, index)) array[index] = null;
  return array;
}
function clone(object) {
  const newObject = create(null);
  for (const _ref2 of entries(object)) {
    var _ref3 = _slicedToArray(_ref2, 2);
    const property = _ref3[0];
    const value = _ref3[1];
    if (objectHasOwnProperty(object, property)) {
      if (arrayIsArray(value)) newObject[property] = cleanArray(value);
      else if (value && typeof value === "object" && value.constructor === Object) newObject[property] = clone(value);
      else newObject[property] = value;
    }
  }
  return newObject;
}
function stringifyValue(value) {
  switch (typeof value) {
    case "string":
      return value;
    case "number":
      return numberToString(value);
    case "boolean":
      return booleanToString(value);
    case "bigint":
      return bigintToString ? bigintToString(value) : "0";
    case "symbol":
      return symbolToString ? symbolToString(value) : "Symbol()";
    case "undefined":
      return objectToString(value);
    case "function":
    case "object": {
      if (value === null) return objectToString(value);
      const valueAsRecord = value;
      const valueToString = lookupGetter(valueAsRecord, "toString");
      if (typeof valueToString === "function") {
        const stringified = valueToString(valueAsRecord);
        return typeof stringified === "string" ? stringified : objectToString(stringified);
      }
      return objectToString(value);
    }
    default:
      return objectToString(value);
  }
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) return unapply(desc.get);
      if (typeof desc.value === "function") return unapply(desc.value);
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
function lookupAccessor(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) return desc.get ? unapply(desc.get) : null;
    object = getPrototypeOf(object);
  }
  return null;
}
function isRegex(value) {
  try {
    regExpTest(value, "");
    return true;
  } catch (_unused) {
    return false;
  }
}
var html$1 = freeze([
  "a",
  "abbr",
  "acronym",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "bdi",
  "bdo",
  "big",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "cite",
  "code",
  "col",
  "colgroup",
  "content",
  "data",
  "datalist",
  "dd",
  "decorator",
  "del",
  "details",
  "dfn",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "element",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "font",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meter",
  "nav",
  "nobr",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "search",
  "section",
  "select",
  "shadow",
  "slot",
  "small",
  "source",
  "spacer",
  "span",
  "strike",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "track",
  "tt",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
]);
var svg$1 = freeze([
  "svg",
  "a",
  "altglyph",
  "altglyphdef",
  "altglyphitem",
  "animatecolor",
  "animatemotion",
  "animatetransform",
  "circle",
  "clippath",
  "defs",
  "desc",
  "ellipse",
  "enterkeyhint",
  "exportparts",
  "filter",
  "font",
  "g",
  "glyph",
  "glyphref",
  "hkern",
  "image",
  "inputmode",
  "line",
  "lineargradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "part",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialgradient",
  "rect",
  "stop",
  "style",
  "switch",
  "symbol",
  "text",
  "textpath",
  "title",
  "tref",
  "tspan",
  "view",
  "vkern"
]);
var svgFilters = freeze([
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence"
]);
var svgDisallowed = freeze([
  "animate",
  "color-profile",
  "cursor",
  "discard",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignobject",
  "hatch",
  "hatchpath",
  "mesh",
  "meshgradient",
  "meshpatch",
  "meshrow",
  "missing-glyph",
  "script",
  "set",
  "solidcolor",
  "unknown",
  "use"
]);
var mathMl$1 = freeze([
  "math",
  "menclose",
  "merror",
  "mfenced",
  "mfrac",
  "mglyph",
  "mi",
  "mlabeledtr",
  "mmultiscripts",
  "mn",
  "mo",
  "mover",
  "mpadded",
  "mphantom",
  "mroot",
  "mrow",
  "ms",
  "mspace",
  "msqrt",
  "mstyle",
  "msub",
  "msup",
  "msubsup",
  "mtable",
  "mtd",
  "mtext",
  "mtr",
  "munder",
  "munderover",
  "mprescripts"
]);
var mathMlDisallowed = freeze([
  "maction",
  "maligngroup",
  "malignmark",
  "mlongdiv",
  "mscarries",
  "mscarry",
  "msgroup",
  "mstack",
  "msline",
  "msrow",
  "semantics",
  "annotation",
  "annotation-xml",
  "mprescripts",
  "none"
]);
var text = freeze(["#text"]);
var html = freeze([
  "accept",
  "action",
  "align",
  "alt",
  "autocapitalize",
  "autocomplete",
  "autopictureinpicture",
  "autoplay",
  "background",
  "bgcolor",
  "border",
  "capture",
  "cellpadding",
  "cellspacing",
  "checked",
  "cite",
  "class",
  "clear",
  "color",
  "cols",
  "colspan",
  "command",
  "commandfor",
  "controls",
  "controlslist",
  "coords",
  "crossorigin",
  "datetime",
  "decoding",
  "default",
  "dir",
  "disabled",
  "disablepictureinpicture",
  "disableremoteplayback",
  "download",
  "draggable",
  "enctype",
  "enterkeyhint",
  "exportparts",
  "face",
  "for",
  "headers",
  "height",
  "hidden",
  "high",
  "href",
  "hreflang",
  "id",
  "inert",
  "inputmode",
  "integrity",
  "ismap",
  "kind",
  "label",
  "lang",
  "list",
  "loading",
  "loop",
  "low",
  "max",
  "maxlength",
  "media",
  "method",
  "min",
  "minlength",
  "multiple",
  "muted",
  "name",
  "nonce",
  "noshade",
  "novalidate",
  "nowrap",
  "open",
  "optimum",
  "part",
  "pattern",
  "placeholder",
  "playsinline",
  "popover",
  "popovertarget",
  "popovertargetaction",
  "poster",
  "preload",
  "pubdate",
  "radiogroup",
  "readonly",
  "rel",
  "required",
  "rev",
  "reversed",
  "role",
  "rows",
  "rowspan",
  "spellcheck",
  "scope",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "span",
  "srclang",
  "start",
  "src",
  "srcset",
  "step",
  "style",
  "summary",
  "tabindex",
  "title",
  "translate",
  "type",
  "usemap",
  "valign",
  "value",
  "width",
  "wrap",
  "xmlns"
]);
var svg = freeze([
  "accent-height",
  "accumulate",
  "additive",
  "alignment-baseline",
  "amplitude",
  "ascent",
  "attributename",
  "attributetype",
  "azimuth",
  "basefrequency",
  "baseline-shift",
  "begin",
  "bias",
  "by",
  "class",
  "clip",
  "clippathunits",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cx",
  "cy",
  "d",
  "dx",
  "dy",
  "diffuseconstant",
  "direction",
  "display",
  "divisor",
  "dominant-baseline",
  "dur",
  "edgemode",
  "elevation",
  "end",
  "exponent",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "filterunits",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "fx",
  "fy",
  "g1",
  "g2",
  "glyph-name",
  "glyphref",
  "gradientunits",
  "gradienttransform",
  "height",
  "href",
  "id",
  "image-rendering",
  "in",
  "in2",
  "intercept",
  "k",
  "k1",
  "k2",
  "k3",
  "k4",
  "kerning",
  "keypoints",
  "keysplines",
  "keytimes",
  "lang",
  "lengthadjust",
  "letter-spacing",
  "kernelmatrix",
  "kernelunitlength",
  "lighting-color",
  "local",
  "marker-end",
  "marker-mid",
  "marker-start",
  "markerheight",
  "markerunits",
  "markerwidth",
  "maskcontentunits",
  "maskunits",
  "max",
  "mask",
  "mask-type",
  "media",
  "method",
  "mode",
  "min",
  "name",
  "numoctaves",
  "offset",
  "operator",
  "opacity",
  "order",
  "orient",
  "orientation",
  "origin",
  "overflow",
  "paint-order",
  "path",
  "pathlength",
  "patterncontentunits",
  "patterntransform",
  "patternunits",
  "pointer-events",
  "points",
  "preservealpha",
  "preserveaspectratio",
  "primitiveunits",
  "r",
  "rx",
  "ry",
  "radius",
  "refx",
  "refy",
  "repeatcount",
  "repeatdur",
  "restart",
  "result",
  "rotate",
  "scale",
  "seed",
  "shape-rendering",
  "slope",
  "specularconstant",
  "specularexponent",
  "spreadmethod",
  "startoffset",
  "stddeviation",
  "stitchtiles",
  "stop-color",
  "stop-opacity",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke",
  "stroke-width",
  "style",
  "surfacescale",
  "systemlanguage",
  "tabindex",
  "tablevalues",
  "targetx",
  "targety",
  "transform",
  "transform-origin",
  "text-anchor",
  "text-decoration",
  "text-orientation",
  "text-rendering",
  "textlength",
  "type",
  "u1",
  "u2",
  "unicode",
  "values",
  "vector-effect",
  "viewbox",
  "visibility",
  "version",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "width",
  "word-spacing",
  "wrap",
  "writing-mode",
  "xchannelselector",
  "ychannelselector",
  "x",
  "x1",
  "x2",
  "xmlns",
  "y",
  "y1",
  "y2",
  "z",
  "zoomandpan"
]);
var mathMl = freeze([
  "accent",
  "accentunder",
  "align",
  "bevelled",
  "close",
  "columnalign",
  "columnlines",
  "columnspacing",
  "columnspan",
  "denomalign",
  "depth",
  "dir",
  "display",
  "displaystyle",
  "encoding",
  "fence",
  "frame",
  "height",
  "href",
  "id",
  "largeop",
  "length",
  "linethickness",
  "lquote",
  "lspace",
  "mathbackground",
  "mathcolor",
  "mathsize",
  "mathvariant",
  "maxsize",
  "minsize",
  "movablelimits",
  "notation",
  "numalign",
  "open",
  "rowalign",
  "rowlines",
  "rowspacing",
  "rowspan",
  "rspace",
  "rquote",
  "scriptlevel",
  "scriptminsize",
  "scriptsizemultiplier",
  "selection",
  "separator",
  "separators",
  "stretchy",
  "subscriptshift",
  "supscriptshift",
  "symmetric",
  "voffset",
  "width",
  "xmlns"
]);
var xml = freeze([
  "xlink:href",
  "xml:id",
  "xlink:title",
  "xml:space",
  "xmlns:xlink"
]);
var MUSTACHE_EXPR = seal(/{{[\w\W]*|^[\w\W]*}}/g);
var ERB_EXPR = seal(/<%[\w\W]*|^[\w\W]*%>/g);
var TMPLIT_EXPR = seal(/\${[\w\W]*/g);
var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
var IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i);
var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
var ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g);
var DOCTYPE_NAME = seal(/^html$/i);
var CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var ELEMENT_MARKUP_PROBE = seal(/<[/\w!]/g);
var COMMENT_MARKUP_PROBE = seal(/<[/\w]/g);
var FALLBACK_TAG_CLOSE = seal(/<\/no(script|embed|frames)/i);
var SELF_CLOSING_TAG = seal(/\/>/i);
var NODE_TYPE = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
};
var LITERAL_TEXT_ELEMENTS = freeze(addToSet({}, [
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]));
var getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") return null;
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) suffix = purifyHostElement.getAttribute(ATTR_NAME);
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_2) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
var _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
var _resolveSetOption = function _resolveSetOption2(cfg, key, fallback, options) {
  return objectHasOwnProperty(cfg, key) && arrayIsArray(cfg[key]) ? addToSet(options.base ? clone(options.base) : {}, cfg[key], options.transform) : fallback;
};
var _resolveObjectOption = function _resolveObjectOption2(cfg, key, makeFallback) {
  const value = objectHasOwnProperty(cfg, key) ? cfg[key] : void 0;
  return value && typeof value === "object" ? clone(value) : makeFallback();
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.4.17";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let document2 = window2.document;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  window2.DocumentFragment;
  const HTMLTemplateElement = window2.HTMLTemplateElement, Node = window2.Node, Element = window2.Element, NodeFilter = window2.NodeFilter;
  window2.NamedNodeMap === void 0 && (window2.NamedNodeMap || window2.MozNamedAttrMap);
  window2.HTMLFormElement;
  const DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
  const ElementPrototype = Element.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove = lookupGetter(ElementPrototype, "remove");
  const removeAttributeNode = lookupGetter(ElementPrototype, "removeAttributeNode");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  const getShadowRoot = lookupGetter(ElementPrototype, "shadowRoot");
  const getAttributes = lookupGetter(ElementPrototype, "attributes");
  const getNodeType = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeType") : null;
  const getNodeName = Node && Node.prototype ? lookupGetter(Node.prototype, "nodeName") : null;
  const getOwnerDocument = Node && Node.prototype ? lookupGetter(Node.prototype, "ownerDocument") : null;
  const _readNodeType = function _readNodeType2(node) {
    return getNodeType ? getNodeType(node) : node.nodeType;
  };
  const _readNodeName = function _readNodeName2(node) {
    return getNodeName ? getNodeName(node) : node.nodeName;
  };
  const getNamespaceURI = lookupAccessor(ElementPrototype, "namespaceURI");
  const _readNamespaceURI = function _readNamespaceURI2(element) {
    return getNamespaceURI ? getNamespaceURI(element) : element.namespaceURI;
  };
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) document2 = template.content.ownerDocument;
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  let defaultTrustedTypesPolicy;
  let defaultTrustedTypesPolicyResolved = false;
  let IN_TRUSTED_TYPES_POLICY = 0;
  const _assertNotInTrustedTypesPolicy = function _assertNotInTrustedTypesPolicy2() {
    if (IN_TRUSTED_TYPES_POLICY > 0) throw typeErrorCreate('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.');
  };
  const _createTrustedHTML = function _createTrustedHTML2(html2) {
    _assertNotInTrustedTypesPolicy();
    IN_TRUSTED_TYPES_POLICY++;
    try {
      return trustedTypesPolicy.createHTML(html2);
    } finally {
      IN_TRUSTED_TYPES_POLICY--;
    }
  };
  const _createTrustedScriptURL = function _createTrustedScriptURL2(scriptUrl) {
    _assertNotInTrustedTypesPolicy();
    IN_TRUSTED_TYPES_POLICY++;
    try {
      return trustedTypesPolicy.createScriptURL(scriptUrl);
    } finally {
      IN_TRUSTED_TYPES_POLICY--;
    }
  };
  const _getDefaultTrustedTypesPolicy = function _getDefaultTrustedTypesPolicy2() {
    if (!defaultTrustedTypesPolicyResolved) {
      defaultTrustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      defaultTrustedTypesPolicyResolved = true;
    }
    return defaultTrustedTypesPolicy;
  };
  const _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
  const importNode = originalDocument.importNode;
  let hooks = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE, CUSTOM_ELEMENT$1 = CUSTOM_ELEMENT;
  let IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [
    ...html$1,
    ...svg$1,
    ...svgFilters,
    ...mathMl$1,
    ...text
  ]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [
    ...html,
    ...svg,
    ...mathMl,
    ...xml
  ]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
    tagCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    }
  }));
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let SET_CONFIG_ALLOWED_TAGS = null;
  let SET_CONFIG_ALLOWED_ATTR = null;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let IN_PLACE_VISITED = null;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, [
    "annotation-xml",
    "audio",
    "colgroup",
    "desc",
    "foreignobject",
    "head",
    "iframe",
    "math",
    "mi",
    "mn",
    "mo",
    "ms",
    "mtext",
    "noembed",
    "noframes",
    "noscript",
    "plaintext",
    "script",
    "selectedcontent",
    "style",
    "svg",
    "template",
    "thead",
    "title",
    "video",
    "xmp"
  ]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, [
    "audio",
    "video",
    "img",
    "source",
    "image",
    "track"
  ]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
    "alt",
    "class",
    "for",
    "id",
    "label",
    "name",
    "pattern",
    "placeholder",
    "role",
    "summary",
    "title",
    "value",
    "style",
    "xmlns"
  ]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
    MATHML_NAMESPACE,
    SVG_NAMESPACE,
    HTML_NAMESPACE
  ], stringToString);
  const DEFAULT_MATHML_TEXT_INTEGRATION_POINTS = freeze([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext"
  ]);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS);
  const DEFAULT_HTML_INTEGRATION_POINTS = freeze(["annotation-xml"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
    "title",
    "style",
    "font",
    "a",
    "script"
  ]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) return;
    if (!cfg || typeof cfg !== "object") cfg = {};
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = _resolveSetOption(cfg, "ALLOWED_TAGS", DEFAULT_ALLOWED_TAGS, { transform: transformCaseFunc });
    ALLOWED_ATTR = _resolveSetOption(cfg, "ALLOWED_ATTR", DEFAULT_ALLOWED_ATTR, { transform: transformCaseFunc });
    ALLOWED_NAMESPACES = _resolveSetOption(cfg, "ALLOWED_NAMESPACES", DEFAULT_ALLOWED_NAMESPACES, { transform: stringToString });
    URI_SAFE_ATTRIBUTES = _resolveSetOption(cfg, "ADD_URI_SAFE_ATTR", DEFAULT_URI_SAFE_ATTRIBUTES, {
      transform: transformCaseFunc,
      base: DEFAULT_URI_SAFE_ATTRIBUTES
    });
    DATA_URI_TAGS = _resolveSetOption(cfg, "ADD_DATA_URI_TAGS", DEFAULT_DATA_URI_TAGS, {
      transform: transformCaseFunc,
      base: DEFAULT_DATA_URI_TAGS
    });
    FORBID_CONTENTS = _resolveSetOption(cfg, "FORBID_CONTENTS", DEFAULT_FORBID_CONTENTS, { transform: transformCaseFunc });
    FORBID_TAGS = _resolveSetOption(cfg, "FORBID_TAGS", clone({}), { transform: transformCaseFunc });
    FORBID_ATTR = _resolveSetOption(cfg, "FORBID_ATTR", clone({}), { transform: transformCaseFunc });
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES && typeof cfg.USE_PROFILES === "object" ? clone(cfg.USE_PROFILES) : cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = isRegex(cfg.ALLOWED_URI_REGEXP) ? cfg.ALLOWED_URI_REGEXP : IS_ALLOWED_URI;
    NAMESPACE = typeof cfg.NAMESPACE === "string" ? cfg.NAMESPACE : HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = _resolveObjectOption(cfg, "MATHML_TEXT_INTEGRATION_POINTS", () => addToSet({}, DEFAULT_MATHML_TEXT_INTEGRATION_POINTS));
    HTML_INTEGRATION_POINTS = _resolveObjectOption(cfg, "HTML_INTEGRATION_POINTS", () => addToSet({}, DEFAULT_HTML_INTEGRATION_POINTS));
    const customElementHandling = _resolveObjectOption(cfg, "CUSTOM_ELEMENT_HANDLING", () => create(null));
    CUSTOM_ELEMENT_HANDLING = create(null);
    if (objectHasOwnProperty(customElementHandling, "tagNameCheck") && isRegexOrFunction(customElementHandling.tagNameCheck)) CUSTOM_ELEMENT_HANDLING.tagNameCheck = customElementHandling.tagNameCheck;
    if (objectHasOwnProperty(customElementHandling, "attributeNameCheck") && isRegexOrFunction(customElementHandling.attributeNameCheck)) CUSTOM_ELEMENT_HANDLING.attributeNameCheck = customElementHandling.attributeNameCheck;
    if (objectHasOwnProperty(customElementHandling, "allowCustomizedBuiltInElements") && typeof customElementHandling.allowCustomizedBuiltInElements === "boolean") CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = customElementHandling.allowCustomizedBuiltInElements;
    seal(CUSTOM_ELEMENT_HANDLING);
    if (SAFE_FOR_TEMPLATES) ALLOW_DATA_ATTR = false;
    if (RETURN_DOM_FRAGMENT) RETURN_DOM = true;
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = create(null);
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    EXTRA_ELEMENT_HANDLING.tagCheck = null;
    EXTRA_ELEMENT_HANDLING.attributeCheck = null;
    if (objectHasOwnProperty(cfg, "ADD_TAGS")) {
      if (typeof cfg.ADD_TAGS === "function") EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
      else if (arrayIsArray(cfg.ADD_TAGS)) {
        if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) ALLOWED_TAGS = clone(ALLOWED_TAGS);
        addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_ATTR")) {
      if (typeof cfg.ADD_ATTR === "function") EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
      else if (arrayIsArray(cfg.ADD_ATTR)) {
        if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) ALLOWED_ATTR = clone(ALLOWED_ATTR);
        addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
      }
    }
    if (objectHasOwnProperty(cfg, "ADD_FORBID_CONTENTS") && arrayIsArray(cfg.ADD_FORBID_CONTENTS)) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) FORBID_CONTENTS = clone(FORBID_CONTENTS);
      addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) ALLOWED_TAGS["#text"] = true;
    if (WHOLE_DOCUMENT) addToSet(ALLOWED_TAGS, [
      "html",
      "head",
      "body"
    ]);
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      const previousTrustedTypesPolicy = trustedTypesPolicy;
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      try {
        emptyHTML = _createTrustedHTML("");
      } catch (error) {
        trustedTypesPolicy = previousTrustedTypesPolicy;
        throw error;
      }
    } else if (cfg.TRUSTED_TYPES_POLICY === null) {
      trustedTypesPolicy = void 0;
      emptyHTML = "";
    } else {
      if (trustedTypesPolicy === void 0) trustedTypesPolicy = _getDefaultTrustedTypesPolicy();
      if (trustedTypesPolicy && typeof emptyHTML === "string") emptyHTML = _createTrustedHTML("");
    }
    if (freeze) freeze(cfg);
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [
    ...svg$1,
    ...svgFilters,
    ...svgDisallowed
  ]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkSvgNamespace = function _checkSvgNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "svg";
    if (parent.namespaceURI === MATHML_NAMESPACE) return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
    return Boolean(ALL_SVG_TAGS[tagName]);
  };
  const _checkMathMlNamespace = function _checkMathMlNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === HTML_NAMESPACE) return tagName === "math";
    if (parent.namespaceURI === SVG_NAMESPACE) return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
    return Boolean(ALL_MATHML_TAGS[tagName]);
  };
  const _checkHtmlNamespace = function _checkHtmlNamespace2(tagName, parent, parentTagName) {
    if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) return false;
    if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) return false;
    return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
  };
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    const elementNamespace = _readNamespaceURI(element);
    const tagName = stringToLowerCase(_readNodeName(element));
    const parentNode = getParentNode(element);
    let parent;
    let parentTagName;
    if (parentNode && _readNodeType(parentNode) === NODE_TYPE.element) {
      parent = { namespaceURI: _readNamespaceURI(parentNode) };
      parentTagName = stringToLowerCase(_readNodeName(parentNode));
    } else {
      parent = { namespaceURI: NAMESPACE };
      parentTagName = "template";
    }
    if (!ALLOWED_NAMESPACES[elementNamespace]) return false;
    if (elementNamespace === SVG_NAMESPACE) return _checkSvgNamespace(tagName, parent, parentTagName);
    if (elementNamespace === MATHML_NAMESPACE) return _checkMathMlNamespace(tagName, parent, parentTagName);
    if (elementNamespace === HTML_NAMESPACE) return _checkHtmlNamespace(tagName, parent, parentTagName);
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[elementNamespace]) return true;
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, { element: node });
    try {
      getParentNode(node).removeChild(node);
    } catch (_2) {
      remove(node);
      if (!getParentNode(node)) throw typeErrorCreate("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place");
    }
  };
  const _stripAttributeNode = function _stripAttributeNode2(element, attribute, name) {
    try {
      removeAttributeNode(element, attribute);
    } catch (_2) {
      try {
        element.removeAttribute(name);
      } catch (_3) {
      }
    }
  };
  const _neutralizeRoot = function _neutralizeRoot2(root) {
    _neutralizeSubtree(root);
    const childNodes = getChildNodes(root);
    if (childNodes) arrayForEach(arraySlice(childNodes), (child) => {
      try {
        remove(child);
      } catch (_2) {
      }
    });
    const attributes = _readNodeType(root) === NODE_TYPE.element ? getAttributes(root) : null;
    if (attributes) for (let i = attributes.length - 1; i >= 0; --i) {
      const attribute = attributes[i];
      const name = attribute && attribute.name;
      if (typeof name === "string") _stripAttributeNode(root, attribute, name);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element, attr) {
    if (!attr) try {
      attr = element.getAttributeNode(name);
    } catch (_2) {
      attr = null;
    }
    arrayPush(DOMPurify.removed, {
      attribute: attr || null,
      from: element
    });
    try {
      if (attr) removeAttributeNode(element, attr);
      else element.removeAttribute(name);
    } catch (_2) {
      try {
        element.removeAttribute(name);
      } catch (_3) {
      }
    }
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) try {
        _forceRemove(element);
      } catch (_2) {
      }
      else try {
        element.setAttribute(name, "");
      } catch (_2) {
      }
    }
  };
  const _stripDisallowedAttributes = function _stripDisallowedAttributes2(element) {
    const attributes = getAttributes(element);
    if (!attributes) return;
    for (let i = attributes.length - 1; i >= 0; --i) {
      const attribute = attributes[i];
      const name = attribute && attribute.name;
      if (typeof name !== "string" || ALLOWED_ATTR[transformCaseFunc(name)]) continue;
      _stripAttributeNode(element, attribute, name);
    }
  };
  const _walkTree = function _walkTree2(root, visit) {
    let intoShadow = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      if (visit(node) === false) continue;
      if (intoShadow && _readNodeType(node) === NODE_TYPE.element) {
        const shadowRoot = getShadowRoot(node);
        if (_isDocumentFragment(shadowRoot)) stack.push(shadowRoot);
      }
      const childNodes = getChildNodes(node);
      if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push(childNodes[i]);
    }
  };
  const _neutralizeSubtree = function _neutralizeSubtree2(root) {
    _walkTree(root, (node) => {
      if (_readNodeType(node) === NODE_TYPE.element) _stripDisallowedAttributes(node);
    });
  };
  const _collectLiveNodes = function _collectLiveNodes2(root) {
    const nodes = [];
    _walkTree(root, (node) => {
      nodes.push(node);
    }, true);
    return nodes;
  };
  const _neutralizeEscapedElements = function _neutralizeEscapedElements2(root, before) {
    const reachable = setCreate();
    arrayForEach(_collectLiveNodes(root), (node) => {
      if (_readNodeType(node) === NODE_TYPE.element) setAdd(reachable, node);
    });
    arrayForEach(before, (node) => {
      if (_readNodeType(node) === NODE_TYPE.element && !setHas(reachable, node)) _stripDisallowedAttributes(node);
    });
  };
  const _neutralizeDiscarded = function _neutralizeDiscarded2(root, before) {
    let rootRemoved = false;
    arrayForEach(DOMPurify.removed, (entry) => {
      if (entry.element) {
        rootRemoved = rootRemoved || entry.element === root;
        _neutralizeSubtree(entry.element);
      }
    });
    _neutralizeEscapedElements(root, before);
    return rootRemoved;
  };
  const MAX_UNVISITED_ROUNDS = 8;
  const _sanitizeUnvisitedNodes = function _sanitizeUnvisitedNodes2(root, before) {
    const visited = IN_PLACE_VISITED;
    let original = null;
    const getOriginal = () => {
      if (!original) {
        original = setCreate();
        arrayForEach(before, (beforeNode) => {
          setAdd(original, beforeNode);
        });
      }
      return original;
    };
    for (let round = 0; ; round++) {
      const live = _collectLiveNodes(root);
      const containers = [root];
      let pending = false;
      arrayForEach(live, (node) => {
        if (_readNodeType(node) === NODE_TYPE.documentFragment) arrayPush(containers, node);
        else if (!pending && !setHas(visited, node)) pending = setHas(getOriginal(), node);
      });
      if (!pending) return;
      if (round >= MAX_UNVISITED_ROUNDS) throw typeErrorCreate("the tree kept changing during in-place sanitization; refusing to return it");
      arrayForEach(containers, (container, index) => {
        _sanitizeUnvisitedIn(container, index > 0, root, getOriginal());
      });
    }
  };
  const _sanitizeUnvisitedIn = function _sanitizeUnvisitedIn2(container, inShadow, root, original) {
    const iterator = _createNodeIterator(container);
    let node;
    while (node = iterator.nextNode()) {
      if (!setHas(original, node) || setHas(IN_PLACE_VISITED, node)) continue;
      if (inShadow) _executeHooks(hooks.uponSanitizeShadowNode, node, null);
      _sanitizeElements(node, root);
      _sanitizeAttributes(node, root);
      if (_isDocumentFragment(node.content)) _sanitizeShadowDOM2(node.content);
    }
  };
  const _markVisited = function _markVisited2(node) {
    if (IN_PLACE_VISITED) setAdd(IN_PLACE_VISITED, node);
  };
  const _isPatchLinkageAttribute = function _isPatchLinkageAttribute2(lcName, lcTag) {
    if (!SAFE_FOR_XML) return false;
    if (lcName === "patchsrc") return true;
    return lcName === "for" && lcTag !== "label" && lcTag !== "output";
  };
  const _neutralizePatchLinkage = function _neutralizePatchLinkage2(root) {
    if (!SAFE_FOR_XML) return;
    _walkTree(root, (node) => {
      const nodeType = _readNodeType(node);
      if (nodeType === NODE_TYPE.processingInstruction || nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, node.data)) {
        try {
          remove(node);
        } catch (_2) {
        }
        return false;
      }
      if (nodeType === NODE_TYPE.element) {
        const element = node;
        const lcTag = transformCaseFunc(_readNodeName(node));
        try {
          if (element.hasAttribute && element.hasAttribute("patchsrc")) element.removeAttribute("patchsrc");
          if (element.hasAttribute && element.hasAttribute("for") && _isPatchLinkageAttribute("for", lcTag)) element.removeAttribute("for");
        } catch (_2) {
        }
      }
      return true;
    });
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) dirty = "<remove></remove>" + dirty;
    else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    const dirtyPayload = trustedTypesPolicy ? _createTrustedHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) try {
      doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
    } catch (_2) {
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_2) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    if (NAMESPACE === HTML_NAMESPACE) return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root) {
    const doc = getOwnerDocument ? getOwnerDocument(root) : root.ownerDocument;
    return createNodeIterator.call(doc || root, root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
  };
  const _stripTemplateExpressions = function _stripTemplateExpressions2(value) {
    value = stringReplace(value, MUSTACHE_EXPR$1, " ");
    value = stringReplace(value, ERB_EXPR$1, " ");
    value = stringReplace(value, TMPLIT_EXPR$1, " ");
    return value;
  };
  const _scrubTemplateExpressions2 = function _scrubTemplateExpressions(node) {
    var _node$querySelectorAl;
    _scrubOwnCharacterData(node);
    const templates = (_node$querySelectorAl = node.querySelectorAll) === null || _node$querySelectorAl === void 0 ? void 0 : _node$querySelectorAl.call(node, "template");
    if (templates) arrayForEach(templates, (tmpl) => {
      if (_isDocumentFragment(tmpl.content)) _scrubTemplateExpressions2(tmpl.content);
    });
  };
  const _scrubOwnCharacterData = function _scrubOwnCharacterData2(node) {
    node.normalize();
    const doc = getOwnerDocument ? getOwnerDocument(node) : node.ownerDocument;
    const walker = createNodeIterator.call(doc || node, node, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_CDATA_SECTION | NodeFilter.SHOW_PROCESSING_INSTRUCTION, null);
    let currentNode = walker.nextNode();
    while (currentNode) {
      currentNode.data = _stripTemplateExpressions(currentNode.data);
      currentNode = walker.nextNode();
    }
  };
  const _isClobbered = function _isClobbered2(element) {
    const realTagName = getNodeName ? getNodeName(element) : null;
    if (typeof realTagName !== "string") return false;
    if (transformCaseFunc(realTagName) !== "form") return false;
    return typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || element.attributes !== getAttributes(element) || typeof element.removeAttribute !== "function" || typeof element.removeAttributeNode !== "function" || typeof element.getAttributeNode !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function" || element.nodeType !== getNodeType(element) || element.childNodes !== getChildNodes(element);
  };
  const _isDocumentFragment = function _isDocumentFragment2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) return false;
    try {
      return getNodeType(value) === NODE_TYPE.documentFragment;
    } catch (_2) {
      return false;
    }
  };
  const _isNode = function _isNode2(value) {
    if (!getNodeType || typeof value !== "object" || value === null) return false;
    try {
      return typeof getNodeType(value) === "number";
    } catch (_2) {
      return false;
    }
  };
  function _executeHooks(hooks2, currentNode, data) {
    if (hooks2.length === 0) return;
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _isUnsafeNode = function _isUnsafeNode2(currentNode, tagName) {
    if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent) && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.innerHTML)) return true;
    if (SAFE_FOR_XML && LITERAL_TEXT_ELEMENTS[tagName] && _readNodeType(currentNode) === NODE_TYPE.element && _readNamespaceURI(currentNode) === HTML_NAMESPACE && (_isNode(currentNode.firstElementChild) || typeof currentNode.textContent === "string" && regExpTest(ELEMENT_MARKUP_PROBE, currentNode.textContent))) return true;
    if (currentNode.nodeType === NODE_TYPE.processingInstruction) return true;
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(COMMENT_MARKUP_PROBE, currentNode.data)) return true;
    return false;
  };
  const _matchesNameCheck = function _matchesNameCheck2(check, name) {
    if (check instanceof RegExp) return regExpTest(check, name);
    if (check instanceof Function) {
      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) args[_key - 2] = arguments[_key];
      return Boolean(check(name, ...args));
    }
    return false;
  };
  const _sanitizeDisallowedNode = function _sanitizeDisallowedNode2(currentNode, tagName, root) {
    if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) return false;
    if (KEEP_CONTENT && !FORBID_CONTENTS[tagName] && !FORBID_CONTENTS[stringToLowerCase(tagName)]) {
      const parentNode = getParentNode(currentNode);
      const childNodes = getChildNodes(currentNode);
      if (childNodes && parentNode) {
        const childCount = childNodes.length;
        for (let i = childCount - 1; i >= 0; --i) {
          const hoisted = currentNode === root ? cloneNode(childNodes[i], true) : childNodes[i];
          parentNode.insertBefore(hoisted, getNextSibling(currentNode));
        }
      }
    }
    _forceRemove(currentNode);
    return true;
  };
  const _forkSharedAllowlist = function _forkSharedAllowlist2(hookList, set, defaultSet, setConfigSet) {
    if (hookList.length === 0) return set;
    return set === defaultSet || set === setConfigSet ? clone(set) : set;
  };
  const _handleHookDetachedNode = function _handleHookDetachedNode2(currentNode, root) {
    if (currentNode === root || getParentNode(currentNode) !== null) return false;
    if (IN_PLACE) _neutralizeSubtree(currentNode);
    return true;
  };
  const _sanitizeElements = function _sanitizeElements2(currentNode, root) {
    _markVisited(currentNode);
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (_handleHookDetachedNode(currentNode, root)) return true;
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(_readNodeName(currentNode));
    ALLOWED_TAGS = _forkSharedAllowlist(hooks.uponSanitizeElement, ALLOWED_TAGS, DEFAULT_ALLOWED_TAGS, SET_CONFIG_ALLOWED_TAGS);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (_handleHookDetachedNode(currentNode, root)) return true;
    if (_isUnsafeNode(currentNode, tagName)) {
      _forceRemove(currentNode);
      return true;
    }
    if (FORBID_TAGS[tagName] || !(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && !ALLOWED_TAGS[tagName]) {
      const removed = _sanitizeDisallowedNode(currentNode, tagName, root);
      if (removed === false) {
        _executeHooks(hooks.afterSanitizeElements, currentNode, null);
        if (_handleHookDetachedNode(currentNode, root)) return true;
      }
      return removed;
    }
    if (_readNodeType(currentNode) === NODE_TYPE.element && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(FALLBACK_TAG_CLOSE, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      const content = _stripTemplateExpressions(currentNode.textContent);
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, { element: currentNode.cloneNode() });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return _handleHookDetachedNode(currentNode, root);
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (FORBID_ATTR[lcName]) return false;
    if (_isPatchLinkageAttribute(lcName, lcTag)) return false;
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) return false;
    const nameIsPermitted = ALLOWED_ATTR[lcName] || EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag);
    if (ALLOW_DATA_ATTR && regExpTest(DATA_ATTR$1, lcName)) return true;
    if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName)) return true;
    if (!nameIsPermitted) return _isBasicCustomElement(lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName, lcTag) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && _matchesNameCheck(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value);
    if (URI_SAFE_ATTRIBUTES[lcName]) return true;
    if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) return true;
    if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag]) return true;
    if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, ""))) return true;
    return !value;
  };
  const RESERVED_CUSTOM_ELEMENT_NAMES = addToSet({}, [
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-format",
    "font-face-name",
    "font-face-src",
    "font-face-uri",
    "missing-glyph"
  ]);
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return !RESERVED_CUSTOM_ELEMENT_NAMES[stringToLowerCase(tagName)] && regExpTest(CUSTOM_ELEMENT$1, tagName);
  };
  const _applyTrustedTypesToAttribute = function _applyTrustedTypesToAttribute2(lcTag, lcName, namespaceURI, value) {
    if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function" && !namespaceURI) switch (trustedTypes.getAttributeType(lcTag, lcName)) {
      case "TrustedHTML":
        return _createTrustedHTML(value);
      case "TrustedScriptURL":
        return _createTrustedScriptURL(value);
    }
    return value;
  };
  const _setAttributeValue = function _setAttributeValue2(currentNode, name, namespaceURI, value) {
    try {
      if (namespaceURI) currentNode.setAttributeNS(namespaceURI, name, value);
      else currentNode.setAttribute(name, value);
      if (_isClobbered(currentNode)) {
        _forceRemove(currentNode);
        return false;
      }
      return true;
    } catch (_2) {
      _removeAttribute(name, currentNode);
      return false;
    }
  };
  const _isUnsafeAttributeValue = function _isUnsafeAttributeValue2(name, value) {
    if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i, value)) return true;
    return stringToLowerCase(name) === "attributename" && stringMatch(value, "href") !== null;
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode, root) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    if (_handleHookDetachedNode(currentNode, root)) return;
    const attributes = currentNode.attributes;
    if (!attributes || _isClobbered(currentNode)) return;
    ALLOWED_ATTR = _forkSharedAllowlist(hooks.uponSanitizeAttribute, ALLOWED_ATTR, DEFAULT_ALLOWED_ATTR, SET_CONFIG_ALLOWED_ATTR);
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l3 = attributes.length;
    const lcTag = transformCaseFunc(currentNode.nodeName);
    while (l3--) {
      const attr = attributes[l3];
      const name = attr.name, namespaceURI = attr.namespaceURI, attrValue = attr.value;
      const lcName = transformCaseFunc(name);
      const initValue = attrValue;
      let value = name === "value" ? initValue : stringTrim(initValue);
      let recreatedNamedProp = false;
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name") && stringIndexOf(value, SANITIZE_NAMED_PROPS_PREFIX) !== 0) {
        _removeAttribute(name, currentNode, attr);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
        recreatedNamedProp = true;
      }
      if (_isUnsafeAttributeValue(name, value)) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (hookEvent.forceKeepAttr) continue;
      if (!hookEvent.keepAttr) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value)) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) value = _stripTemplateExpressions(value);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        _removeAttribute(name, currentNode, attr);
        continue;
      }
      value = _applyTrustedTypesToAttribute(lcTag, lcName, namespaceURI, value);
      if (value !== initValue) {
        if (_setAttributeValue(currentNode, name, namespaceURI, value) && recreatedNamedProp) arrayPop(DOMPurify.removed);
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
    _handleHookDetachedNode(currentNode, root);
  };
  const _sanitizeShadowDOM2 = function _sanitizeShadowDOM(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode, fragment);
      _sanitizeAttributes(shadowNode, fragment);
      if (_isDocumentFragment(shadowNode.content)) _sanitizeShadowDOM2(shadowNode.content);
      if (_readNodeType(shadowNode) === NODE_TYPE.element) {
        const innerSr = getShadowRoot(shadowNode);
        if (_isDocumentFragment(innerSr)) {
          _sanitizeAttachedShadowRoots(innerSr);
          _sanitizeShadowDOM2(innerSr);
        }
      }
    }
    if (SAFE_FOR_TEMPLATES) _scrubOwnCharacterData(fragment);
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  const _sanitizeAttachedShadowRoots = function _sanitizeAttachedShadowRoots2(root) {
    const stack = [{
      node: root,
      shadow: null
    }];
    while (stack.length > 0) {
      const item = stack.pop();
      if (item.shadow) {
        _sanitizeShadowDOM2(item.shadow);
        continue;
      }
      const node = item.node;
      const isElement = _readNodeType(node) === NODE_TYPE.element;
      const childNodes = getChildNodes(node);
      if (childNodes) for (let i = childNodes.length - 1; i >= 0; --i) stack.push({
        node: childNodes[i],
        shadow: null
      });
      if (isElement) {
        const rootName = getNodeName ? getNodeName(node) : null;
        if (typeof rootName === "string" && transformCaseFunc(rootName) === "template") {
          const content = node.content;
          if (_isDocumentFragment(content)) stack.push({
            node: content,
            shadow: null
          });
        }
      }
      if (isElement) {
        const sr = getShadowRoot(node);
        if (_isDocumentFragment(sr)) stack.push({
          node: null,
          shadow: sr
        }, {
          node: sr,
          shadow: null
        });
      }
    }
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) dirty = "<!-->";
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      dirty = stringifyValue(dirty);
      if (typeof dirty !== "string") throw typeErrorCreate("dirty is not a string, aborting");
    }
    if (!DOMPurify.isSupported) return dirty;
    if (SET_CONFIG) {
      ALLOWED_TAGS = SET_CONFIG_ALLOWED_TAGS;
      ALLOWED_ATTR = SET_CONFIG_ALLOWED_ATTR;
    } else _parseConfig(cfg);
    if (hooks.uponSanitizeElement.length > 0 || hooks.uponSanitizeAttribute.length > 0) ALLOWED_TAGS = clone(ALLOWED_TAGS);
    if (hooks.uponSanitizeAttribute.length > 0) ALLOWED_ATTR = clone(ALLOWED_ATTR);
    DOMPurify.removed = [];
    const inPlace = IN_PLACE && typeof dirty !== "string" && _isNode(dirty);
    let inPlaceNodes = [];
    const outerVisited = IN_PLACE_VISITED;
    if (inPlace) {
      _neutralizePatchLinkage(dirty);
      const nn = _readNodeName(dirty);
      if (typeof nn === "string") {
        const tagName = transformCaseFunc(nn);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          _neutralizeRoot(dirty);
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
      if (_isClobbered(dirty)) {
        _neutralizeRoot(dirty);
        throw typeErrorCreate("root node is clobbered and cannot be sanitized in-place");
      }
      inPlaceNodes = _collectLiveNodes(dirty);
      IN_PLACE_VISITED = setCreate();
    } else if (_isNode(dirty)) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") body = importedNode;
      else if (importedNode.nodeName === "HTML") body = importedNode;
      else body.appendChild(importedNode);
      _sanitizeAttachedShadowRoots(body);
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(dirty) : dirty;
      body = _initDocument(dirty);
      if (!body) return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
    }
    if (body && FORCE_BODY) _forceRemove(body.firstChild);
    const walkRoot = inPlace ? dirty : body;
    try {
      if (inPlace) _sanitizeAttachedShadowRoots(dirty);
      const nodeIterator = _createNodeIterator(walkRoot);
      while (currentNode = nodeIterator.nextNode()) {
        _sanitizeElements(currentNode, walkRoot);
        _sanitizeAttributes(currentNode, walkRoot);
        if (_isDocumentFragment(currentNode.content)) _sanitizeShadowDOM2(currentNode.content);
      }
      if (inPlace) _sanitizeUnvisitedNodes(dirty, inPlaceNodes);
    } catch (error) {
      if (inPlace) {
        _neutralizeRoot(dirty);
        _neutralizeDiscarded(dirty, inPlaceNodes);
      }
      throw error;
    } finally {
      IN_PLACE_VISITED = outerVisited;
    }
    if (inPlace) {
      if (_neutralizeDiscarded(dirty, inPlaceNodes)) throw typeErrorCreate("a node selected for removal could not be safely returned; refusing to sanitize in place");
      if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(dirty);
      return dirty;
    }
    if (RETURN_DOM) {
      if (SAFE_FOR_TEMPLATES) _scrubTemplateExpressions2(body);
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) returnNode.appendChild(body.firstChild);
      } else returnNode = body;
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) returnNode = importNode.call(originalDocument, returnNode, true);
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    if (SAFE_FOR_TEMPLATES) serializedHTML = _stripTemplateExpressions(serializedHTML);
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? _createTrustedHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
    SET_CONFIG_ALLOWED_TAGS = ALLOWED_TAGS;
    SET_CONFIG_ALLOWED_ATTR = ALLOWED_ATTR;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
    SET_CONFIG_ALLOWED_TAGS = null;
    SET_CONFIG_ALLOWED_ATTR = null;
    trustedTypesPolicy = defaultTrustedTypesPolicy;
    emptyHTML = "";
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) _parseConfig({});
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    if (typeof value === "string" && (_isUnsafeAttributeValue(attr, value) || !ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(SELF_CLOSING_TAG, value))) return false;
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") return;
    if (!objectHasOwnProperty(hooks, entryPoint)) return;
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (!objectHasOwnProperty(hooks, entryPoint)) return;
    if (hookFunction !== void 0) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    if (!objectHasOwnProperty(hooks, entryPoint)) return;
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify_default = createDOMPurify();

// overview.js
var EMPTY_ARRAY = Object.freeze([]);
function assistantText(blocks) {
  return (Array.isArray(blocks) ? blocks : EMPTY_ARRAY).filter((block) => block?.kind === "text" && typeof block.text === "string").map((block) => block.text).join("\n\n").trim();
}
function firstSentence(text2, limit = 160) {
  if (typeof text2 !== "string") return "";
  const line = text2.trim().split(/\r?\n/).find((value) => value.trim())?.trim() ?? "";
  const sentence = line.match(/^.*?[。！？!?](?:[”’"']|$|\s)?|^.*?\.(?:\s|$)/)?.[0]?.trim() || line;
  const characters = Array.from(sentence);
  return characters.length > limit ? `${characters.slice(0, Math.max(0, limit - 1)).join("")}\u2026` : sentence;
}
function selectCompletedReplies(chat, limit = 4) {
  const count = Number.isFinite(limit) ? Math.max(0, Math.floor(limit)) : 4;
  if (count === 0) return [];
  const timeline = chat?.timeline;
  const order = timeline?.turnOrder ?? EMPTY_ARRAY;
  const replies = [];
  for (let index = order.length - 1; index >= 0 && replies.length < count; index -= 1) {
    const turn = timeline.turns.get(order[index]);
    const closing = turn?.data?.get("turn-tail")?.closing;
    if (!closing?.finalNode || closing.status !== "settled" || closing.finalNode.interrupted === true) continue;
    const text2 = assistantText(closing.blocks);
    if (!text2) continue;
    replies.push({
      key: `reply:${order[index]}:${closing.finalNode.seq}`,
      turn: order[index],
      seq: closing.finalNode.seq,
      time: closing.time,
      text: text2
    });
  }
  return replies;
}
function selectLatestStableProgress(chat) {
  const order = chat?.order ?? EMPTY_ARRAY;
  for (let index = order.length - 1; index >= 0; index -= 1) {
    const node = chat.nodes.get(order[index]);
    if (node?.kind !== "assistant-step" || node.visibility !== "visible") continue;
    const data = node.data;
    if (data?.status !== "settled" || !data.finalNode || data.finalNode.interrupted === true) continue;
    const text2 = assistantText(data.blocks);
    if (text2) return { key: node.key ?? order[index], text: text2, turn: data.turn, source: "stable" };
  }
  return null;
}
function selectOverviewChat(chat) {
  const partial = chat?.legacy?.partial;
  const partialText = assistantText(partial?.blocks);
  const calls = chat?.legacy?.runningCalls ?? EMPTY_ARRAY;
  const tools = calls.filter((call) => call?.phase === "start").map((call) => ({ id: call.callId, name: call.name }));
  return {
    hasPartial: partial != null,
    tools,
    progress: partialText ? { key: `partial:${partial.turn}:${partial.step}`, text: partialText, turn: partial.turn, source: "partial" } : selectLatestStableProgress(chat),
    replies: selectCompletedReplies(chat)
  };
}
function equalOverviewChat(left, right) {
  if (left === right) return true;
  if (!left || !right || left.hasPartial !== right.hasPartial || left.tools.length !== right.tools.length) return false;
  if (!left.tools.every((tool, index) => tool.id === right.tools[index].id && tool.name === right.tools[index].name)) return false;
  if (left.progress?.key !== right.progress?.key || left.progress?.text !== right.progress?.text || left.progress?.source !== right.progress?.source || left.progress?.turn !== right.progress?.turn) return false;
  return left.replies.length === right.replies.length && left.replies.every((reply, index) => {
    const other = right.replies[index];
    return reply.key === other.key && reply.text === other.text && reply.time === other.time;
  });
}
function selectOverviewStage({ running, pendingInteraction, toolCount = 0, hasPartial = false }) {
  const kind = pendingInteraction?.kind;
  if (kind === "approval") return "waitingApproval";
  if (kind === "question") return "waitingAnswer";
  if (kind === "plan-review") return "waitingPlan";
  if (pendingInteraction) return "waitingResponse";
  if (!running) return "idle";
  if (toolCount > 0) return "tools";
  if (hasPartial) return "generating";
  return "processing";
}
function selectPendingAttention(pending, locale = "zh") {
  if (!pending) return null;
  let text2 = "";
  if (pending.kind === "approval") {
    text2 = typeof pending.toolName === "string" ? pending.toolName : "";
  } else {
    text2 = firstSentence(pending.questions?.[0]?.question);
  }
  const reason = pending.kind === "approval" ? firstSentence(pending.displayReason?.[locale] ?? pending.displayReason?.[String(locale).split("-")[0]] ?? pending.displayReason?.en ?? pending.reason) : "";
  return { key: pending.key, kind: pending.kind, text: text2, reason };
}
var overviewMessages = {
  zh: {
    "overview.stage": "\u5F53\u524D\u9636\u6BB5",
    "overview.stage.waitingApproval": "\u7B49\u5F85\u786E\u8BA4",
    "overview.stage.waitingAnswer": "\u7B49\u5F85\u56DE\u7B54",
    "overview.stage.waitingPlan": "\u7B49\u5F85\u786E\u8BA4\u8BA1\u5212",
    "overview.stage.waitingResponse": "\u7B49\u5F85\u56DE\u5E94",
    "overview.stage.tools": "\u6B63\u5728\u6267\u884C {count} \u9879\u5DE5\u5177",
    "overview.stage.generating": "\u6B63\u5728\u751F\u6210\u56DE\u590D",
    "overview.stage.processing": "\u5904\u7406\u4E2D",
    "overview.stage.idle": "\u7A7A\u95F2",
    "overview.attention": "\u9700\u8981\u4F60\u5904\u7406",
    "overview.attention.approval": "\u786E\u8BA4\u5DE5\u5177\u6267\u884C",
    "overview.attention.question": "\u56DE\u7B54\u95EE\u9898",
    "overview.attention.plan-review": "\u786E\u8BA4\u4E0B\u4E00\u6B65\u8BA1\u5212",
    "overview.attention.generic": "\u6709\u4E00\u9879\u8BF7\u6C42\u7B49\u5F85\u56DE\u5E94",
    "overview.respondBelow": "\u8BF7\u5728\u5E95\u90E8\u4EA4\u4E92\u533A\u56DE\u5E94\uFF0C\u5904\u7406\u540E\u4F1A\u7EE7\u7EED\u6267\u884C\u3002",
    "overview.progress": "\u6700\u65B0\u8FDB\u5C55",
    "overview.progress.streaming": "\u5F53\u524D\u56DE\u590D\u7247\u6BB5",
    "overview.progress.stable": "\u6700\u8FD1\u8BB0\u5F55",
    "overview.progress.empty": "\u65B0\u7684\u8FDB\u5C55\u4F1A\u663E\u793A\u5728\u8FD9\u91CC\u3002",
    "overview.progress.reasoning": "\u6B63\u5728\u751F\u6210\uFF0C\u6B63\u6587\u51FA\u73B0\u540E\u4F1A\u663E\u793A\u5728\u8FD9\u91CC\u3002",
    "overview.progress.tools": "\u5DE5\u5177\u6267\u884C\u4E2D\uFF0C\u5B8C\u6210\u540E\u7684\u8FDB\u5C55\u4F1A\u663E\u793A\u5728\u8FD9\u91CC\u3002",
    "overview.expand": "\u5C55\u5F00\u8FDB\u5C55",
    "overview.collapse": "\u6536\u8D77\u8FDB\u5C55",
    "overview.latestReply": "\u6700\u65B0\u5DF2\u5B8C\u6210\u56DE\u590D",
    "overview.earlierReplies": "\u6B64\u524D\u7ED3\u679C",
    "overview.replyNumber": "\u7B2C {turn} \u8F6E\u56DE\u590D",
    "overview.noReply": "\u8FD8\u6CA1\u6709\u5DF2\u5B8C\u6210\u7684\u56DE\u590D\u3002",
    "overview.noReplyHint": "\u53EF\u4EE5\u5728\u5E95\u90E8\u8F93\u5165\u6D88\u606F\uFF0C\u5B8C\u6210\u540E\u7684\u56DE\u590D\u4F1A\u7559\u5728\u8FD9\u91CC\u4F9B\u4F60\u9605\u8BFB\u3002",
    "overview.fullHistory": "\u67E5\u770B\u5B8C\u6574\u8BB0\u5F55",
    "overview.fullHistoryHint": "\u5DE5\u5177\u8BE6\u60C5\u3001\u56FE\u7247\u4E0E\u66F4\u65E9\u7684\u5185\u5BB9\u53EF\u5728\u5B8C\u6574\u8BB0\u5F55\u4E2D\u67E5\u770B\u3002",
    "overview.stableHint": "\u4EC5\u5C55\u793A\u5BF9\u8BDD\u4E2D\u7684\u6B63\u6587\uFF0C\u4E0D\u5305\u542B\u63A8\u7406\u6216\u5DE5\u5177\u53C2\u6570\u3002"
  },
  en: {
    "overview.stage": "Current stage",
    "overview.stage.waitingApproval": "Waiting for approval",
    "overview.stage.waitingAnswer": "Waiting for an answer",
    "overview.stage.waitingPlan": "Waiting for plan review",
    "overview.stage.waitingResponse": "Waiting for your response",
    "overview.stage.tools": "Running {count} tools",
    "overview.stage.generating": "Writing a reply",
    "overview.stage.processing": "Processing",
    "overview.stage.idle": "Idle",
    "overview.attention": "Needs your attention",
    "overview.attention.approval": "Approve tool execution",
    "overview.attention.question": "Answer a question",
    "overview.attention.plan-review": "Review the next steps",
    "overview.attention.generic": "A request needs your response",
    "overview.respondBelow": "Respond in the interaction area below to continue.",
    "overview.progress": "Latest progress",
    "overview.progress.streaming": "Current reply",
    "overview.progress.stable": "Recent update",
    "overview.progress.empty": "New progress will appear here.",
    "overview.progress.reasoning": "Generating. Reply text will appear here when ready.",
    "overview.progress.tools": "Tools are running. New progress will appear when available.",
    "overview.expand": "Show more progress",
    "overview.collapse": "Show less progress",
    "overview.latestReply": "Latest completed reply",
    "overview.earlierReplies": "Earlier results",
    "overview.replyNumber": "Turn {turn} reply",
    "overview.noReply": "No completed replies yet.",
    "overview.noReplyHint": "Send a message below. Completed replies will remain here to read.",
    "overview.fullHistory": "View full conversation",
    "overview.fullHistoryHint": "Find tool details, images and older content in the full conversation.",
    "overview.stableHint": "Shows conversation text without reasoning or tool arguments."
  }
};
function translate(t, locale, key, values) {
  const language = String(locale ?? "zh").toLowerCase().startsWith("zh") ? "zh" : "en";
  const fallback = overviewMessages[language][key] ?? key;
  const translated = typeof t === "function" ? t(key, values) : void 0;
  const text2 = typeof translated === "string" && translated !== key ? translated : fallback;
  return text2.replace(/\{(\w+)\}/g, (match, name) => values?.[name] == null ? match : String(values[name]));
}
var overviewStyles = `
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
`;
function createMobileOverview(React2, { renderMarkdown } = {}) {
  const h2 = React2.createElement;
  function ReadableText({ text: text2 }) {
    const content = React2.useMemo(() => typeof renderMarkdown === "function" ? renderMarkdown(text2) : null, [text2]);
    return content != null ? h2("div", { className: "dmo-readable" }, content) : h2(
      "div",
      { className: "dmo-readable dmo-plaintext" },
      text2.split(/\r?\n\s*\r?\n/).filter(Boolean).map((paragraph, index) => h2("p", { key: index }, paragraph))
    );
  }
  function Progress({ progress, stage, tr }) {
    const [expanded, setExpanded] = React2.useState(false);
    const text2 = progress?.text;
    const expandable = text2 && (text2.length > 72 || text2.includes("\n"));
    const emptyKey = stage === "tools" ? "overview.progress.tools" : stage === "generating" ? "overview.progress.reasoning" : "overview.progress.empty";
    return h2(
      "section",
      { className: "dmo-progress" },
      h2("h2", { className: "dmo-heading" }, tr("overview.progress")),
      text2 ? h2(
        React2.Fragment,
        null,
        h2("p", { className: "dmo-progress-label" }, tr(progress.source === "partial" ? "overview.progress.streaming" : "overview.progress.stable")),
        h2("p", { className: "dmo-progress-text", "data-collapsed": expandable && !expanded ? "true" : "false" }, text2),
        expandable ? h2("button", {
          type: "button",
          className: "dmo-button dmo-button-link",
          "aria-expanded": expanded,
          onClick: () => setExpanded((value) => !value)
        }, tr(expanded ? "overview.collapse" : "overview.expand")) : null
      ) : h2("p", { className: "dmo-hint" }, tr(emptyKey))
    );
  }
  function OverviewSession(props) {
    const { useChat, useSession, useSessionStatus, sessionId, openView, t, locale } = props;
    const running = useSession((state) => state.running);
    const pending = useSessionStatus((state) => state.get(sessionId)?.pendingInteraction);
    const chat = useChat(selectOverviewChat, equalOverviewChat);
    const tr = (key, values) => translate(t, locale, key, values);
    const attention = selectPendingAttention(pending, locale);
    const stage = selectOverviewStage({ running, pendingInteraction: pending, toolCount: chat.tools.length, hasPartial: chat.hasPartial });
    const latest = chat.replies[0];
    const previous = chat.replies.slice(1);
    const showProgress = running || attention || chat.progress && chat.progress.text !== latest?.text;
    const attentionKey = `overview.attention.${attention?.kind}`;
    const attentionTitle = attention && (attention.text || tr(overviewMessages.en[attentionKey] ? attentionKey : "overview.attention.generic"));
    const openChat = () => openView("chat", "");
    return h2(
      "div",
      { className: "dsh-mobile-overview", lang: locale || void 0 },
      h2("style", null, overviewStyles),
      h2(
        "section",
        { className: "dmo-stage", "data-busy": running ? "true" : "false", "data-attention": attention ? "true" : "false" },
        h2("p", { className: "dmo-eyebrow" }, tr("overview.stage")),
        h2(
          "div",
          { className: "dmo-stage-line", role: "status", "aria-live": "polite", "aria-atomic": "true" },
          h2("span", { className: "dmo-dot", "aria-hidden": "true" }),
          h2("span", null, tr(`overview.stage.${stage}`, { count: chat.tools.length }))
        ),
        running && !attention && chat.tools.length ? h2(
          "ul",
          { className: "dmo-tools" },
          chat.tools.map((tool) => h2("li", { key: tool.id, className: "dmo-tool" }, tool.name))
        ) : null
      ),
      attention ? h2(
        "section",
        { className: "dmo-attention", key: attention.key },
        h2("h2", { className: "dmo-heading" }, tr("overview.attention")),
        h2("p", { className: "dmo-attention-title" }, attentionTitle),
        attention.reason ? h2("p", { className: "dmo-attention-reason" }, attention.reason) : null,
        h2("p", { className: "dmo-hint" }, tr("overview.respondBelow"))
      ) : null,
      showProgress ? h2(Progress, { key: chat.progress?.key ?? stage, progress: chat.progress, stage, tr }) : null,
      latest ? h2(
        "section",
        { className: "dmo-reply", key: latest.key },
        h2("h2", { className: "dmo-heading" }, tr("overview.latestReply")),
        h2(ReadableText, { text: latest.text })
      ) : h2(
        "section",
        { className: "dmo-empty" },
        h2("p", null, tr("overview.noReply")),
        h2("p", { className: "dmo-hint" }, tr("overview.noReplyHint"))
      ),
      previous.length ? h2(
        "section",
        null,
        h2("h2", { className: "dmo-heading" }, tr("overview.earlierReplies")),
        previous.map((reply) => h2(
          "details",
          { key: reply.key, className: "dmo-previous" },
          h2(
            "summary",
            null,
            tr("overview.replyNumber", { turn: reply.turn }),
            h2("span", { className: "dmo-previous-preview" }, firstSentence(reply.text, 96))
          ),
          h2("div", { className: "dmo-previous-body" }, h2(ReadableText, { text: reply.text }))
        ))
      ) : null,
      h2(
        "footer",
        { className: "dmo-footer" },
        h2(
          "button",
          { type: "button", className: "dmo-button", onClick: openChat },
          tr("overview.fullHistory"),
          h2("span", { "aria-hidden": "true" }, "\u2192")
        ),
        h2("p", { className: "dmo-hint" }, tr("overview.fullHistoryHint"))
      )
    );
  }
  function MobileOverview(props) {
    return h2(OverviewSession, { ...props, key: props.sessionId });
  }
  MobileOverview.displayName = "MobileOverview";
  return MobileOverview;
}

// locale/en.json
var en_default = {
  meta: { title: "Mobile workspace", description: "A task-first phone interface for DSH sessions, progress, and pending decisions." },
  ui: {
    workbench: "Mobile workspace",
    tasks: "Tasks",
    session: "Session",
    device: "Device",
    newTask: "New task",
    tasksHint: "Catch up on progress and handle what needs you.",
    all: "All tasks",
    loadMore: "More history",
    waiting: "Needs you",
    running: "Running",
    ready: "Ready",
    searchTasks: "Search tasks or workspaces",
    showAll: "Show all",
    loading: "Loading\u2026",
    noTasks: "No tasks here yet.",
    openTask: "View progress",
    untitled: "Untitled task",
    approvalNeeded: "An action needs your confirmation",
    message: "Message",
    messagePlaceholder: "Describe a task or add an instruction\u2026",
    addMessage: "Add an instruction or send the next message\u2026",
    moreTools: "More tools",
    stop: "Stop",
    stopping: "Stopping\u2026",
    send: "Send",
    requestFailed: "The operation failed. Check the connection and retry.",
    backToTasks: "Back to tasks",
    compactInput: "Compact input",
    sessionViews: "Session views",
    overview: "Overview",
    record: "Full record",
    openFailed: "Could not open this task. Return to the list and retry.",
    createFailed: "Could not create the task. Please retry.",
    chooseTask: "Choose a task from the list first.",
    opening: "Opening session\u2026",
    mobileNavigation: "Mobile workspace navigation",
    chooseWorkspace: "Choose a workspace for the new task",
    cancel: "Cancel",
    noWorkspaces: "Add a workspace on the computer first.",
    deviceName: "My device name",
    localDeviceNotice: "This local preview needs no device pairing. A paired phone can rename itself here.",
    save: "Save name",
    saving: "Saving\u2026",
    saved: "Device name saved.",
    appearance: "Interface mode",
    firstVersion: "A first version of the task-first mobile interface. Overview uses real session content; full records and existing actions remain available.",
    desktopMode: "Switch to desktop interface",
    openMobile: "Open mobile workspace",
    automatic: "Switch automatically by screen size"
  }
};

// locale/zh.json
var zh_default = {
  meta: { title: "\u624B\u673A\u5DE5\u4F5C\u53F0", description: "\u4EE5\u4EFB\u52A1\u3001\u6982\u89C8\u548C\u5F85\u5904\u7406\u4E8B\u9879\u7EC4\u7EC7\u624B\u673A\u4E0A\u7684 DSH \u4F1A\u8BDD\u3002" },
  ui: {
    workbench: "\u624B\u673A\u5DE5\u4F5C\u53F0",
    tasks: "\u4EFB\u52A1",
    session: "\u4F1A\u8BDD",
    device: "\u8BBE\u5907",
    newTask: "\u65B0\u4EFB\u52A1",
    tasksHint: "\u5148\u770B\u8FDB\u5C55\uFF0C\u518D\u5904\u7406\u9700\u8981\u4F60\u7684\u4E8B\u3002",
    all: "\u5168\u90E8\u4EFB\u52A1",
    loadMore: "\u66F4\u591A\u5386\u53F2\u4EFB\u52A1",
    waiting: "\u5F85\u4F60\u5904\u7406",
    running: "\u8FDB\u884C\u4E2D",
    ready: "\u5DF2\u5C31\u7EEA",
    searchTasks: "\u641C\u7D22\u4EFB\u52A1\u6216\u5DE5\u4F5C\u533A",
    showAll: "\u67E5\u770B\u5168\u90E8",
    loading: "\u6B63\u5728\u52A0\u8F7D\u2026",
    noTasks: "\u8FD9\u91CC\u8FD8\u6CA1\u6709\u4EFB\u52A1\u3002",
    openTask: "\u67E5\u770B\u8FDB\u5C55",
    untitled: "\u672A\u547D\u540D\u4EFB\u52A1",
    approvalNeeded: "\u9700\u8981\u4F60\u786E\u8BA4\u4E00\u9879\u64CD\u4F5C",
    message: "\u6D88\u606F",
    messagePlaceholder: "\u4EA4\u4EE3\u4EFB\u52A1\uFF0C\u6216\u8865\u5145\u4E00\u53E5\u8981\u6C42\u2026",
    addMessage: "\u8865\u5145\u8981\u6C42\u6216\u53D1\u9001\u4E0B\u4E00\u6761\u6D88\u606F\u2026",
    moreTools: "\u66F4\u591A\u5DE5\u5177",
    stop: "\u505C\u6B62",
    stopping: "\u505C\u6B62\u4E2D\u2026",
    send: "\u53D1\u9001",
    requestFailed: "\u64CD\u4F5C\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8FDE\u63A5\u540E\u91CD\u8BD5\u3002",
    backToTasks: "\u8FD4\u56DE\u4EFB\u52A1\u5217\u8868",
    compactInput: "\u7B80\u6D01\u8F93\u5165",
    sessionViews: "\u4F1A\u8BDD\u89C6\u56FE",
    overview: "\u6982\u89C8",
    record: "\u5B8C\u6574\u8BB0\u5F55",
    openFailed: "\u65E0\u6CD5\u6253\u5F00\u8FD9\u9879\u4EFB\u52A1\uFF0C\u8BF7\u56DE\u5230\u5217\u8868\u91CD\u8BD5\u3002",
    createFailed: "\u521B\u5EFA\u4EFB\u52A1\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002",
    chooseTask: "\u5148\u4ECE\u4EFB\u52A1\u5217\u8868\u9009\u62E9\u4E00\u9879\u3002",
    opening: "\u6B63\u5728\u6253\u5F00\u4F1A\u8BDD\u2026",
    mobileNavigation: "\u624B\u673A\u5DE5\u4F5C\u53F0\u5BFC\u822A",
    chooseWorkspace: "\u9009\u62E9\u65B0\u4EFB\u52A1\u7684\u5DE5\u4F5C\u533A",
    cancel: "\u53D6\u6D88",
    noWorkspaces: "\u8BF7\u5148\u5728\u7535\u8111\u7AEF\u6DFB\u52A0\u5DE5\u4F5C\u533A\u3002",
    deviceName: "\u6211\u7684\u8BBE\u5907\u540D\u79F0",
    localDeviceNotice: "\u672C\u673A\u9884\u89C8\u4E0D\u9700\u8981\u8BBE\u5907\u914D\u5BF9\u3002\u624B\u673A\u914D\u5BF9\u540E\u53EF\u4EE5\u5728\u8FD9\u91CC\u4FEE\u6539\u81EA\u5DF1\u7684\u540D\u79F0\u3002",
    save: "\u4FDD\u5B58\u540D\u79F0",
    saving: "\u6B63\u5728\u4FDD\u5B58\u2026",
    saved: "\u8BBE\u5907\u540D\u79F0\u5DF2\u4FDD\u5B58\u3002",
    appearance: "\u754C\u9762\u6A21\u5F0F",
    firstVersion: "\u4EFB\u52A1\u4F18\u5148\u7684\u79FB\u52A8\u754C\u9762\u7B2C\u4E00\u7248\u3002\u6982\u89C8\u4F7F\u7528\u771F\u5B9E\u4F1A\u8BDD\u5185\u5BB9\uFF0C\u5B8C\u6574\u8BB0\u5F55\u4E0E\u539F\u6709\u64CD\u4F5C\u4ECD\u53EF\u8BBF\u95EE\u3002",
    desktopMode: "\u5207\u56DE\u684C\u9762\u754C\u9762",
    openMobile: "\u6253\u5F00\u624B\u673A\u5DE5\u4F5C\u53F0",
    automatic: "\u6309\u5C4F\u5E55\u81EA\u52A8\u5207\u6362"
  }
};

// styles.js
var styles = `
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

// app.js
var inject = ["slots", "locale", "sessions", "uiWorkspace"];
var NS = "dsh-mobile";
var h = import_react.default.createElement;
var MODE_KEY = "dsh.mobile.mode";
var SESSION_KEY = "dsh.mobile.session";
var PASS = (value) => value;
function readPreference(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch (error) {
    return fallback;
  }
}
function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
  }
}
var markup = (text2) => h("div", { className: "dsh-mobile-markdown", dangerouslySetInnerHTML: { __html: purify_default.sanitize(k.parse(text2, { async: false }), { FORBID_TAGS: ["style", "script", "iframe", "form", "input", "button", "img"] }) } });
var Overview = createMobileOverview(import_react.default, { renderMarkdown: markup });
function createPresentation() {
  let preference = readPreference(MODE_KEY, "auto");
  let advanced = false;
  let revision = 0;
  const listeners = /* @__PURE__ */ new Set();
  const media = matchMedia("(max-width: 900px)");
  const emit = () => {
    revision++;
    for (const listener of listeners) listener();
  };
  return {
    media,
    enabled: () => preference === "mobile" || preference === "auto" && media.matches,
    getPreference: () => preference,
    getAdvanced: () => advanced,
    getSnapshot: () => revision,
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    setPreference(value) {
      preference = value;
      savePreference(MODE_KEY, value);
      emit();
    },
    setAdvanced(value) {
      if (advanced !== value) {
        advanced = value;
        emit();
      }
    },
    changed: emit
  };
}
function apply3(ctx) {
  const ui = createPresentation();
  ctx.effect(() => ctx.locale.register(NS, { en: { ...en_default.ui, ...overviewMessages.en }, zh: { ...zh_default.ui, ...overviewMessages.zh } }));
  const t = ctx.locale.bind(NS);
  const usePresentation = () => {
    import_react.default.useSyncExternalStore(ui.subscribe, ui.getSnapshot);
    return ui;
  };
  let compactDisposer;
  const syncComposer = () => {
    const needed = ui.enabled() && !ui.getAdvanced();
    if (needed && !compactDisposer) {
      const composer = ctx.slots.inject("conversation.composer.bar", () => ctx.slots.register({ name: "conversation.composer.bar", priority: -100, locale: NS }, CompactComposer));
      const docks = ctx.slots.inject("conversation.input.dock", () => ["todo", "goal"].map((id) => ctx.slots.register({ name: "conversation.input.dock", id, priority: -100 }, () => null)));
      compactDisposer = () => {
        docks();
        composer();
      };
    } else if (!needed && compactDisposer) {
      compactDisposer();
      compactDisposer = void 0;
    }
  };
  ctx.effect(() => {
    ui.media.addEventListener("change", ui.changed);
    const unsubscribe = ui.subscribe(syncComposer);
    syncComposer();
    return () => {
      unsubscribe();
      ui.media.removeEventListener("change", ui.changed);
      compactDisposer?.();
    };
  });
  function CompactComposer(props) {
    const { inputActions, useInput, useSession, sessionId, disabled, blocked, onRequestWorkspace } = props;
    const input = useInput(PASS);
    const running = useSession((value) => value?.running ?? false);
    const error = useSession((value) => value?.promptError?.error?.message || null);
    const [stopError, setStopError] = import_react.default.useState(null);
    const [stopping, setStopping] = import_react.default.useState(false);
    const complex = Boolean(input?.attachmentIds.length || input?.occurrences.length || input?.claim);
    import_react.default.useEffect(() => {
      if (complex) ui.setAdvanced(true);
    }, [complex]);
    const locked = disabled || Boolean(blocked) || !inputActions || !input || input.phase !== "plain" || complex;
    async function stop() {
      if (!sessionId || stopping) return;
      setStopping(true);
      setStopError(null);
      try {
        const result = await ctx.sessions.binding(sessionId)?.session.cancel();
        if (result?.ok === false) setStopError(result.error.message);
      } catch (error2) {
        setStopError(t("requestFailed"));
      } finally {
        setStopping(false);
      }
    }
    return h(
      "div",
      { className: "dsh-mobile-composer", "data-mobile-composer": "" },
      h("style", null, styles),
      props.accessory,
      blocked ? h("p", { className: "dsh-mobile-muted", role: "status" }, blocked.reason) : null,
      h("textarea", {
        "aria-label": t("message"),
        placeholder: props.placeholder || (running ? t("addMessage") : t("messagePlaceholder")),
        rows: 2,
        value: input?.draft || "",
        disabled: locked,
        onChange: (event) => {
          inputActions.setDraft(event.target.value);
          inputActions.persistDraft();
        },
        onClick: () => {
          if (disabled) onRequestWorkspace?.();
        },
        onKeyDown: (event) => {
          if ((event.ctrlKey || event.metaKey) && event.key === "Enter" && !event.nativeEvent.isComposing && !locked) {
            event.preventDefault();
            inputActions.submit();
          }
        }
      }),
      h(
        "div",
        { className: "dsh-mobile-composer-actions" },
        h("button", { type: "button", className: "dsh-mobile-quiet", onClick: () => ui.setAdvanced(true), "aria-label": t("moreTools") }, t("moreTools")),
        h("div", { className: "dsh-mobile-grow" }),
        running ? h("button", { type: "button", className: "dsh-mobile-button", onClick: stop, disabled: stopping }, t(stopping ? "stopping" : "stop")) : null,
        h("button", { type: "button", className: "dsh-mobile-button dsh-mobile-primary", disabled: locked || !input.draft.trim(), onClick: () => inputActions.submit() }, t("send"))
      ),
      error || stopError ? h("p", { className: "dsh-mobile-error", role: "alert" }, error || stopError) : null
    );
  }
  function MobileSession(props) {
    const presentation = usePresentation();
    const running = props.useSession((value) => value.running);
    const sessionError = props.useSession((value) => value.openError?.message || null);
    const OverviewBody = import_react.default.useMemo(() => function OverviewBody2(inner) {
      return h(Overview, { ...inner, t, openView: () => props.onMode("record"), inspectCall: void 0, viewRequest: null, completeViewRequest() {
      } });
    }, [props.onMode]);
    return h(
      "div",
      { className: "dsh-mobile-session" },
      h(
        "div",
        { className: "dsh-mobile-session-title" },
        h("button", { type: "button", className: "dsh-mobile-quiet dsh-mobile-back", onClick: props.onBack, "aria-label": t("backToTasks") }, "\u2039"),
        h("div", { className: "dsh-mobile-title-copy" }, h("h1", null, props.title), h("span", { className: "dsh-mobile-muted" }, t(running ? "running" : "ready"))),
        presentation.getAdvanced() ? h("button", { type: "button", className: "dsh-mobile-quiet", onClick: () => ui.setAdvanced(false) }, t("compactInput")) : null
      ),
      h(
        "div",
        { className: "dsh-mobile-tabs", role: "tablist", "aria-label": t("sessionViews") },
        ["overview", "record"].map((mode) => h("button", { type: "button", key: mode, role: "tab", "aria-selected": props.mode === mode, onClick: () => props.onMode(mode) }, t(mode)))
      ),
      sessionError ? h("p", { className: "dsh-mobile-error", role: "alert" }, sessionError) : null,
      h("div", { className: "dsh-mobile-session-content" }, props.renderFactorySlot("conversation.content", { variant: "embedded", phase: "active", hero: false }, {
        slots: { ...props.mode === "overview" ? { views: OverviewBody } : {}, widthControls: () => null }
      }))
    );
  }
  function DevicePanel() {
    const [device, setDevice] = import_react.default.useState(null);
    const [label, setLabel] = import_react.default.useState("");
    const [loading, setLoading] = import_react.default.useState(true);
    const [saving, setSaving] = import_react.default.useState(false);
    const [notice, setNotice] = import_react.default.useState(null);
    const [remote, setRemote] = import_react.default.useState(true);
    import_react.default.useEffect(() => {
      const controller = new AbortController();
      fetch("__dsh_remote_device", { credentials: "same-origin", cache: "no-store", signal: controller.signal }).then(async (response) => {
        if (!response.ok || !response.headers.get("content-type")?.includes("application/json")) {
          setRemote(false);
          return;
        }
        const value = await response.json();
        setDevice(value);
        setLabel(value.label);
      }).catch((error) => {
        if (error.name !== "AbortError") setNotice(t("requestFailed"));
      }).finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
      return () => controller.abort();
    }, []);
    async function save(event) {
      event.preventDefault();
      if (saving || !label.trim()) return;
      setSaving(true);
      setNotice(null);
      try {
        const response = await fetch("__dsh_remote_device", { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ label: label.trim() }) });
        if (!response.ok) throw new Error("rename failed");
        const value = await response.json();
        setDevice(value);
        setLabel(value.label);
        setNotice(t("saved"));
      } catch (error) {
        setNotice(t("requestFailed"));
      } finally {
        setSaving(false);
      }
    }
    return h(
      "div",
      { className: "dsh-mobile-scroll dsh-mobile-device" },
      h("div", { className: "dsh-mobile-page-heading" }, h("p", { className: "dsh-mobile-eyebrow" }, "DSH"), h("h1", null, t("device"))),
      h(
        "section",
        { className: "dsh-mobile-card" },
        h("h2", null, t("deviceName")),
        loading ? h("p", { role: "status" }, t("loading")) : !remote ? h("p", { className: "dsh-mobile-muted" }, t("localDeviceNotice")) : h(
          "form",
          { onSubmit: save },
          h("label", null, t("deviceName"), h("input", { value: label, onChange: (event) => setLabel(event.target.value), maxLength: 80, required: true, disabled: saving })),
          h("button", { type: "submit", className: "dsh-mobile-button dsh-mobile-primary", disabled: saving || !label.trim() || label.trim() === device?.label }, t(saving ? "saving" : "save"))
        ),
        notice ? h("p", { role: "status", className: "dsh-mobile-muted" }, notice) : null
      ),
      h("section", { className: "dsh-mobile-card" }, h("h2", null, t("appearance")), h("p", { className: "dsh-mobile-muted" }, t("firstVersion")), h("button", { type: "button", className: "dsh-mobile-button", onClick: () => ui.setPreference("desktop") }, t("desktopMode")))
    );
  }
  function MobileRoot(props) {
    const presentation = usePresentation();
    const enabled = presentation.enabled();
    const sessions = props.useSessions(PASS);
    const statuses = props.useSessionStatus(PASS);
    const workspaces = props.useWorkspaces(PASS);
    const [tab, setTab] = import_react.default.useState("tasks");
    const [selectedId, setSelectedId] = import_react.default.useState(() => readPreference(SESSION_KEY, ""));
    const [reference, setReference] = import_react.default.useState(null);
    const [opening, setOpening] = import_react.default.useState(false);
    const [openError, setOpenError] = import_react.default.useState(null);
    const [query, setQuery] = import_react.default.useState("");
    const [filter, setFilter] = import_react.default.useState("all");
    const [limit, setLimit] = import_react.default.useState(20);
    import_react.default.useEffect(() => {
      setLimit(20);
    }, [query, filter]);
    const [mode, setMode] = import_react.default.useState("overview");
    const [workspaceSheet, setWorkspaceSheet] = import_react.default.useState(false);
    const [creating, setCreating] = import_react.default.useState(false);
    const selected = sessions.byId[selectedId];
    const sessionReference = import_react.default.useRef(null);
    const onMode = import_react.default.useCallback((value) => setMode(value), []);
    import_react.default.useEffect(() => {
      if (!enabled || !selectedId || !selected) {
        setReference(null);
        return void 0;
      }
      let live = true;
      setOpening(true);
      setOpenError(null);
      const retained = ctx.sessions.retain(selectedId, { source: "controllerOperation" });
      sessionReference.current = retained;
      retained.ready.then(() => {
        if (live) {
          setReference(retained);
          setOpening(false);
        }
      }).catch((error) => {
        if (live) {
          setOpenError(t("openFailed"));
          setOpening(false);
        }
      });
      return () => {
        live = false;
        retained.release();
        if (sessionReference.current === retained) sessionReference.current = null;
      };
    }, [enabled, selectedId, Boolean(selected)]);
    import_react.default.useEffect(() => {
      if (!enabled) return void 0;
      const previous = document.activeElement;
      return () => {
        if (previous instanceof HTMLElement && previous.isConnected) previous.focus({ preventScroll: true });
      };
    }, [enabled]);
    if (!enabled) return null;
    const archived = new Set(workspaces.archivedSessionIds);
    const rows = sessions.ids.map((id) => sessions.byId[id]).filter((row) => row && !row.parentId && !row.blank && !archived.has(row.id));
    const classification = (row) => statuses.get(row.id)?.pendingInteraction ? "waiting" : statuses.get(row.id)?.running ?? row.running ? "running" : "ready";
    const priority = { waiting: 0, running: 1, ready: 2 };
    rows.sort((a, b2) => priority[classification(a)] - priority[classification(b2)] || b2.updatedAt - a.updatedAt);
    const counts = { all: rows.length, waiting: 0, running: 0, ready: 0 };
    for (const row of rows) counts[classification(row)]++;
    const visible = rows.filter((row) => (filter === "all" || classification(row) === filter) && `${row.displayTitle} ${row.cwd || ""}`.toLowerCase().includes(query.toLowerCase()));
    function open(id) {
      ctx.uiWorkspace.openSession(id);
      savePreference(SESSION_KEY, id);
      if (id !== selectedId) setReference(null);
      setSelectedId(id);
      setMode("overview");
      setTab("session");
    }
    async function create2(workspaceId) {
      if (creating) return;
      setCreating(true);
      setOpenError(null);
      try {
        const id = await ctx.uiWorkspace.connectWorkspace(workspaceId);
        setWorkspaceSheet(false);
        open(id);
      } catch (error) {
        setOpenError(t("createFailed"));
      } finally {
        setCreating(false);
      }
    }
    const tasks = h(
      "div",
      { className: "dsh-mobile-scroll dsh-mobile-tasks" },
      h("div", { className: "dsh-mobile-page-heading" }, h("div", null, h("p", { className: "dsh-mobile-eyebrow" }, t("workbench")), h("h1", null, t("tasks")), h("p", { className: "dsh-mobile-muted" }, t("tasksHint"))), h("button", { type: "button", className: "dsh-mobile-button dsh-mobile-primary", onClick: () => setWorkspaceSheet(true) }, t("newTask"))),
      h("div", { className: "dsh-mobile-counters" }, ["waiting", "running", "ready"].map((kind) => h("button", { type: "button", className: `dsh-mobile-counter ${filter === kind ? "is-active" : ""}`, key: kind, onClick: () => setFilter(filter === kind ? "all" : kind) }, h("strong", null, counts[kind]), h("span", null, t(kind))))),
      h("label", { className: "dsh-mobile-search" }, h("span", { className: "dsh-mobile-sr" }, t("searchTasks")), h("input", { type: "search", value: query, onChange: (event) => setQuery(event.target.value), placeholder: t("searchTasks") })),
      h("div", { className: "dsh-mobile-list-title" }, h("h2", null, t(filter)), filter !== "all" ? h("button", { type: "button", className: "dsh-mobile-quiet", onClick: () => setFilter("all") }, t("showAll")) : null),
      sessions.phase !== "ready" ? h("p", { role: "status" }, t("loading")) : !visible.length ? h("p", { className: "dsh-mobile-empty" }, t("noTasks")) : visible.slice(0, limit).map((row) => {
        const state = classification(row);
        const workspace = workspaces.items.find((item) => item.sessionIds.includes(row.id));
        const pending = statuses.get(row.id)?.pendingInteraction;
        const description = pending?.kind === "approval" ? t("approvalNeeded") : pending?.questions?.[0]?.question;
        return h(
          "button",
          { type: "button", key: row.id, className: "dsh-mobile-task", onClick: () => open(row.id) },
          h("div", { className: "dsh-mobile-task-meta" }, h("span", { className: `dsh-mobile-state is-${state}` }, t(state)), h("span", null, workspace?.title || row.cwd?.split(/[\\/]/).filter(Boolean).pop() || "DSH")),
          h("h3", null, row.displayTitle || t("untitled")),
          description ? h("p", null, description) : null,
          h("div", { className: "dsh-mobile-task-foot" }, h("span", null, Number.isFinite(row.updatedAt) ? new Intl.DateTimeFormat(void 0, { month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit" }).format(row.updatedAt) : ""), h("span", null, t("openTask"), " \u203A"))
        );
      }),
      visible.length > limit ? h("button", { type: "button", className: "dsh-mobile-button", onClick: () => setLimit((value) => value + 20) }, t("loadMore")) : null,
      openError ? h("p", { className: "dsh-mobile-error", role: "alert" }, openError) : null
    );
    const session = !selectedId || !selected ? h("div", { className: "dsh-mobile-empty" }, h("p", null, t("chooseTask")), h("button", { type: "button", className: "dsh-mobile-button", onClick: () => setTab("tasks") }, t("tasks"))) : opening || !reference ? h("div", { className: "dsh-mobile-empty", role: "status" }, openError || t("opening")) : h(props.SessionProvider, { session: reference, key: selectedId }, props.renderSlot("dsh-mobile.session", { title: selected.displayTitle || t("untitled"), mode, onMode, onBack: () => setTab("tasks") }));
    return h(
      "section",
      { className: "dsh-mobile-app", "aria-label": t("workbench"), "data-dsh-mobile": "" },
      h("style", null, styles + overviewStyles),
      h("div", { className: "dsh-mobile-main" }, tab === "tasks" ? tasks : tab === "session" ? session : h(DevicePanel)),
      h("nav", { className: "dsh-mobile-bottom", "aria-label": t("mobileNavigation") }, ["tasks", "session", "device"].map((value, index) => h("button", { type: "button", key: value, "aria-current": tab === value ? "page" : void 0, onClick: () => setTab(value) }, h("span", { className: "dsh-mobile-nav-icon", "aria-hidden": true }, ["\u25A4", "\u25C9", "\u25C7"][index]), h("span", null, t(value))))),
      workspaceSheet ? h("div", { className: "dsh-mobile-sheet-mask", onClick: () => {
        if (!creating) setWorkspaceSheet(false);
      } }, h("section", { className: "dsh-mobile-sheet", role: "dialog", "aria-modal": true, "aria-label": t("chooseWorkspace"), onClick: (event) => event.stopPropagation() }, h("div", { className: "dsh-mobile-row" }, h("h2", null, t("chooseWorkspace")), h("button", { type: "button", className: "dsh-mobile-quiet", disabled: creating, onClick: () => setWorkspaceSheet(false) }, t("cancel"))), workspaces.items.map((item) => h("button", { type: "button", key: item.workspaceId, className: "dsh-mobile-workspace", disabled: creating, onClick: () => create2(item.workspaceId) }, item.title, " \u203A")), !workspaces.items.length ? h("p", null, t("noWorkspaces")) : null)) : null
    );
  }
  function MobileLauncher() {
    usePresentation();
    return !ui.enabled() && ui.media.matches ? h("div", { className: "dsh-mobile-launcher" }, h("style", null, styles), h("button", { type: "button", className: "dsh-mobile-button", onClick: () => ui.setPreference("mobile") }, t("openMobile"))) : null;
  }
  ctx.slots.inject("shell.overlay", () => ctx.slots.register({ name: "shell.overlay", id: "dsh-mobile.workspace", order: 50, locale: NS, children: { "dsh-mobile.session": { kind: "single", scope: "session" } } }, MobileRoot));
  ctx.slots.inject("dsh-mobile.session", () => ctx.slots.register({ name: "dsh-mobile.session", locale: NS }, MobileSession));
  ctx.slots.inject("shell.bottom", () => ctx.slots.register({ name: "shell.bottom", locale: NS }, MobileLauncher));
}
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE *)
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
*/

return module.exports;}});
