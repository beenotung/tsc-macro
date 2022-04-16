#!/usr/bin/env node
import { scanSync } from './scanner'

let ext = '.ts'
let entryPath = '.'
for (let i = 2; i < process.argv.length; i++) {
  const arg = process.argv[i]
  if (arg === '--ext') {
    i++
    ext = process.argv[i]
    continue
  }
  entryPath = arg
}
console.log('scanning', entryPath)
scanSync(entryPath, ext)
