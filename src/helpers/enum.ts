export function genEnum(name: string, xs: string[]) {
  return `export enum ${name} {${xs.map(x => `
  ${x},`).join('')}
}`;
}
