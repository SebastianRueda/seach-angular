import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import {InstrumentsModule} from "../../instruments/instruments.module";
import {HeaderModule} from "../../header/header/header.module";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    InstrumentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
