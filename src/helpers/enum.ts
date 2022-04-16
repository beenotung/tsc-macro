export function genEnum(name: string, values: string[]): string {
  return `
export enum ${name} {${values.map((value) => `\n  ${value},`).join('')}
}`.trim()
}
