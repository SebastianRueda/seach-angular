import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import {InstrumentsModule} from "../../instruments/instruments.module";
import {HeaderModule} from "../../header/header.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    InstrumentsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
