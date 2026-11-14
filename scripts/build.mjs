#!/usr/bin/env node
// Generates the agent- and app-facing files from Wattle's sources.
// Run after changing tokens.json, a component, or a README:  node scripts/build.mjs
// Writes: tokens.css, components.json, llms.txt, llms-full.txt. No dependencies.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => readFileSync(join(root, p), 'utf8');
const SITE = 'https://bharathwaaj.github.io/wattle/';
const GROUP_ORDER = ['Actions', 'Motion', 'Forms', 'Navigation', 'Overlays', 'Layout', 'Status', 'Building blocks', 'Media'];

// ---------- tokens.css ----------
const tokens = JSON.parse(read('tokens.json'));
const themes = tokens.color.themes;
const tv = (t, id) => (typeof t.value === 'string' ? t.value : (t.value[id] ?? t.value[themes[0].id]));
const alias = (v) => { const m = /^\{(.+)\}$/.exec(v); return m ? `var(--${m[1]})` : v; };
let css = `/* Wattle — generated from tokens.json by scripts/build.mjs. Do not edit by hand. */\n`;
themes.forEach((th, i) => {
  css += `${i === 0 ? ':root, ' : ''}[data-theme="${th.id}"] {\n`;
  for (const t of tokens.color.tokens) css += `  --${t.name}: ${alias(tv(t, th.id))};\n`;
  for (const t of tokens.shadow?.tokens ?? []) css += `  --${t.name}: ${tv(t, th.id)};\n`;
  css += `}\n`;
});
css += `:root {\n`;
for (const f of ['spacing', 'radius']) for (const t of tokens[f]?.tokens ?? []) css += `  --${t.name}: ${t.value};\n`;
for (const [k, v] of Object.entries(tokens.type.families)) css += `  --font-${k}: ${v};\n`;
css += `}\n`;
for (const g of tokens.type.groups) for (const s of g.styles) {
  css += `.${s.name} { font-family: var(--font-${s.family || g.family}); font-size: ${s.fontSize}; line-height: ${s.lineHeight}; font-weight: ${s.fontWeight};${s.letterSpacing ? ` letter-spacing: ${s.letterSpacing};` : ''} }\n`;
}
writeFileSync(join(root, 'tokens.css'), css);

// ---------- components.json ----------
const bundle = read('components/bundle.js');
const header = JSON.parse(/@ds-bundle:\s*(\{.*?\})\s*\*\//.exec(bundle)[1]);
const dts = read('components/index.d.ts');
function block(name) {
  const i = dts.search(new RegExp(`export interface ${name}\\b`));
  if (i < 0) return null;
  let depth = 0, j = dts.indexOf('{', i);
  for (let k = j; k < dts.length; k++) { if (dts[k] === '{') depth++; else if (dts[k] === '}') { depth--; if (!depth) return dts.slice(i, k + 1); } }
  return null;
}
const marker = (html) => {
  const a = (/^<!--\s*@dsCard([^>]*)-->/.exec(html) || ['', ''])[1];
  const attr = (n) => { const r = new RegExp(`${n}=(?:"([^"]*)"|(\\d+))`).exec(a); return r ? (r[1] ?? r[2]) : null; };
  return { group: attr('group'), subtitle: attr('subtitle') };
};
const summary = (md) => (md.replace(/^#.*\n+/, '').trim().split(/\n\s*\n/)[0] || '').replace(/\s+/g, ' ');
const components = header.components.map(({ name }) => {
  const dir = `components/${name}`;
  const readme = existsSync(join(root, dir, 'README.md')) ? read(`${dir}/README.md`) : '';
  const preview = existsSync(join(root, dir, 'preview.html')) ? read(`${dir}/preview.html`) : '';
  const m = marker(preview);
  return {
    name, group: m.group || 'Other', summary: summary(readme),
    props: block(`${name}Props`),
    guide: `${dir}/README.md`, preview: `${dir}/preview.html`,
    docs: `${SITE}#/c/${name}`,
  };
}).sort((a, b) => (GROUP_ORDER.indexOf(a.group) + 1 || 99) - (GROUP_ORDER.indexOf(b.group) + 1 || 99));
const extras = [];
if (/export declare function toast\(/.test(dts)) extras.push({ name: 'toast', group: 'Overlays', summary: 'Wattle.toast(message, { tone, actionLabel, onAction, duration }) shows a toast; render <Toaster /> once.', props: block('ToastOptions'), guide: 'components/Toaster/README.md' });
writeFileSync(join(root, 'components.json'), JSON.stringify({
  name: 'Wattle', namespace: header.namespace, site: SITE,
  load: { css: ['tokens.css', 'components/bundle.css'], scripts: ['https://cdn.jsdelivr.net/npm/react@18.3.1/umd/react.production.min.js', 'https://cdn.jsdelivr.net/npm/react-dom@18.3.1/umd/react-dom.production.min.js', 'components/bundle.js'], global: `window.${header.namespace}` },
  icons: Object.keys(JSON.parse(/var ICONS = (\{.*?\});\n/.exec(bundle)[1])),
  components: components.concat(extras),
}, null, 2) + '\n');

// ---------- llms.txt / llms-full.txt ----------
const brand = read('README.md');
const groups = [...new Set(components.map((c) => c.group))];
let llms = `# Wattle\n\n> ${summary(brand)}\n\n`;
llms += `Wattle is a design system for web apps: CSS tokens, one React 18 bundle exposed as window.Wattle, a brand book, and assets. Read AGENTS.md before building with it.\n\n`;
llms += `## Start here\n\n- [AGENTS.md](${SITE}AGENTS.md): how to build an app with Wattle, and the rules\n- [Brand book](${SITE}README.md): voice, colour rules, type, space, motion\n- [components.json](${SITE}components.json): every component with group, summary and props\n- [tokens.css](${SITE}tokens.css): all tokens as CSS custom properties\n- [Starter app](${SITE}examples/starter.html): a complete page to copy\n- [llms-full.txt](${SITE}llms-full.txt): everything above in one file\n\n`;
for (const g of groups) {
  llms += `## ${g}\n\n`;
  for (const c of components.filter((x) => x.group === g)) llms += `- [${c.name}](${SITE}${c.guide}): ${c.summary}\n`;
  llms += `\n`;
}
writeFileSync(join(root, 'llms.txt'), llms);

let full = `# Wattle — full reference for agents\n\nGenerated by scripts/build.mjs. Sections: AGENTS.md, brand book, tokens.css, then every component's props and guide.\n\n`;
full += `\n---\n\n${read('AGENTS.md')}\n\n---\n\n# Brand book\n\n${brand.replace(/^# .*\n/, '')}\n\n---\n\n# tokens.css\n\n\`\`\`css\n${css}\`\`\`\n`;
for (const c of components) {
  full += `\n---\n\n# ${c.name} (${c.group})\n\n`;
  if (c.props) full += `\`\`\`ts\n${c.props}\n\`\`\`\n\n`;
  full += read(c.guide).replace(/^# .*\n+/, '') + '\n';
}
writeFileSync(join(root, 'llms-full.txt'), full);
console.log(`tokens.css, components.json (${components.length} components), llms.txt, llms-full.txt written`);
