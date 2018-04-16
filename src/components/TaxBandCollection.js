export default class TaxBandCollection {
  constructor (taxBands) {
    this.taxBands = taxBands
  }

  taxFor (amount) {
    return this.taxBands.reduce((total, taxBand) => total + taxBand.taxFor(amount), 0)
  }
}
