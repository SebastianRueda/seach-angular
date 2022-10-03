import { Component } from '@angular/core';
import {Instrument} from "../interfaces/Instrument";

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent {
  instruments: Instrument[] = [
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
}
