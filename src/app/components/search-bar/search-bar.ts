import { Component, EventEmitter, input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {

  //search = input('Inital value');
  search = model('Inital value'); // emit() new value each time it changes + create input & output `search`

  @Output() searchButtonClick = new EventEmitter();
  //searchChange = output<string>({ alias: 'submit' });

  searchClick() {
    this.searchButtonClick.emit();
  }

  updateSearch(value: string) {
    this.search.set(value);
  }
}
