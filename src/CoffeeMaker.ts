import { DrinkMaker } from './interfaces/DrinkMakerInterface';
import Sugar from './Sugar';

class CoffeeMaker extends Sugar implements DrinkMaker {
  constructor(countSugar: number) {
    super(countSugar);
  }

  public makeDrink(): string {
    return `C${this.checkWouldLikeSugar(this._countSugar)}`;
  }
}

export default CoffeeMaker;
