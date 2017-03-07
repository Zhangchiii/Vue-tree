import Vue from 'vue'
import App from './App'

import '@/assets/css/font-awesome.css'
import '@/assets/css/app.css'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
