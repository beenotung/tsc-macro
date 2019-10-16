import { scanRecursivelySync } from '@beenotung/tslib/fs';
import * as path from 'path';
import * as fs from 'fs';
import { tsEval } from 'ts-eval';

export function scanSync(entryPath: string) {
  return scanRecursivelySync({
    entryPath,
    dereferenceSymbolicLinks: true,
    skipDir: (dirname, basename) => basename === 'node_modules' && dirname.includes('node_modules'),
    onFile: (inFilename, inBasename) => {
      if (!inBasename.endsWith('.macro.ts')) {
        return;
      }
      console.log('expanding', inFilename);
      let outBasename = inBasename.replace(/\.macro\.ts$/, '.ts');
      let outFilename = path.join(path.dirname(inFilename), outBasename);
      let inText = fs.readFileSync(inFilename).toString();
      let outText = eval(tsEval.transpile(inText));
      fs.writeFileSync(outFilename, outText);
    },
  });
}
