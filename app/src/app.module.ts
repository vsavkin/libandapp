import { NgModule, Component } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { LibModule } from 'mylib';

@Component({
  selector: 'app-cmp',
  template: 'app <lib-cmp></lib-cmp>'
})
export class AppComponent {
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LibModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}