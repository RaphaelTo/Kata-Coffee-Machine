import { DrinkPriceInterface } from './interfaces/DrinkPriceInterface';

class DrinkPrice implements DrinkPriceInterface {
  private _price: number;

  constructor(price: number) {
    this._price = price;
  }

  public getPrice(): number {
    return this._price;
  }
}

export default DrinkPrice;
