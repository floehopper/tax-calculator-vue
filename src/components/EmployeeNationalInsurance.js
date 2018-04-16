import TaxBandCollection from '@/components/TaxBandCollection'
import TaxBand from '@/components/TaxBand'

export default class EmployeeNationalInsurance {
  static for2018to2019 () {
    return new EmployeeNationalInsurance({
      lowerEarningsLimit: 6032,
      primaryThreshold: 8424,
      upperEarningsLimit: 46350,
      rates: {
        belowLowerEarningsLimit: 0.0,
        lowerEarningsLimitToPrimaryThreshold: 0.0,
        primaryThresholdToUpperEarningsLimit: 12.0,
        aboveUpperEarningsLimit: 2.0
      }
    })
  }

  constructor (options) {
    this.collection = new TaxBandCollection([
      new TaxBand(0, options.lowerEarningsLimit, options.rates.belowLowerEarningsLimit),
      new TaxBand(options.lowerEarningsLimit, options.primaryThreshold, options.rates.lowerEarningsLimitToPrimaryThreshold),
      new TaxBand(options.primaryThreshold, options.upperEarningsLimit, options.rates.primaryThresholdToUpperEarningsLimit),
      new TaxBand(options.upperEarningsLimit, Number.POSITIVE_INFINITY, options.rates.aboveUpperEarningsLimit)
    ])
  }

  taxFor (amount) {
    return this.collection.taxFor(amount)
  }
}
