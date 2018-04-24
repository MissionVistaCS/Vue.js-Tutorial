import Vue from 'vue'
import App from './App.vue'
import Cars from './Cars.vue'

Vue.component('cars', Cars);	// registering the component globally - we can use this in any component 

new Vue({
  el: '#app',
  render: h => h(App)
})
