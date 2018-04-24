<template>
  <ul>
  	<li v-for="car in cars"> {{ car }} </li> <!-- the component we want to nest -->
  </ul>
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

<style>

</style>