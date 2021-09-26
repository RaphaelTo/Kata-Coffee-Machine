import { DrinkMaker } from './interfaces/DrinkMakerInterface';
import Sugar from './Sugar';

class ChocolateMaker extends Sugar implements DrinkMaker {
  constructor(countSugar: number) {
    super(countSugar);
  }

  public makeDrink(): string {
    return `H${this.checkWouldLikeSugar(this._countSugar)}`;
  }
}

export default ChocolateMaker;
