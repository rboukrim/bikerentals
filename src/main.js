import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('toCurrency', function (value) {
  if (typeof value !== "number") {
    return value;
  }
  let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });
  return formatter.format(value);
});

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    this.$store.dispatch('loadData')
  }
}).$mount('#app')
