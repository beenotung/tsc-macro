export function genEnum(name: string, xs: string[]) {
  // prettier-ignore
  return `export enum ${name} {${xs.map(x => `
  ${x},`).join('')}
}`;
}
