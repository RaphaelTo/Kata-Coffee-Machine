import { HotMakerInterface } from './interfaces/HotMakerInterface';

class HotMaker implements HotMakerInterface {
  private _activated: boolean;

  constructor(activated: boolean) {
    this._activated = activated;
  }

  public makeHotDrink(): string {
    return this._activated ? 'h' : '';
  }
}

export default HotMaker;
