<template>
  <div>
      <el-aside width="250px" height="100%" style="background-color: #da4453">
            <el-menu
                style="background-color: #130f2e"
                text-color="#fff"
                :router="true"
            >
            <br>
            <!-- <h3 style="text-align: center;color: white">BELLA</h3><br> -->
            <img class="logo" src="../../src/assets/bella1.png" style="width:200px; height:100px"/>
                <el-menu-item index="/"><i class="el-icon-menu"></i>&nbsp; Dashboard</el-menu-item>
                <el-submenu index="/">
                  <template slot="title"><i class="el-icon-user"></i>&nbsp;My Activity </template>
                    <el-menu-item index="/add-info"><i class="el-icon-plus"></i>&nbsp; Add Info</el-menu-item>
                    <el-menu-item index="/add-todolist"><i class="el-icon-plus"></i>&nbsp; Add TodoList</el-menu-item>
                    <el-menu-item index="/sample"><i class="el-icon-plus"></i>&nbsp; Sample API</el-menu-item>
                    <el-menu-item index="/weather"><i class="el-icon-plus"></i>&nbsp; Weather API</el-menu-item>
                </el-submenu>
            </el-menu> 
        </el-aside>
  </div>
</template>
<script>
export default {
  methods: {

  }
}
</script>

<style scoped>
@import '../assets/css/style.css';
body {
  margin: 0px;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.el-submenu__title:hover {
    background-color: #282727 !important;
}
.box-card {
  width: 100%;
}
ul.el-menu {
  height: 100%;
}
.el-header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  color: white;
  line-height: 60px;
  padding: 0;
  text-align: right;
  font-size: 12px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.07), 0px 4px 5px 0px rgba(0, 0, 0, 0), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}
.el-aside {
  color: #333;
  position: fixed;
  height: 100%;
  z-index: 1000;
}
i.el-submenu__icon-arrow.el-icon-arrow-down {
  color: white;
}
.el-menu--horizontal>.el-menu-item, .el-submenu__title i {
  color: white;
}
.el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  background-color: #14222c !important;
  color: #f1eeee;
}
.el-menu--horizontal>.el-submenu .el-submenu__title {
  color: white;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover {
  background: none;
  color: #f1eeee;
}
.el-menu--horizontal>.el-menu-item.is-active {
  border-bottom: none;
  color: white;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus {
  background: none;
  color: #14222c;
}
.el-menu--horizontal>.el-submenu:focus .el-submenu__title {
  color: white;
}
.el-menu-item i {
  color: white;
  margin-left: 5px;
  font-size: 18px;
}
.el-submenu__title i {
  margin-left: 5px;
  font-size: 18px;
}
main.el-main {
  margin-left: 18.5%;
  margin-top: 4.5%;
}
.logo {
  width: 90%;
  height: 66px;
}
.logo-container {
  margin: 0px 0px 0px 0px;
}
.el-submenu__title:hover {
  background-color: #74b0e0 !important;
}
.el-menu-item:hover {
  outline: 0;
  background-color: #282727 !important;
}
.el-menu-item:focus {
  outline: 0;
  background-color: #c2deee;
}
li.el-menu-item {
  background: #130f2e;
}
.el-header.colorPrimary:hover {
  color: #fff;
  border-color: #fe0002;
  background-color: #fe0002;
}
</style>
