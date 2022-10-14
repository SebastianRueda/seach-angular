import {Component} from '@angular/core';
import {Instrument} from "../../instruments/interfaces/Instrument";
import {AddInstrumentToCartUseCase} from "../../usecase/AddInstrumentToCartUseCase";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  instruments: Instrument[] = []

  constructor(private addInstrumentToCart: AddInstrumentToCartUseCase) {
    this.updateInstruments()
  }

  updateInstruments() {
    this.addInstrumentToCart.instrumentsEmitter
      .asObservable()
      .subscribe(
        instruments => {
          this.instruments = instruments
        }
      )
  }
}
