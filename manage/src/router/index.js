import Vue from 'vue'
import Router from 'vue-router'
import logon from '../views/logon'
import login from '../views/login'
import booklist from '../views/bookList'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/login",
      name:"login",
      component:login,

    },
    {
      path:"/logon",
      name:"logon",
      component:logon,

    },
    {
      path:"/userlist",
      name:"userlist",
      component:booklist,

    },
  ]
})
