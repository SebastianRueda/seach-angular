import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentComponent } from './instrument/instrument.component';
import { InstrumentsComponent } from './instruments/instruments.component';



@NgModule({
  declarations: [
    InstrumentComponent,
    InstrumentsComponent
  ],
  exports: [
    InstrumentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InstrumentsModule { }
