import { inspect } from 'util'

export function genUnionType(name: string, values: any[]): string
export function genUnionType(values: any[]): string
export function genUnionType(
  nameOrValues: any[] | string,
  maybeValues?: any[],
): string {
  if (typeof nameOrValues === 'string') {
    const name = nameOrValues
    const values = maybeValues!
    return `export type ${name} =` + valuesToString(values)
  } else {
    const values = nameOrValues
    return valuesToString(values)
  }
}

function valuesToString(values: any[]): string {
  return values.map((value) => `\n  | ${inspect(value)}`).join('')
}
