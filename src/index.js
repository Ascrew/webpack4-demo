import Vue from 'vue'
import App from './App.vue'
import route from './router/index.js'
import './styles/index.scss'

new Vue({
  router: route,
  render: h => h(App)
}).$mount('#app')
