import { scanRecursivelySync } from '@beenotung/tslib/fs';
import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

export function scanSync(entryPath: string) {
  return scanRecursivelySync({
    entryPath,
    dereferenceSymbolicLinks: true,
    skipDir: (dirname, basename) =>
      basename === 'node_modules' && dirname.includes('node_modules'),
    onFile: (inFilename, inBasename) => {
      if (!inBasename.endsWith('.macro.ts')) {
        return;
      }
      console.log('expanding', inFilename);
      const outBasename = inBasename.replace(/\.macro\.ts$/, '.ts');
      const outFilename = path.join(path.dirname(inFilename), outBasename);
      const inText = fs.readFileSync(inFilename).toString();
      const outText = eval(ts.transpile(inText));
      fs.writeFileSync(outFilename, outText);
    },
  });
}
