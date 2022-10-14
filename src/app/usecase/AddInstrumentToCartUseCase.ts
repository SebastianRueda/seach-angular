import {EventEmitter, Injectable} from "@angular/core";
import {Instrument} from "../instruments/interfaces/Instrument";

@Injectable({
  providedIn: 'root'
})
export class AddInstrumentToCartUseCase {
  private instruments: Instrument[] = []

  instrumentsEmitter: EventEmitter<Instrument[]> = new EventEmitter<Instrument[]>()

  addRemoveInstrument(instrument: Instrument) {
    if (this.isAdded(instrument)) {
      this.removeInstrument(instrument)
    } else {
      this.addInstrument(instrument)
    }
    console.log(this.instruments)
    this.instrumentsEmitter.emit(this.instruments)
  }

  isAdded(instrument: Instrument): boolean {
    return this.instruments.some(inst => inst.id === instrument.id)
  }

  private addInstrument(instrument: Instrument) {
    console.log("add: " + instrument)
    this.instruments.push(instrument)
  }

  private removeInstrument(instrument: Instrument) {
    const index = this.instruments.findIndex(inst => inst === instrument)
    console.log("index: " + index)
    if (index > -1) {
      this.instruments.splice(index, 1)
    }
  }
}
