# tsc-macro
Compose macro in Typescript, expand back into Typescript

[![npm Package Version](https://img.shields.io/npm/v/tsc-macro.svg?maxAge=2592000)](https://www.npmjs.com/package/tsc-macro)

## How it works

tsc-macro evaluates each `[name].macro.ts` file and save the result to corresponding `[name].ts`

## Example
Source file: `fruit.macro.ts`
```typescript
import { genEnum } from 'tsc-macro'

genEnum('fruit', ['apple', 'orange'])
```
Generated file: `fruit.ts`
```typescript
export enum fruit {
  apple,
  orange,
}
```

A more flexible example: `color.macro.ts`
```typescript
import { genArray, genUnionType } from 'tsc-macro'

let colors = ['red', 'green', 'blue']

;`
${genUnionType('Color', colors)}

${genArray('values', colors)}

export const colors: Color[] = ${genArray(colors)}
`.trim()
```

Generated into `color.ts`
```typescript
export type Color =
  | 'red'
  | 'green'
  | 'blue'

export const values = [
  'red',
  'green',
  'blue',
]

export const colors: Color[] = [
  'red',
  'green',
  'blue',
]
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

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
