<template>
  <div id="app">
    <h1> {{ title }} </h1>
    <cars></cars>  <!-- using globally registered component-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Car App'
    }
  }
}
</script>

<style>

</style>
