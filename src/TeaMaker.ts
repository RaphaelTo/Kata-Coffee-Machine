import { DrinkMaker } from './interfaces/DrinkMakerInterface';
import Sugar from './Sugar';

class TeaMaker extends Sugar implements DrinkMaker {
  constructor(countSugar: number) {
    super(countSugar);
  }

  public makeDrink(): string {
    return `T${this.checkWouldLikeSugar(this._countSugar)}`;
  }
}

export default TeaMaker;
