import Vue from 'vue'
import App from './App.vue'
import './cube-ui'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
