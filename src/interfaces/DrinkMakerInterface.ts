interface DrinkMaker {
  makeDrink(): string;
}

interface DrinkMakerProtocolInterface {
  exec(): string;
  checkPrice(drinkInstance: DrinkMaker): boolean;
}

export { DrinkMaker, DrinkMakerProtocolInterface };
