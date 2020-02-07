<template>
  <div>
      <el-card>
    <!-- // Todo shown when we are not in editing mode. -->
    <div v-show="!isEditing">
        <el-card >
      <div slot='header'>
          <b>{{ todo.title }}</b>
      </div>
      <div>
          {{ todo.project }}
      </div>
      <div style="float:right;">
        <span v-on:click="showForm">
         <el-button type="info"> <i class='el-icon-edit'></i></el-button>
        </span>
        <span  v-on:click="deleteTodo(todo) ">
         <el-button type="danger" style="margin:5px"> <i class='el-icon-delete'></i></el-button>
        </span>
      </div>
       <el-button type="success" v-show="!isEditing && todo.done" disabled style="float:right;margin:5px" >
        Completed
    </el-button>
    <el-button type="danger" v-show="!isEditing && !todo.done" v-on:click="completeTodo(todo)" style="float:right; margin:5px">
        Pending
    </el-button>
        </el-card>
        
    </div>
    <!-- // form is visible when we are in editing mode -->
    <div class="content" v-show="isEditing">
      <div class="ui form">
        <el-form label-position="left" label-width="150px">
          <el-form-item label="Title">
          <el-input type="text" v-model="todo.title" ></el-input>
          </el-form-item>
            <el-form-item label="Project">
          <el-input type="text" v-model="todo.project" @keyup.enter.native="hideForm"></el-input>
            </el-form-item>
        </el-form>
        </div>
          <el-button type="warning" v-on:click="hideForm"> Save </el-button>
        </div>
      </el-card>
  </div>
</template>

<script>
export default {
  props: ["todo"],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    showForm() {
      this.isEditing = true
    },
    hideForm () {
      this.isEditing = false
    },
    deleteTodo (todo) {
      this.$emit("delete-todo", todo)
    },
    completeTodo (todo) {
      this.$emit("complete-todo", todo)
    }
  }
}
</script>

<style lang="scss" scoped>
.button[disabled] {
  cursor: not-allowed;
}
.i {
  cursor: pointer;
}
#cards {
    border: 0px solid;
    padding: 10px;
    box-shadow: 5px 10px #2c2929;
    background-color: rgba(3,78,136,0.7);
color:white;
}
</style>
