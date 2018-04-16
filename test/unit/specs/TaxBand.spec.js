import TaxBand from '@/components/TaxBand'

describe('TaxBand', () => {
  describe('amountWithinBand', () => {
    it('returns zero when amount is below bottom of band', () => {
      const taxBand = new TaxBand(1000, 2000)
      expect(taxBand.amountWithinBand(999)).toEqual(0)
    })

    it('returns zero when amount is at bottom of band', () => {
      const taxBand = new TaxBand(1000, 2000)
      expect(taxBand.amountWithinBand(1000)).toEqual(0)
    })

    it('returns amount within band when amount is within band', () => {
      const taxBand = new TaxBand(1000, 2000)
      expect(taxBand.amountWithinBand(1500)).toEqual(500)
    })

    it('returns full amount when amount is at top of band', () => {
      const taxBand = new TaxBand(1000, 2000)
      expect(taxBand.amountWithinBand(2000)).toEqual(1000)
    })

    it('returns band amount when amount is above top of band', () => {
      const taxBand = new TaxBand(1000, 2000)
      expect(taxBand.amountWithinBand(2001)).toEqual(1000)
    })
  })

  describe('taxFor', () => {
    it('applies rate to amount within band', () => {
      const taxBand = new TaxBand(1000, 2000, 10)
      expect(taxBand.taxFor(1500)).toEqual(50)
    })
  })
})
