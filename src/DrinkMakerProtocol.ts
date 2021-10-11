import ChocolateMaker from './ChocolateMaker';
import CoffeeMaker from './CoffeeMaker';
import DrinkPrice from './DrinkPrice';
import {
  DrinkMakerProtocolInterface,
  DrinkMaker as IDrinkMaker
} from './interfaces/DrinkMakerInterface';
import OrangeJuiceMaker from './OrangeJuiceMaker';
import TeaMaker from './TeaMaker';

class DrinkMakerProtocol implements DrinkMakerProtocolInterface {
  private _order: IDrinkMaker;
  private _price: DrinkPrice;

  constructor(order: IDrinkMaker, price: DrinkPrice) {
    this._order = order;
    this._price = price;
  }

  public exec(): string {
    if (!this._order) {
      return 'M:message-content';
    }

    if (!this.checkPrice(this._order)) {
      return 'enough money';
    }

    return this._order.makeDrink();
  }

  public checkPrice(drinkInstance: IDrinkMaker): boolean {
    let response: boolean = false;

    if (drinkInstance instanceof TeaMaker && this._price.getPrice() >= 0.4) {
      response = true;
    }

    if (
      drinkInstance instanceof ChocolateMaker &&
      this._price.getPrice() >= 0.5
    ) {
      response = true;
    }

    if (
      (drinkInstance instanceof CoffeeMaker ||
        drinkInstance instanceof OrangeJuiceMaker) &&
      this._price.getPrice() >= 0.6
    ) {
      response = true;
    }

    return response;
  }
}

export default DrinkMakerProtocol;
