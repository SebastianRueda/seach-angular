import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponent} from "./search/search.component";
import {HeaderComponent} from "./header/header.component";
import {FormsModule} from "@angular/forms";
import {CartComponent} from "./cart/cart.component";

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
