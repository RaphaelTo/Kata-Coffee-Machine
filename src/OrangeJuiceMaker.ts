import { DrinkMaker } from './interfaces/DrinkMakerInterface';

class OrangeJuiceMaker implements DrinkMaker {
  public makeDrink(): string {
    return `O::`;
  }
}

export default OrangeJuiceMaker;
