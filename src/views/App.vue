<template>
<div>
 <Header></Header>
  <el-container>
     <Sidebar></Sidebar>
      <el-main>
        <transition name="fade">
        </transition>
        <router-view/>
      </el-main>
    </el-container>
</div>

</template>
<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar
  }
}
</script>

<style>
/* @import '@/assets/css/style.css'; */
body {
  margin: 0px;
  font-family: "Helvetica Neue","Helvetica","PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
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
.el-aside::-webkit-scrollbar {
  display: none;
}
i.el-submenu__icon-arrow.el-icon-arrow-down {
  color: white;
}
.el-menu--horizontal>.el-menu-item, .el-submenu__title i {
  color: white;
}
.el-menu--horizontal>.el-submenu .el-submenu__title:hover {
  background-color:#535658 !important;
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
  color: white;
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
.logo-container {
  width: 100%;
  margin: 0;
}
.logo {
  width: 100%;
  height: 215px;
}

.el-submenu__title:hover {
  background-color: #535658 !important;
}
.el-menu-item:hover {
  outline: 0;
  background-color: #535658;
}
.el-menu-item:focus {
  outline: 0;
  background-color: #2c2c2c;
}
li.el-menu-item {
  background: #2c2c2c;
}
.el-header.colorPrimary:hover {
  color: #fff;
  border-color: #fe0002;
  background-color: #fe0002;
}
.fade-enter-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
