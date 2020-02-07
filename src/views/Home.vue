<template>
  <div class="home">
    <el-card>
      <div slot="header" class="clearfix">
        <span><i class="el-icon-menu">&nbsp;</i><b>DASHBOARD</b></span>
      </div><br>
      <el-row :gutter="24">
        <el-col :span="8">
          <el-card class="tile-indigo">
            <div slot="header" class="clearfix" id="expense">
            <span class="title">Personal Information</span>
            </div><b class="view"><a href="#">VIEW DETAILS</a><i class="el-icon-arrow-right"></i></b>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="tile-purple">
            <div slot="header" class="clearfix">
            <span class="title">TodoList</span>
            </div><b class="view"><a href="#">VIEW DETAILS</a><i class="el-icon-arrow-right"></i></b>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="tile-green">
            <div slot="header" class="clearfix">
            <span class="title">Sample</span>
            </div><b class="view"><a href="#">VIEW DETAILS</a><i class="el-icon-arrow-right"></i></b>
          </el-card>
        </el-col>
      </el-row>
    </el-card><br><br>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      dateTime: '',
      patient_count: '',
      child_count: '',
      date: Date.now()
    }
  },
  created () {
  },
  methods: {
  
    
  }
}
</script>
<style>
.tile-icon {
  color: white;
  margin-top: 10px;
  font-size: 40px;
}
.label {
  color: white;
  font-size: 15px;
}
.value {
  color: white;
  font-size: 20px;
}
.el-button--text {
  color: white !important;
  font-size: 12px !important;
  padding-top: 0px !important;

}
.title {
  font-size: 12px;
  text-transform: uppercase;
  text-align: center!important;
  display: block;
  color: #fff;
}
.view {
  font-size: 13px;
  margin-left: 95px;
  color: #fff;
}
a {
  color: #fff;
  text-decoration-line: none;
}
</style>
