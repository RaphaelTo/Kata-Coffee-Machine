import Sugar from '../src/Sugar';
import TeaMaker from '../src/TeaMaker';
import ChocolateMaker from '../src/ChocolateMaker';
import CoffeeMaker from '../src/CoffeeMaker';
import DrinkMaker from '../src/DrinkMaker';

describe('test class DrinkMaker', () => {
  test('DrinkMaker exist', () => {
    //Arrange
    const sugar: Sugar = new Sugar(0);
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(sugar);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker);
    //Act
    //Assert
    expect(drinkMaker).toBeInstanceOf(DrinkMaker);
  });

  test('method exec exist', () => {
    const sugar: Sugar = new Sugar(0);
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(sugar);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker);
    const expectValue: string = 'string';

    const makeDrink = drinkMaker.exec();

    expect(typeof makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T:1:0" if the user want tea with 1 sugar', () => {
    const sugar: Sugar = new Sugar(1);
    const teaMaker: TeaMaker = new TeaMaker(sugar);
    const drinkMaker: DrinkMaker = new DrinkMaker(teaMaker);
    const expectValue: string = 'T:1:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T:2:0" if the user want tea with 2 sugar', () => {
    const sugar: Sugar = new Sugar(2);
    const teaMaker: TeaMaker = new TeaMaker(sugar);
    const drinkMaker: DrinkMaker = new DrinkMaker(teaMaker);
    const expectValue: string = 'T:2:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T:10:0" if the user want tea with 10 sugar', () => {
    const sugar: Sugar = new Sugar(10);
    const teaMaker: TeaMaker = new TeaMaker(sugar);
    const drinkMaker: DrinkMaker = new DrinkMaker(teaMaker);
    const expectValue: string = 'T:10:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T::" if the user want only a tea less sugar', () => {
    const sugar: Sugar = new Sugar(0);
    const teaMaker: TeaMaker = new TeaMaker(sugar);
    const drinkMaker: DrinkMaker = new DrinkMaker(teaMaker);
    const expectValue: string = 'T::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "H::" if the user want chocolate with 0 sugar', () => {
    const sugar: Sugar = new Sugar(0);
    const chocolateMaker: ChocolateMaker = new ChocolateMaker(sugar);
    const drinkMaker: DrinkMaker = new DrinkMaker(chocolateMaker);
    const expectValue: string = 'H::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "H:1:0" if the user want chocolate with 1 sugar', () => {
    const sugar: Sugar = new Sugar(1);
    const chocolateMaker: ChocolateMaker = new ChocolateMaker(sugar);
    const drinkMaker: DrinkMaker = new DrinkMaker(chocolateMaker);
    const expectValue: string = 'H:1:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "C:1:0" if the user want coffee with 1 sugar', () => {
    const sugar: Sugar = new Sugar(1);
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(sugar);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker);
    const expectValue: string = 'C:1:0';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "C::" if the user want coffee with 0 sugar', () => {
    const sugar: Sugar = new Sugar(0);
    const coffeeMaker: CoffeeMaker = new CoffeeMaker(sugar);
    const drinkMaker: DrinkMaker = new DrinkMaker(coffeeMaker);
    const expectValue: string = 'C::';

    const makeDrink = drinkMaker.exec();

    expect(makeDrink).toBe(expectValue);
  });
});
