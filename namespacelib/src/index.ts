namespace Namespacelib.Nested {
  export const StringConst: string = "SomeStringConst";

  export interface StringTransformer {
    transformString(s: string): string;
  }

  export class StringTransformerImpl implements StringTransformer {
    transformString(s: string): string {
      return `([${s}])`;
    }
  }
}