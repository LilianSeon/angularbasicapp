import { CommonModule } from '@angular/common';
import { Component, computed, inject, model } from '@angular/core';
import { SearchBar } from '../../components/search-bar/search-bar';
import { PlayingCard } from '../../components/playing-card/playing-card';
import { MonsterService } from '../../services/monster/monster';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-monster-list',
  imports: [CommonModule, PlayingCard, SearchBar],
  templateUrl: './monster-list.html',
  styleUrl: './monster-list.css'
})
export class MonsterList {
  monsterService = inject(MonsterService)

  monsters!: Monster[];
  count = 0;
  search = model('');

  filteredMonsters = computed(() => {
 		return this.monsters.filter(monster => monster.name.includes(this.search()));
 	});

  constructor() {
    this.monsterService.hello();
    this.monsters = this.monsterService.getAll();
  }

  increaseCount() {
    this.count++;
  }
}
