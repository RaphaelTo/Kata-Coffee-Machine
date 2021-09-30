import { SugarInterface } from './interfaces/SugarInterface';

class Sugar implements SugarInterface {
  private _countSugar: number;

  constructor(sugar: number) {
    this._countSugar = sugar;
  }

  public getCountSugar(): number {
    return this._countSugar;
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
