export class BRLCurrency {
  private _integerPart: number
  private _cents: number

  constructor(_integerPart: number, _cents: number) {
    if (_cents > 99) {
      throw Error('CentsField must be last than 99')
    }

    this._integerPart = _integerPart
    this._cents = _cents
  }

  public get integerPart(): number {
    return this._integerPart
  }

  public get cents(): number {
    return this._cents
  }

  public format(): string {
    return `${this._integerPart},${this._cents.toString().padStart(2, '0')}`
  }

  private static prepare(value: BRLCurrency): number {
    return value._integerPart * 100 + value._cents
  }

  private static unprepare(value: number): BRLCurrency {
    const cents = value % 100
    const integerPart = (value - cents) / 100
    if (value < 0) {
      return new BRLCurrency(integerPart, -cents)
    }
    return new BRLCurrency(integerPart, cents)
  }

  static add(firstValue: BRLCurrency, secondValue: BRLCurrency): BRLCurrency {
    const firstValuePrepared = BRLCurrency.prepare(firstValue)
    const secondValuePrepared = BRLCurrency.prepare(secondValue)

    return BRLCurrency.unprepare(firstValuePrepared + secondValuePrepared)
  }

  static subtract(
    firstValue: BRLCurrency,
    secondValue: BRLCurrency,
  ): BRLCurrency {
    const firstValuePrepared = BRLCurrency.prepare(firstValue)
    const secondValuePrepared = BRLCurrency.prepare(secondValue)

    return BRLCurrency.unprepare(firstValuePrepared - secondValuePrepared)
  }

  static multiplyByInteger(value: BRLCurrency, integer: number): BRLCurrency {
    const valuePrepared = BRLCurrency.prepare(value)

    return BRLCurrency.unprepare(valuePrepared * integer)
  }
}
