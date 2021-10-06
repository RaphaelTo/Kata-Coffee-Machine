import Sugar from '../src/Sugar';
import TeaMaker from '../src/TeaMaker';
import ChocolateMaker from '../src/ChocolateMaker';
import CoffeeMaker from '../src/CoffeeMaker';
import DrinkMaker from '../src/DrinkMakerProtocol';
import DrinkPrice from '../src/DrinkPrice';
import OrangeJuiceMaker from '../src/OrangeJuiceMaker';
import HotMaker from '../src/HotMaker';

describe('test class DrinkMaker', () => {
  test('DrinkMaker exist', () => {
    //Arrange
    const sugar: Sugar = new Sugar(0);
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(sugar);
    const price: DrinkPrice = new DrinkPrice(0);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker, price);
    //Act
    //Assert
    expect(drinkMaker).toBeInstanceOf(DrinkMaker);
  });

  test('method exec exist', () => {
    const sugar: Sugar = new Sugar(0);
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(sugar);
    const price: DrinkPrice = new DrinkPrice(0);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker, price);
    const expectValue: string = 'string';

    const makeDrink = drinkMaker.exec();

    expect(typeof makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T:1:0" if the user want tea with 1 sugar', () => {
    const sugar: Sugar = new Sugar(1);
    const teaMaker: TeaMaker = new TeaMaker(sugar);
    const price: DrinkPrice = new DrinkPrice(0.4);
    const drinkMaker: DrinkMaker = new DrinkMaker(teaMaker, price);
    const expectValue: string = 'T:1:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T:2:0" if the user want tea with 2 sugar', () => {
    const sugar: Sugar = new Sugar(2);
    const teaMaker: TeaMaker = new TeaMaker(sugar);
    const price: DrinkPrice = new DrinkPrice(0.4);
    const drinkMaker: DrinkMaker = new DrinkMaker(teaMaker, price);
    const expectValue: string = 'T:2:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T:10:0" if the user want tea with 10 sugar', () => {
    const sugar: Sugar = new Sugar(10);
    const teaMaker: TeaMaker = new TeaMaker(sugar);
    const price: DrinkPrice = new DrinkPrice(0.4);
    const drinkMaker: DrinkMaker = new DrinkMaker(teaMaker, price);
    const expectValue: string = 'T:10:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T::" if the user want only a tea less sugar', () => {
    const sugar: Sugar = new Sugar(0);
    const teaMaker: TeaMaker = new TeaMaker(sugar);
    const price: DrinkPrice = new DrinkPrice(0.4);
    const drinkMaker: DrinkMaker = new DrinkMaker(teaMaker, price);
    const expectValue: string = 'T::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "H::" if the user want chocolate with 0 sugar', () => {
    const sugar: Sugar = new Sugar(0);
    const chocolateMaker: ChocolateMaker = new ChocolateMaker(sugar);
    const price: DrinkPrice = new DrinkPrice(0.5);
    const drinkMaker: DrinkMaker = new DrinkMaker(chocolateMaker, price);
    const expectValue: string = 'H::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "H:1:0" if the user want chocolate with 1 sugar', () => {
    const sugar: Sugar = new Sugar(1);
    const chocolateMaker: ChocolateMaker = new ChocolateMaker(sugar);
    const price: DrinkPrice = new DrinkPrice(0.5);
    const drinkMaker: DrinkMaker = new DrinkMaker(chocolateMaker, price);
    const expectValue: string = 'H:1:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "C:1:0" if the user want coffee with 1 sugar', () => {
    const sugar: Sugar = new Sugar(1);
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(sugar);
    const price: DrinkPrice = new DrinkPrice(0.6);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker, price);
    const expectValue: string = 'C:1:0';

    const makeDrink = drinkMaker.exec();
    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "C::" if the user want coffee with 0 sugar', () => {
    const sugar: Sugar = new Sugar(0);
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(sugar);
    const price: DrinkPrice = new DrinkPrice(0.6);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker, price);
    const expectValue: string = 'C::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return M:message-content if the user dont give enough money', () => {
    const sugar: Sugar = new Sugar(0);
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(sugar);
    const price: DrinkPrice = new DrinkPrice(0.4);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker, price);
    const expectValue: string = 'M:message-content';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should make drink if we give 0.60000000 money', () => {
    const sugar: Sugar = new Sugar(0);
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(sugar);
    const price: DrinkPrice = new DrinkPrice(0.6);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker, price);
    const expectValue: string = 'C::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should make a orangeJuice for 0.6 euro', () => {
    const orangeJuice: OrangeJuiceMaker = new OrangeJuiceMaker();
    const price: DrinkPrice = new DrinkPrice(0.6);
    const drinkMaker: DrinkMaker = new DrinkMaker(orangeJuice, price);
    const expectValue: string = 'O::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should make hot chocolate with 1 sugar if we ask, so response is Hh:1:0', () => {
    const sugar: Sugar = new Sugar(1);
    const price: DrinkPrice = new DrinkPrice(0.7);
    const hot: HotMaker = new HotMaker(true);
    const chocolate: ChocolateMaker = new ChocolateMaker(sugar, hot);
    const drinkMaker: DrinkMaker = new DrinkMaker(chocolate, price);
    const expectValue: string = 'Hh:1:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should make hot chocolate with 0 sugar if we ask, so response is Hh::', () => {
    const sugar: Sugar = new Sugar(0);
    const price: DrinkPrice = new DrinkPrice(0.7);
    const hot: HotMaker = new HotMaker(true);
    const chocolate: ChocolateMaker = new ChocolateMaker(sugar, hot);
    const drinkMaker: DrinkMaker = new DrinkMaker(chocolate, price);
    const expectValue: string = 'Hh::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should make hot tea with 1 sugar if we ask, so response is Th:1:0', () => {
    const sugar: Sugar = new Sugar(1);
    const price: DrinkPrice = new DrinkPrice(0.7);
    const hot: HotMaker = new HotMaker(true);
    const tea: TeaMaker = new TeaMaker(sugar, hot);
    const drinkMaker: DrinkMaker = new DrinkMaker(tea, price);
    const expectValue: string = 'Th:1:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should make hot tea with 0 sugar if we ask, so response is Th::', () => {
    const sugar: Sugar = new Sugar(0);
    const price: DrinkPrice = new DrinkPrice(0.7);
    const hot: HotMaker = new HotMaker(true);
    const tea: TeaMaker = new TeaMaker(sugar, hot);
    const drinkMaker: DrinkMaker = new DrinkMaker(tea, price);
    const expectValue: string = 'Th::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should make hot coffee with 1 sugar if we ask, so response is Th:1:0', () => {
    const sugar: Sugar = new Sugar(1);
    const price: DrinkPrice = new DrinkPrice(0.7);
    const hot: HotMaker = new HotMaker(true);
    const coffee: CoffeeMaker = new CoffeeMaker(sugar, hot);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffee, price);
    const expectValue: string = 'Ch:1:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should make hot coffee with 0 sugar if we ask, so response is Th::', () => {
    const sugar: Sugar = new Sugar(0);
    const price: DrinkPrice = new DrinkPrice(0.7);
    const hot: HotMaker = new HotMaker(true);
    const coffee: CoffeeMaker = new CoffeeMaker(sugar, hot);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffee, price);
    const expectValue: string = 'Ch::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });
});
