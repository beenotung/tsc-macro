function noop(...args: any[]): any {
  // placeholder
}

export function alias(_typeAlias: TypeAlias) {
  return {
    type: noop,
    typeArray: noop,
  };
}

export function def(_constants: Constants) {
  return { ref: noop };
}

export interface TypeAlias {
  [name: string]: string;
}

export interface Constants {
  [name: string]: Constant;
}

export type Constant =
  | string
  | number
  | {
      value: any;
      type?: string;
    }
  | any;
