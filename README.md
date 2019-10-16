# tsc-macro
Compose macro in Typescript, expand back into Typescript

[![npm Package Version](https://img.shields.io/npm/v/tsc-macro.svg?maxAge=2592000)](https://www.npmjs.com/package/tsc-macro)

## Example
Source file: foo.macro.ts
```typescript
import { genEnum } from 'tsc-macro/helpers/enum'

genEnum('fruit', ['apple', 'orange']);
```
Generated file: foo.ts
```typescript
export enum fruit {
  apple,
  orange,
}
```

## Installation
```bash
npm i -g tsc-macro
```

## Transpile
```bash
## recursively in the current directory
tsc-macro

## recursively in given directory
tsc-macro src/models
```
