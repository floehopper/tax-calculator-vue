<template>
  <div>
    <label>
      Salary: £<input type="number" v-model="salary"/>
    </label>
    <p>Employee contributions: £{{ employeeContributions }}</p>
    <p>Employer contributions: £{{ employerContributions }}</p>

    <national-insurance-bar-graph :chart-data="chartData"></national-insurance-bar-graph>
  </div>
</template>

<script>
import NationalInsuranceBarGraph from '@/components/NationalInsuranceBarGraph'
import EmployeeNationalInsurance from '@/components/EmployeeNationalInsurance'
import EmployerNationalInsurance from '@/components/EmployerNationalInsurance'

export default {
  name: 'TaxCalculator',
  components: {
    NationalInsuranceBarGraph
  },
  data () {
    return {
      employerCalculator: EmployerNationalInsurance.for2018to2019(),
      employeeCalculator: EmployeeNationalInsurance.for2018to2019(),
      salary: 20000
    }
  },
  computed: {
    employerContributions () {
      return this.roundToNearestPenny(this.employerCalculator.taxFor(this.salary))
    },
    employeeContributions () {
      return this.roundToNearestPenny(this.employeeCalculator.taxFor(this.salary))
    },
    chartData () {
      return {
        labels: ['NI Contributions'],
        datasets: [
          {
            label: 'Employer',
            backgroundColor: 'rgb(54, 162, 235)',
            data: [this.roundToNearestPenny(this.employerCalculator.taxFor(this.salary))]
          },
          {
            label: 'Employee',
            backgroundColor: 'rgb(255, 99, 132)',
            data: [this.roundToNearestPenny(this.employeeCalculator.taxFor(this.salary))]
          }
        ]
      }
    }
  },
  methods: {
    roundToNearestPenny (amount) {
      return Number.parseFloat(amount).toFixed(2)
    }
  }
}
</script>

<style scoped>
</style>
