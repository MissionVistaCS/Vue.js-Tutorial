<template>
  <div>
    <h1>Todo List</h1>
    <todo-list></todo-list>
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
export default {
  data () {
    return {
    }
  },
  components: {
    'todo-list': Todos
  }
}
</script>

<style>

</style>
