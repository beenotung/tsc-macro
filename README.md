# tsc-macro
Compose macro in Typescript, expand back into Typescript

[![npm Package Version](https://img.shields.io/npm/v/tsc-macro.svg?maxAge=2592000)](https://www.npmjs.com/package/tsc-macro)

## How it works

tsc-macro evaluates each `[name].macro.ts` file and save the result to corresponding `[name].ts`

## Example
Source file: fruit.macro.ts
```typescript
import { genEnum } from 'tsc-macro/helpers/enum'

genEnum('fruit', ['apple', 'orange']);
```
Generated file: fruit.ts
```typescript
export enum fruit {
  apple,
  orange,
}
```

[More Examples](./examples)

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
