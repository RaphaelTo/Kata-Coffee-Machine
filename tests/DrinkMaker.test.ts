import DrinkMaker from '../src/DrinkMaker';

describe('test class DrinkMaker', () => {
  test('DrinkMaker exist', () => {
    //Arrange
    const drinkMaker: DrinkMaker = new DrinkMaker({ type: 'coffee', sugar: 0 });
    //Act
    //Assert
    expect(drinkMaker).toBeInstanceOf(DrinkMaker);
  });

  test('method makeDrink exist', () => {
    const drinkMaker: DrinkMaker = new DrinkMaker({ type: 'coffee', sugar: 0 });
    const expectValue: string = 'string';

    const makeDrink = drinkMaker.makeDrink();

    expect(typeof makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T:1:0" if the user want tea with 1 sugar', () => {
    const drinkMaker: DrinkMaker = new DrinkMaker({ type: 'tea', sugar: 1 });
    const expectValue: string = 'T:1:0';

    const makeDrink = drinkMaker.makeDrink();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T:2:0" if the user want tea with 2 sugar', () => {
    const drinkMaker: DrinkMaker = new DrinkMaker({ type: 'tea', sugar: 2 });
    const expectValue: string = 'T:2:0';

    const makeDrink = drinkMaker.makeDrink();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T:2:0" if the user want tea with 10 sugar', () => {
    const drinkMaker: DrinkMaker = new DrinkMaker({ type: 'tea', sugar: 10 });
    const expectValue: string = 'T:10:0';

    const makeDrink = drinkMaker.makeDrink();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "T::" if the user want only a tea less sugar', () => {
    const drinkMaker: DrinkMaker = new DrinkMaker({ type: 'tea', sugar: 0 });
    const expectValue: string = 'T::';

    const makeDrink = drinkMaker.makeDrink();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "H::" if the user want chocolate with 0 sugar', () => {
    const drinkMaker: DrinkMaker = new DrinkMaker({
      type: 'chocolate',
      sugar: 0
    });
    const expectValue: string = 'H::';

    const makeDrink = drinkMaker.makeDrink();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "H:1:0" if the user want chocolate with 1 sugar', () => {
    const drinkMaker: DrinkMaker = new DrinkMaker({
      type: 'chocolate',
      sugar: 1
    });
    const expectValue: string = 'H:1:0';

    const makeDrink = drinkMaker.makeDrink();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "C:1:0" if the user want coffee with 1 sugar', () => {
    const drinkMaker: DrinkMaker = new DrinkMaker({
      type: 'coffee',
      sugar: 1
    });
    const expectValue: string = 'C:1:0';

    const makeDrink = drinkMaker.makeDrink();

    expect(makeDrink).toBe(expectValue);
  });

  test('method makeDrink should return "C::" if the user want coffee with 0 sugar', () => {
    const drinkMaker: DrinkMaker = new DrinkMaker({
      type: 'coffee',
      sugar: 0
    });
    const expectValue: string = 'C::';

    const makeDrink = drinkMaker.makeDrink();

    expect(makeDrink).toBe(expectValue);
  });
});
