import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentComponent } from './instrument/instrument.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';
import { InstrumentsComponent } from './instruments/instruments.component';



@NgModule({
  declarations: [
    InstrumentComponent,
    InstrumentListComponent,
    InstrumentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InstrumentsModule { }
