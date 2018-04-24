<template>
	<div> <!-- need this because each Vue file needs a root element -->
	  <h1>List of Cars</h1>	
	  <ul>
	  	<li v-for="car in cars"> {{ car }} </li> <!-- the component we want to nest -->
	  </ul>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	cars: ['Ferrari', 'Bugatti', 'Lamborghini', 'Corvette']
    }
  }
}
</script>

<style scoped>
/* need the scoped attribute to make it unique to the component */ 
h1 {
	color: green;
}
</style>