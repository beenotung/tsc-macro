import { inspect } from 'util'

export function genArray(name: string, values: any[]): string
export function genArray(values: any[]): string
export function genArray(
  nameOrValues: any[] | string,
  maybeValues?: any[],
): string {
  if (typeof nameOrValues === 'string') {
    const name = nameOrValues
    const values = maybeValues!
    return `export const ${name} = ` + valuesToString(values)
  } else {
    const values = nameOrValues
    return valuesToString(values)
  }
}

function valuesToString(values: any[]): string {
  return inspect(values, { compact: false }).replace(/\n]$/, ',\n]')
}
