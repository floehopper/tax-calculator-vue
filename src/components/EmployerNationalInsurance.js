import TaxBandCollection from '@/components/TaxBandCollection'
import TaxBand from '@/components/TaxBand'

export default class EmployerNationalInsurance {
  static for2018to2019 () {
    return new EmployerNationalInsurance({
      lowerEarningsLimit: 6032,
      secondaryThreshold: 8424,
      upperEarningsLimit: 46350,
      rates: {
        belowLowerEarningsLimit: 0.0,
        lowerEarningsLimitToSecondaryThreshold: 0.0,
        secondaryThresholdToUpperEarningsLimit: 13.8,
        aboveUpperEarningsLimit: 13.8
      }
    })
  }

  constructor (options) {
    this.collection = new TaxBandCollection([
      new TaxBand(0, options.lowerEarningsLimit, options.rates.belowLowerEarningsLimit),
      new TaxBand(options.lowerEarningsLimit, options.secondaryThreshold, options.rates.lowerEarningsLimitToSecondaryThreshold),
      new TaxBand(options.secondaryThreshold, options.upperEarningsLimit, options.rates.secondaryThresholdToUpperEarningsLimit),
      new TaxBand(options.upperEarningsLimit, Number.POSITIVE_INFINITY, options.rates.aboveUpperEarningsLimit)
    ])
  }

  taxFor (amount) {
    return this.collection.taxFor(amount)
  }
}
