import TaxBandCollection from '@/components/TaxBandCollection'
import TaxBand from '@/components/TaxBand'

describe('TaxBandCollection', () => {
  describe('taxFor', () => {
    it('applies band rates to amount within each band', () => {
      const taxBand1 = new TaxBand(0, 1000, 20)
      const taxBand2 = new TaxBand(1000, 2000, 10)
      const collection = new TaxBandCollection([taxBand1, taxBand2])
      expect(collection.taxFor(1500)).toEqual(200 + 50)
    })
  })
})
