import { scanRecursivelySync } from '@beenotung/tslib/fs'
import * as fs from 'fs'
import * as path from 'path'
import * as ts from 'typescript'

export function scanSync(entryPath: string, ext: string) {
  return scanRecursivelySync({
    entryPath,
    dereferenceSymbolicLinks: true,
    skipDir: (dirname, basename) =>
      basename === 'node_modules' && dirname.includes('node_modules'),
    onFile: (inFilename, inBasename) => {
      if (!inBasename.endsWith('.macro.ts')) {
        return
      }
      console.log('expanding', inFilename)
      const outBasename = inBasename.replace(/\.macro\.ts$/, ext)
      const dirname = path.dirname(inFilename)
      const outFilename = path.join(dirname, outBasename)
      const inText = fs.readFileSync(inFilename).toString()

      /* override require to support importing relative files and local packages from macro */
      const realDirname = path.resolve(dirname)
      const realRequire = require
      if (inFilename.endsWith('.ts')) {
        require('ts-node/register')
      }
      require = Object.assign(function (id: string) {
        id = realRequire.resolve(id, { paths: [realDirname] })
        return realRequire(id)
      }, realRequire)
      /* tslint:disable-next-line no-eval */
      const outText = eval(ts.transpile(inText))
      require = realRequire

      fs.writeFileSync(outFilename, outText)
    },
  })
}
