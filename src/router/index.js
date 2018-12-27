import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Login from './../view/login'
import Index from './../view/index'
import axios from 'axios'

Vue.use(Router)
Vue.use(ElementUI)
Vue.prototype.$axios = axios

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
