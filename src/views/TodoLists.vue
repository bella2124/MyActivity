
<template>
  <div id="app">
     <AddTodo v-on:create-todo="addTodo"/>
    <TodoList v-bind:todos="todos" />
    <TodoList></TodoList>
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo.vue'
import TodoList from '@/components/TodoList.vue'
export default {
  name: 'App',
  components: {
    TodoList,
    AddTodo
  }, // data function avails data to the template
  data () {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true
      }]
    }
  },      
  methods: {
    addTodo (todo) {
      this.todos.push(todo)
    }
  }
}
</script>

