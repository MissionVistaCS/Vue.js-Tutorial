// entry point for webpack.config.js
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',  // connects the HTML to the Vue instance
  render: h => h(App)  // short for createElement(App)
	               // createElement() renders the code from App.vue
})
