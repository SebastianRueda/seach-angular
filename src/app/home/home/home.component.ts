import {Component, EventEmitter, Output} from '@angular/core';
import {InstrumentUseCase} from "../../usecase/instrument-use-case";
import {Instrument} from "../../instruments/interfaces/Instrument";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private instrumentsUseCase: InstrumentUseCase) {
    this.getInstruments()
  }

  title = 'taller-2-tp-grupo-3';
  instrumentsList: Instrument[] = []

  @Output()
  onAddToCart: EventEmitter<Instrument> = new EventEmitter<Instrument>()

  private getInstruments() {
    this.instrumentsUseCase.getInstruments()
      .subscribe((resp) => {
        this.instrumentsList = resp
      })
  }

  updateInstrumentsList(search: string) {
    this.instrumentsUseCase.searchInstruments(search).subscribe(
      (resp) => {
        console.log(resp)
        this.instrumentsList = resp
      }
    )
  }
}
