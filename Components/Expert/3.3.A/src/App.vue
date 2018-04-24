<template>
 <div>
  <app-header></app-header>   <!-- using app-header template -->
  <cars></cars>               <!-- using cars template -->
  <app-footer></app-footer>   <!-- using app-footer template -->
 </div>
</template>

<script>
import Header from './components/Header.vue'  // importing the Header
import Footer from './components/Footer.vue'  // importing the Footer
import Cars from './components/Cars.vue'      // importing the Cars

export default {
  components: {
    'app-header': Header,    // can't use 'header' because that's already an HTML tag
    'app-footer': Footer,    // same reason
    'cars': Cars
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
