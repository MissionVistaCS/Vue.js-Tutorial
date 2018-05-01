<template>
  <div>
  	<h2> This is the Todo List</h2>
  	<ul>
  		<li v-for="todo in todos">{{ todo.title }}</li>
  	</ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
    	todos: []
    }
  },
  created () {		// uses created lifecycle hook, runs after component is created
  		console.log('created called');
  		this.showTodos();
  },
  methods: {
  	showTodos (param) {
  		console.log('showTodos called');
  		let vm = this;
  		axios.get('https://jsonplaceholder.typicode.com/posts')	// gets data from api
  		.then(function(response) {
  			vm.todos = response.data.slice(0,10);	// gets first ten entries in data and stores into todos data
  			console.log(vm.todos);
  		})
  		.catch(function(err) {
  			console.log(err);
  		})
  	}
  }
}
</script>

<style>

</style>
