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
          <el-col :span="8"><div class="grid-content">
            <el-dropdown trigger="click">
               <span class="el-dropdown-link">下拉菜单
                 <i class="el-icon-arrow-down el-icon--right"></i></span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>鸭头</el-dropdown-item>
                <el-dropdown-item>鸭掌</el-dropdown-item>
                <el-dropdown-item>鸭脖</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div></el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="300px"></el-aside>
        <slot></slot>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss" scoped>
  .lateral {
    width: 100%;
    height: 100%;
  }
  .el-header {
    padding: 0;
    background-color: #fff;
    text-align: center;
    line-height: 80px;
  }

  .el-aside {
    height: 100%;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-container {
    height: 100%;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 80px;
  }
  .row-bg {
    background-color: #f9fafc;
  }
  .logo-content {
    background-color: #fff;
  }
  .el-col {
    .el-icon-success {
      color: palevioletred;
    }
    span {
      color: palevioletred;
      font-weight: bold;
      font-size: 20px;
    }
  }
</style>