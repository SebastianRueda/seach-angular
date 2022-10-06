import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InstrumentsModule} from "./instruments/instruments.module";
import {FormsModule} from "@angular/forms";
import {HomeModule} from "./home/home/home.module";
import {HeaderModule} from "./header/header/header.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InstrumentsModule,
    HomeModule,
    HeaderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
