
export enum MonsTerTypes {
	FIRE = "fire",
	CAPABLE = "capable",
	ELECTRIC = "electric",
	WATER = "water"
}

export const monsterTypeMap = {
  [MonsTerTypes.CAPABLE]: {
    img: "capable.png",
    bgColor: "#7532a8"
  },
  [MonsTerTypes.FIRE]: {
    img: "fire.png",
    bgColor: "#a82727"
  },
  [MonsTerTypes.ELECTRIC]: {
    img: "electric.jpg",
    bgColor: "#c9c616"
  },
  [MonsTerTypes.WATER]: {
    img: "water.png",
    bgColor: "#0c81c9"
  }
}

export class Monster {
	id: number = 0;
    name: string = "Monster";
	hp: number = 10;
	figureCaption: string = "N°001 Monster"

	attackName: string = "Standard Attack"
	attackStrength: number = 10;
	attackDescription: string = "A standard attack";
	image: string = "pika.jpg";
	type: MonsTerTypes = MonsTerTypes.ELECTRIC;

	copy(): Monster {
 		return Object.assign(new Monster(), this);
 	}
}