import { Component } from '@angular/core';
import {InstrumentUseCase} from "./usecase/instrument-use-case";
import {Instrument} from "./instruments/interfaces/Instrument";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private instrumentsUseCase: InstrumentUseCase) { }

  title = 'taller-2-tp-grupo-3';
  instrumentsList: Instrument[] = this.instrumentsUseCase.getInstruments()

  updateInstrumentsList(search: string) {
    this.instrumentsList = this.instrumentsUseCase.searchInstruments(search)
  }
}
