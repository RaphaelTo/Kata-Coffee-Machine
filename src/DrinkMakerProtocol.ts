import ChocolateMaker from './ChocolateMaker';
import CoffeeMaker from './CoffeeMaker';
import DrinkPrice from './DrinkPrice';
import {
  DrinkMakerProtocolInterface,
  DrinkMaker as IDrinkMaker
} from './interfaces/DrinkMakerInterface';
import TeaMaker from './TeaMaker';
import OrangeJuiceMaker from './OrangeJuiceMaker';

class DrinkMakerProtocol implements DrinkMakerProtocolInterface {
  private _order: IDrinkMaker;
  private _price: DrinkPrice;

  constructor(order: IDrinkMaker, price: DrinkPrice) {
    this._order = order;
    this._price = price;
  }

  public exec(): string {
    if (this._order instanceof TeaMaker && this._price.getPrice() >= 0.4) {
      return this._order.makeDrink();
    } else if (
      this._order instanceof CoffeeMaker &&
      this._price.getPrice() >= 0.6
    ) {
      return this._order.makeDrink();
    } else if (
      this._order instanceof ChocolateMaker &&
      this._price.getPrice() >= 0.5
    ) {
      return this._order.makeDrink();
    } else if (
      this._order instanceof OrangeJuiceMaker &&
      this._price.getPrice() >= 0.6
    ) {
      return this._order.makeDrink();
    } else {
      return 'M:message-content';
    }
  }
}

export default DrinkMakerProtocol;
