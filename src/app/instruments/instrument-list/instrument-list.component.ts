import {Component, Input} from '@angular/core';
import {Instrument} from "../interfaces/Instrument";

@Component({
  selector: 'app-instrument-list',
  templateUrl: './instrument-list.component.html',
  styleUrls: ['./instrument-list.component.css']
})
export class InstrumentListComponent {
  @Input()
  instruments: Instrument[] = []
}
