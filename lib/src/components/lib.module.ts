import { NgModule } from "@angular/core";
import {LibComponent} from './lib.component';

export class SomeStringTransformer {
  transformString(s: string) {
    return `[${s}]`;
  }
}

@NgModule({
  declarations: [LibComponent],
  exports: [LibComponent],
  providers: [
    { provide: 'stringTransformer', useClass: SomeStringTransformer }
  ]
})
export class LibModule {
}