import { build } from 'esbuild';
import { writeFile } from 'node:fs/promises';
const result = await build({ entryPoints: ['app.js'], bundle: true, platform: 'browser', format: 'cjs', target: ['es2022'], external: ['react'], write: false, minify: false });
await writeFile(new URL('./client.js', import.meta.url), `window.__ModuleLoader__.load({id:'dsh-mobile',factory(require){const module={exports:{}};const exports=module.exports;\n${result.outputFiles[0].text}\nreturn module.exports;}});\n`);
