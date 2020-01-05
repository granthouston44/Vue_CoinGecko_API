import Vue from 'vue'
import Trend from 'vuetrend'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Trend)

export const eventBus = new Vue()

new Vue({
  render: h => h(App),
}).$mount('#app')
