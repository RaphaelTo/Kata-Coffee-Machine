interface DrinkMaker {
  makeDrink(): string;
}

interface DrinkMakerProtocolInterface {
  exec(): string;
}

export { DrinkMaker, DrinkMakerProtocolInterface };
