<template>
  <div id="login">
    <div class="login-content">
      <el-tabs type="border-card">
        <el-tab-pane label="登录">
          <el-input placeholder="请输入用户名" v-model="username" maxlength="10">
            <i slot="suffix" class="el-input__icon el-icon-edit-outline"></i>
          </el-input>
          <el-input :type="this.show.password"
                    placeholder="请输入密码" v-model="password" maxlength="10">
            <i @click="isShow" slot="suffix" class="el-input__icon" :class="this.show.icon ? 'el-icon-more' : 'el-icon-view'"></i>
          </el-input>
          <el-button @click="getData" type="primary" round :disabled="!username || !password">登录</el-button>
          <el-button type="text" disabled>忘记密码</el-button>
        </el-tab-pane>
        <el-tab-pane label="注册">
          <el-input placeholder="请输入用户名" v-model="username" maxlength="10">
            <i slot="suffix" class="el-input__icon el-icon-edit-outline"></i>
          </el-input>
          <el-input :type="this.show.password" placeholder="请输入密码" v-model="password" maxlength="10">
            <i @click="isShow" slot="suffix" class="el-input__icon  " :class="this.show.icon ? 'el-icon-more' : 'el-icon-view'"></i>
          </el-input>
          <el-button type="primary" round :disabled="!username || !password">注册</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data () {
      return {
        username: '',
        password: '',
        show: {
          password: 'password',
          icon: true
        }
      }
    },
    methods: {
      isShow () {
        this.show.password = this.show.password === 'password' ? 'text' : 'password'
        this.show.icon = this.show.icon === true ? false : true
       },
      getData () {
        this.$axios.post('https://easy-mock.com/mock/5c22e7c2bbcbaf5f89bcae00/carManagement/cat/user',
            {
              username: this.username,
              password: this.password
            })
            .then(res => {
              console.log(res)
              if (+res.data.status === 1) {
                this.$router.push('/index')
              }
            })
            .catch(res => {
              console.log(res)
            })
      }
    },
    computed: {
      isLogin () {
        return !!this.username && !this.password
      }
    }
  }
</script>

<style lang="scss" scoped>
  #login {
    width: 100%;
    height: 100%;
    background: url('./../assets/img/snow-2.jpg');
    background-size: cover;
    .login-content {
      position: relative;
      top: 30%;
      left: 50%;
      width: 400px;
      transform: translateX(-50%);
      .el-input {
        margin: 20px 0;
      }
      button {
        width: 150px;
        margin-top: 20px;
      }
    }
  }
</style>