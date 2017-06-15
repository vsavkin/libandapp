import { Component, Inject } from '@angular/core';

@Component({
  selector: 'lib-cmp',
  templateUrl: './lib.component.html'
})
export class LibComponent {
  prop: string;

  constructor(@Inject('stringTransformer') transformer: Namespacelib_Nested.StringTransformer) {
    this.prop = transformer.transformString(Namespacelib.Nested.StringConst);
  }
}