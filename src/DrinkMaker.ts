import { DrinkMakerInterface } from './interfaces/DrinkMakerInterface';
import { OrderDrink } from './types/OrderDrink';

class DrinkMaker implements DrinkMakerInterface {
  private _order: OrderDrink;

  constructor(order: OrderDrink) {
    this._order = order;
  }

  public makeDrink(): string {
    const { sugar } = this._order;

    if (this._order.type === 'tea') {
      return `T${this.checkWouldLikeSugar(sugar)}`;
    } else if (this._order.type === 'coffee') {
      return `C${this.checkWouldLikeSugar(sugar)}`;
    } else {
      return `H${this.checkWouldLikeSugar(sugar)}`;
    }
  }

  private checkWouldLikeSugar(sugar: number): string {
    const zero: number = 0;

    if (sugar === zero) {
      return '::';
    } else {
      return `:${sugar}:0`;
    }
  }
}

export default DrinkMaker;
