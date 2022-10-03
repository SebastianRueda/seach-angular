import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InstrumentsModule} from "./instruments/instruments.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InstrumentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
