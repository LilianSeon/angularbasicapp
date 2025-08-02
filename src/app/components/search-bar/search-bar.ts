import { Component, EventEmitter, input, model, output, Output, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, AutoCompleteModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
  //encapsulation: ViewEncapsulation.None
})
export class SearchBar {

  //search = input('Inital value');
  search = input('Inital value'); // model() => emit() new value each time it changes + create input & output `search`
  filteredMonsters = input<Monster[]>([new Monster()]);

  @Output() searchButtonClick = new EventEmitter();
  //searchChange = output<string>({ alias: 'submit' });

  searchClick(e: AutoCompleteCompleteEvent) {
    this.searchButtonClick.emit(e.query);
    console.log('searchClick', e)
  }

  updateSearch(value: string) {
    //this.search.set(value);
  }
}
