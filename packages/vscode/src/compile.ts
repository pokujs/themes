import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { JSONC } from 'jsonc.min';
import { dirname } from 'node:path';

type Paths = {
  src: string;
  dist: string;
};

const paths: Paths[] = [
  {
    src: './src/themes/dark.jsonc',
    dist: './themes/dark.json',
  },
];

for (const path of paths) {
  const theme = await readFile(path.src, 'utf8');
  const minified = JSONC.minify(theme);
  const dir = dirname(path.dist);

  await mkdir(dir, { recursive: true });
  await writeFile(path.dist, minified, 'utf8');
}
