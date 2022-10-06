import {Component, Input} from '@angular/core';
import {Instrument} from "../interfaces/Instrument";

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent {

  @Input()
  instruments: Instrument[] = []
}
