<template>
  <div>
    <br>
    <EditTodo
       v-on:delete-todo="deleteTodo"
      v-on:complete-todo="completeTodo"
      v-for="(todo,index) in todos"
      v-bind:todo="todo"
      v-bind:key="index"
    />
 <div>
<el-card>
    <el-button type="success" size="mini" circle style="float:right" > <p><b>Completed Tasks:</b>{{completeCount}}</p></el-button>
    <el-button type="danger" size="mini" circle style="float:left">  <p ><b> Pending Tasks:</b> {{pendingCount}}</p></el-button>
<br><br>
</el-card>
    </div>

  </div>
   

</template>

<script>
// "autoprefixer", "postcss -u autoprefixer -r dist/css/*";
import EditTodo from '@/components/EditTodo.vue'

export default {
  props: ['todos'],
  components: {
    EditTodo
  },
  data (){
return {
}
},
computed: {
 completeCount () {
    return this.todos.filter(todo => todo.done === true).length
  },
   pendingCount () {
    return this.todos.filter(todo => todo.done === false).length
   }
  },
  methods: {
    deleteTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    },
    completeTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = true

    }
  }
}
</script>
<style lang="scss" scoped>
.list-info {
  margin: 2rem;
  text-align: center;
}
#p {
width: 150px;
padding: 10px;
background: rgb(250, 109, 109);
-moz-border-radius: 75px;
-webkit-border-radius: 75px;
border-radius: 75px;
color:whitesmoke;
}
#c {
width: 150px;
padding: 10px;
background:green;
-moz-border-radius: 75px;
-webkit-border-radius: 75px;
border-radius: 75px;
color:whitesmoke;
}
</style>
