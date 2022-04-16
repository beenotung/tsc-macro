import { genArray, genUnionType } from 'tsc-macro'

let colors = ['red', 'green', 'blue']

;`
${genUnionType('Color', colors)}

${genArray('values', colors)}

export const colors: Color[] = ${genArray(colors)}
`.trim()
