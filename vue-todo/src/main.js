import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'

new Vue({
  el: '#app',
  // ES6 적용 축약
  store,
  render: h => h(App)
})
