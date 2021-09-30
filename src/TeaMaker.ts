import { DrinkMaker } from './interfaces/DrinkMakerInterface';
import Sugar from './Sugar';

class TeaMaker implements DrinkMaker {
  private _sugar: Sugar;

  constructor(sugar: Sugar) {
    this._sugar = sugar;
  }

  public makeDrink(): string {
    return `T${this._sugar.checkWouldLikeSugar(this._sugar.getCountSugar())}`;
  }
}

export default TeaMaker;
