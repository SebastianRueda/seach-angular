import {Component, Input} from '@angular/core';
import {Instrument} from "../interfaces/Instrument";
import {AddInstrumentToCartUseCase} from "../../usecase/AddInstrumentToCartUseCase";

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent {
  @Input()
  instrument: Instrument = {
    id: 0,
    type: "",
    brand: "",
    description: "",
    image: ""
  }

  addedToCard: boolean = false

  constructor(private addInstrumentToCartUseCase: AddInstrumentToCartUseCase) {
    this.checkAdded()
  }

  private checkAdded() {
    this.addedToCard = this.addInstrumentToCartUseCase.isAdded(this.instrument)
  }

  addRemoveCart() {
    if (this.addedToCard) {
      this.removeToCart()
    } else {
      this.addToCart()
    }

    this.addInstrumentToCartUseCase.addRemoveInstrument(this.instrument)
  }

  addToCart() {
    this.addedToCard = true
  }

  removeToCart() {
    this.addedToCard = false
  }
}
