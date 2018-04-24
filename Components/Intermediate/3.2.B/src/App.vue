<template>
  <div id="app">
    <h1> {{ title }} </h1>
    <cars></cars>  <!-- using locally registered component-->
  </div>
</template>

<script>
import Cars from './Cars.vue'	// importing the Cars.vue file into this file only to be used

export default {
  components: {		// registering the component in the script locally
  	'cars': Cars
  },
  data () {
    return {
      title: 'Car App'
    }
  }
}
</script>

<style>

</style>
