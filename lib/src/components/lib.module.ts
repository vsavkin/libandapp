import { NgModule } from "@angular/core";
import {LibComponent} from './lib.component';


@NgModule({
  declarations: [LibComponent],
  exports: [LibComponent]
})
export class LibModule {
}