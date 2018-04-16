export default class TaxBand {
  constructor (minimum, maximum, rateInPercent) {
    this.minimum = minimum
    this.maximum = maximum
    this.rateInPercent = rateInPercent
  }

  taxFor (amount) {
    return this.amountWithinBand(amount) * this.rateInPercent / 100.0
  }

  amountWithinBand (amount) {
    return Math.max(Math.min(amount - this.minimum, this.maximum - this.minimum), 0)
  }
}
