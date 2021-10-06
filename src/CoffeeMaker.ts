import Sugar from './Sugar';
import HotMaker from './HotMaker';
import { DrinkMaker } from './interfaces/DrinkMakerInterface';

class CoffeeMaker implements DrinkMaker {
  private _sugar: Sugar;
  private _hot?: HotMaker;

  constructor(sugar: Sugar, hot?: HotMaker) {
    this._sugar = sugar;
    this._hot = hot;
  }

  public makeDrink(): string {
    return `C${this._withHeat()}${this._sugar.checkWouldLikeSugar(
      this._sugar.getCountSugar()
    )}`;
  }

  private _withHeat(): string {
    return this._hot ? this._hot.makeHotDrink() : '';
  }
}

export default CoffeeMaker;
