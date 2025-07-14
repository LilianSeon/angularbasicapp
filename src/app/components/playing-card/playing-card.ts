import { Component, computed, input, InputSignal, Signal } from '@angular/core';
import { Monster, monsterTypeMap } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.html',
  styleUrl: './playing-card.css'
})
export class PlayingCard {

  /*@Input({
    alias: 'my-monster',
    transform: (value: Monster) => { 
      value.hp = value.hp / 2;
      return value;
    }
  }) monster: Monster = new Monster(); // @Input({ required: true })*/

  monster: InputSignal<Monster> = input(new Monster(), {
    alias: 'my-monster',
    transform: (value: Monster) => { 
      value.hp = value.hp * 2;
      return value;
    }
  }); // Signaux -> input.required()

  monsterImg: Signal<string> = computed(() => monsterTypeMap[this.monster().type].img);
  monsterBgColor: Signal<string> = computed(() => monsterTypeMap[this.monster().type].bgColor);
}
