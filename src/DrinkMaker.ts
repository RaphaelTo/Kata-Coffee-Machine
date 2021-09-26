import {
  DrinkMakerInterface,
  DrinkMaker as IDrinkMaker
} from './interfaces/DrinkMakerInterface';

class DrinkMaker implements DrinkMakerInterface {
  private _order: IDrinkMaker;

  constructor(order: IDrinkMaker) {
    this._order = order;
  }

  public exec(): string {
    return this._order.makeDrink();
  }
}

export default DrinkMaker;
