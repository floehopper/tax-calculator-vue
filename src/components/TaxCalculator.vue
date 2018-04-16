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
import EmployeeNationalInsurance from '@/components/EmployeeNationalInsurance'
import EmployerNationalInsurance from '@/components/EmployerNationalInsurance'
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
      const amount = EmployeeNationalInsurance.for2018to2019().taxFor(this.salary)
      return CurrencyFormatter.format(amount, { code: 'GBP' })
    },

    employerContributions () {
      const amount = EmployerNationalInsurance.for2018to2019().taxFor(this.salary)
      return CurrencyFormatter.format(amount, { code: 'GBP' })
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
