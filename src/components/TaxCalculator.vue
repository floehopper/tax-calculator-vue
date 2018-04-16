<template>
  <div>
    <label>
      Salary: <input type="number" v-model="salary"/>
    </label>
    <p>Employee contributions: {{ employeeContributions }}</p>
    <p>Employer contributions: {{ employerContributions }}</p>
  </div>
</template>

<script>
import CurrencyFormatter from 'currency-formatter'

export default {
  name: 'TaxCalculator',
  data () {
    return {
      salary: 0
    }
  },
  computed: {
    employeeContributions () {
      var salarySplit = this.salarySplit(this.salary)
      var amount = this.contributions(salarySplit, this.employeeRates())
      return CurrencyFormatter.format(amount, { code: 'GBP' })
    },

    employerContributions () {
      var salarySplit = this.salarySplit(this.salary)
      var amount = this.contributions(salarySplit, this.employerRates())
      return CurrencyFormatter.format(amount, { code: 'GBP' })
    }
  },
  methods: {
    lel () { return 6032 },
    pt () { return 8424 },
    st () { return 8424 },
    uel () { return 46350 },

    employeeRates () {
      return {
        belowLEL: 0.00,
        betweenLELandPT: 0.00,
        betweenLELandST: 0.00, // unused
        betweenPTandUEL: 0.12,
        betweenSTandUEL: 0.00, // unused
        aboveUEL: 0.02
      }
    },
    employerRates () {
      return {
        belowLEL: 0.00,
        betweenLELandPT: 0.00, // unused
        betweenLELandST: 0.00,
        betweenPTandUEL: 0.00, // unused
        betweenSTandUEL: 0.138,
        aboveUEL: 0.138
      }
    },

    amountBetweenThresholds (amount, lower, upper = Number.POSITIVE_INFINITY) {
      return Math.max(Math.min(amount - lower, upper - lower), 0)
    },

    salarySplit (salary) {
      return {
        belowLEL: this.amountBetweenThresholds(salary, 0, this.lel()),
        betweenLELandPT: this.amountBetweenThresholds(salary, this.lel(), this.pt()),
        betweenLELandST: this.amountBetweenThresholds(salary, this.lel(), this.st()),
        betweenPTandUEL: this.amountBetweenThresholds(salary, this.pt(), this.uel()),
        betweenSTandUEL: this.amountBetweenThresholds(salary, this.st(), this.uel()),
        aboveUEL: this.amountBetweenThresholds(salary, this.uel())
      }
    },

    contributions (salarySplit, rates) {
      var total = 0.0
      for (var property in salarySplit) {
        total += salarySplit[property] * rates[property]
      }
      return total
    }
  }
}
</script>

<style scoped>
</style>
