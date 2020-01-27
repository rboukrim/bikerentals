import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Accessories from '../views/Accessories'
import CheckoutSummary from '../views/CheckoutSummary'
import OrderConfirmation from '../views/OrderConfirmation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/accessories',
    name: 'Accessories',
    component: Accessories
  },

  {
    path: '/checkout-summary',
    name: 'CheckoutSummary',
    component: CheckoutSummary
  },

  {
    path: '/order-confirmation',
    name: 'OrderConfirmation',
    component: OrderConfirmation
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
