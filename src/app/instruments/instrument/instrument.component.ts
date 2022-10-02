import {Component, Input} from '@angular/core';
import {Instrument} from "../interfaces/Instrument";

@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent {
  @Input()
  instrument: Instrument = {
    type: "",
    brand: "",
    description: "",
    image: ""
  }


}
