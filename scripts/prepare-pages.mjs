import { cpSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
for (const entry of readdirSync(resolve(root, 'dist'))) {
  cpSync(resolve(root, 'dist', entry), resolve(root, entry), { recursive: true });
}
writeFileSync(resolve(root, '.nojekyll'), '');
