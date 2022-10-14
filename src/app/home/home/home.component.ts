import {Component, EventEmitter, Output} from '@angular/core';
import {InstrumentUseCase} from "../../usecase/instrument-use-case";
import {Instrument} from "../../instruments/interfaces/Instrument";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private instrumentsUseCase: InstrumentUseCase) { }

  title = 'taller-2-tp-grupo-3';
  instrumentsList: Instrument[] = this.instrumentsUseCase.getInstruments()

  @Output()
  onAddToCart: EventEmitter<Instrument> = new EventEmitter<Instrument>()

  updateInstrumentsList(search: string) {
    this.instrumentsList = this.instrumentsUseCase.searchInstruments(search)
  }
}
