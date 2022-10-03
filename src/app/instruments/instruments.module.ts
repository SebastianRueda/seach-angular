import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentComponent } from './instrument/instrument.component';
import { InstrumentListComponent } from './instrument-list/instrument-list.component';



@NgModule({
  declarations: [
    InstrumentComponent,
    InstrumentListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InstrumentsModule { }
