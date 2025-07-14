import { Injectable } from '@angular/core';
import { Monster, MonsTerTypes } from '../../models/monster.model';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {

  monsters: Monster[] = [];

  constructor() {
    this.monsters = [];
    const monster1 = new Monster();
    monster1.id = 1;
    monster1.name = "Pika";
    monster1.hp = 40;
    monster1.figureCaption = "N°002 Pika";
    this.monsters.push(monster1);

    const monster2 = new Monster();
    monster2.id = 2;
    monster2.name = "Drago";
    monster2.image = "drago.jpg";
    monster2.type = MonsTerTypes.FIRE;
    monster2.hp = 40;
    monster2.figureCaption = "N°003 Drago";
    this.monsters.push(monster2);

    const monster3 = new Monster();
    monster3.id = 3;
    monster3.name = "Ruby";
    monster3.image = "ruby.jpg";
    monster3.type = MonsTerTypes.CAPABLE;
    monster3.hp = 40;
    monster3.figureCaption = "N°004 Ruby";
    this.monsters.push(monster3);

    const monster4 = new Monster();
    monster4.id = 4;
    monster4.name = "Sleepy";
    monster4.image = "sleepy.jpg";
    monster4.type = MonsTerTypes.WATER;
    monster4.hp = 40;
    monster4.figureCaption = "N°005 Sleepy";
    this.monsters.push(monster4);
  }

  hello() {
    console.log('Hello !')
  }

  getAll() {
		return this.monsters.map(monster => monster.copy());
	}
}
