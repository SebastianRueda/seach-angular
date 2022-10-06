import {Instrument} from "../instruments/interfaces/Instrument";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class InstrumentUseCase {
  private instruments: Instrument[] = [
    {
      type: "1-type",
      brand: "1-brand",
      description: "1-description",
      image: "1-image"
    },
    {
      type: "2-type",
      brand: "2-brand",
      description: "2-description",
      image: "2-image"
    },
    {
      type: "3-type",
      brand: "3-brand",
      description: "3-description",
      image: "3-image"
    }
  ]

  searchInstruments(search: string): Instrument[] {
    return this.instruments.filter((inst) => {
      return inst.type.includes(search)
    })
  }

  getInstruments(): Instrument[] {
    return this.instruments
  }
}
