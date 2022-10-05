import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output()
  onTextChanged: EventEmitter<string> = new EventEmitter<string>()
  search: string = ""

  textChanged() {
    this.onTextChanged.emit(this.search)
  }
}
