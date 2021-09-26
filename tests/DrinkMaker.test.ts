import TeaMaker from '../src/TeaMaker';
import ChocolateMaker from '../src/ChocolateMaker';
import CoffeeMaker from '../src/CoffeeMaker';
import DrinkMaker from '../src/DrinkMaker';

describe('test class DrinkMaker', () => {
  test('DrinkMaker exist', () => {
    //Arrange
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(0);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker);
    //Act
    //Assert
    expect(drinkMaker).toBeInstanceOf(DrinkMaker);
  });

  test('method exec exist', () => {
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(0);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker);
    const expectValue: string = 'string';

    const makeDrink = drinkMaker.exec();

    expect(typeof makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T:1:0" if the user want tea with 1 sugar', () => {
    const teaMaker: TeaMaker = new TeaMaker(1);
    const drinkMaker: DrinkMaker = new DrinkMaker(teaMaker);
    const expectValue: string = 'T:1:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T:2:0" if the user want tea with 2 sugar', () => {
    const teaMaker: TeaMaker = new TeaMaker(2);
    const drinkMaker: DrinkMaker = new DrinkMaker(teaMaker);
    const expectValue: string = 'T:2:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T:10:0" if the user want tea with 10 sugar', () => {
    const teaMaker: TeaMaker = new TeaMaker(10);
    const drinkMaker: DrinkMaker = new DrinkMaker(teaMaker);
    const expectValue: string = 'T:10:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T::" if the user want only a tea less sugar', () => {
    const teaMaker: TeaMaker = new TeaMaker(0);
    const drinkMaker: DrinkMaker = new DrinkMaker(teaMaker);
    const expectValue: string = 'T::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "H::" if the user want chocolate with 0 sugar', () => {
    const chocolateMaker: ChocolateMaker = new ChocolateMaker(0);
    const drinkMaker: DrinkMaker = new DrinkMaker(chocolateMaker);
    const expectValue: string = 'H::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "H:1:0" if the user want chocolate with 1 sugar', () => {
    const chocolateMaker: ChocolateMaker = new ChocolateMaker(1);
    const drinkMaker: DrinkMaker = new DrinkMaker(chocolateMaker);
    const expectValue: string = 'H:1:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "C:1:0" if the user want coffee with 1 sugar', () => {
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(1);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker);
    const expectValue: string = 'C:1:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "C::" if the user want coffee with 0 sugar', () => {
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(0);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker);
    const expectValue: string = 'C::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });
});
