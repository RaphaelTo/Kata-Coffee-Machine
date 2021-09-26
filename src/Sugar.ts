import { SugarInterface } from './interfaces/SugarInterface';

class Sugar implements SugarInterface {
  protected _countSugar: number;

  constructor(sugar: number) {
    this._countSugar = sugar;
  }

  public checkWouldLikeSugar(countSugar: number): string {
    const zero: number = 0;

    if (countSugar === zero) {
      return '::';
    } else {
      return `:${countSugar}:0`;
    }
  }
}

export default Sugar;
