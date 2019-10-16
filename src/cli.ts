#!/usr/bin/env node
import { scanSync } from './scanner';

const entryPath = process.argv[2] || '.';
console.log('scanning', entryPath);
scanSync(entryPath);
