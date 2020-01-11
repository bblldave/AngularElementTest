import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { DadJokeComponent } from './dad-joke/dad-joke.component';
import {createCustomElement} from '@angular/elements';
@NgModule({
  declarations: [
    AppComponent,
    DadJokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  entryComponents: [DadJokeComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(DadJokeComponent, {injector: this.injector});
    customElements.define('dad-joke', el);
  }
}
