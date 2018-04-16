import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TaxCalculator from '@/components/TaxCalculator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/tax-calculator',
      name: 'TaxCalculator',
      component: TaxCalculator
    }
  ]
})
