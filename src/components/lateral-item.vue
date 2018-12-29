<template>
  <div class="lateral">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="6"><div class="grid-content logo-content">
            <i class="el-icon-success"></i>
            <span>CatManagement</span>
          </div></el-col>
          <el-col :span="10"><div class="grid-content"></div></el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-dropdown trigger="click">
               <span class="el-dropdown-link">
                 <img src="./../assets/img/head-e.jpg" alt="">
                 <i class="el-icon-arrow-down el-icon--right"></i>
               </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>鸭头</el-dropdown-item>
                  <el-dropdown-item>鸭掌</el-dropdown-item>
                  <el-dropdown-item>鸭脖</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <i class="head-icon el-icon-message"></i>
              <i class="head-icon el-icon-star-off"></i>
              <i class="head-icon el-icon-menu"></i>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="20%">
          <el-menu
            :default-active="$route.path"
            :router="true"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#fff"
            text-color="#FFB6C1"
            active-text-color="#DB7093">
            <el-menu-item index="/index" :route="{ path: '/index' }">
              <span>Welcome</span>
            </el-menu-item>
            <el-submenu index="/blog">
              <template slot="title">
                <span slot="title">BlogManagement</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/blog/bbblog" :route="{name: 'BbBlog'}">BB's Blog</el-menu-item>
                <el-menu-item index="/blog/wyblog" :route="{name: 'WyBlog'}">Wy's Blog</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="3">
              <span slot="title">ForHuacai</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">ForMaodou</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <slot></slot>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./../assets/css/lateral";
</style>
