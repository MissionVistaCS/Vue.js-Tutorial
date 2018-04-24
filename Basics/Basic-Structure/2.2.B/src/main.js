// entry point for webpack.config.js

import Vue from 'vue'
import App from './App.vue'	// import is an ES6 feature but we can use it because Webpack bundles ES6 code and allows all browsers to read it

new Vue({	// creating new Vue instance 
  el: '#app',  		   // connects the HTML to the Vue instance
  render: h => h(App)  // short for createElement(App)
	               	   // takes our root component (App) and renders it to the el in the index.html file (the <div>)
})
