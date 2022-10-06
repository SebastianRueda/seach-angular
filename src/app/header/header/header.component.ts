import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output()
  onSearch: EventEmitter<string> = new EventEmitter<string>()

  search(text: string) {
    this.onSearch.emit(text)
  }
}
