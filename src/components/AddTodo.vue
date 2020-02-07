<template>
  <div>
    <el-button type="primary"  v-on:click="openForm" v-show="!isCreating">
      <i class="el-icon-plus" style ="color:#3c58ad"></i>Add To do List
    </el-button>
    <div v-show="isCreating">
        <div>
            <el-card>
              <el-form label-position="left" label-width="150px">
            <el-form-item label="Title">
            <el-input v-model="titleText" type="text" ref="title" defaultValue=""></el-input>
            </el-form-item>
              </el-form>
              <el-form label-position="left" label-width="150px">
            <el-form-item label="Project">
            <el-input v-model="projectText" type="text" ref="project" defaultValue="" @keyup.enter.native="sendForm"></el-input>
              </el-form-item>
              </el-form>
          
            <el-button type="success" v-on:click="sendForm"  style="float:right; margin:5px">
              Create
            </el-button>
            <el-button type="warning" v-on:click="closeForm" style="float:right; margin:5px">
              Cancel
            </el-button>
            <br><br>
            </el-card>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  data () {
    return {
      titleText: '',
      projectText: '',
      isCreating: false
    }
  },
  methods: {
    openForm () {
      this.isCreating = true
    },
    closeForm () {
      this.isCreating = false
    },
    sendForm () {
      if (this.titleText.length > 0 && this.projectText.length > 0) {
        const title = this.titleText
        const project = this.projectText
        this.$emit('create-todo', {
          title,
          project,
          done: false
        })
        this.titleText = ''
        this.projectText = ''
        this.isCreating = false
        
      }
      else
  alert('Message empty!')
    }
  }
}
</script>
