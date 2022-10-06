import { Component } from '@angular/core';
import {Instrument} from "../interfaces/Instrument";
import {InstrumentUseCase} from "../../usecase/instrument-use-case";

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent {

  constructor(private instrumentUseCase: InstrumentUseCase) { }

  instruments: Instrument[] = this.instrumentUseCase.getInstruments()
}
