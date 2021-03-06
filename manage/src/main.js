import Vue from 'vue'
import App from './App.vue'
import Login from "./Login.vue"
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import axios from "axios"
import components from './components'
import filters from './filters'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(components)
Vue.use(filters)
Vue.prototype.$axios=axios

router.beforeEach((to,from,next)=>{
  if (to.meta.isAuthorization){

    if (sessionStorage.token) {
      store.dispatch("again")

    }else{
      store.commit("OUT_LOGIN")
    }
  } else{
    next()
  }

})

axios.interceptors.request.use(config=>{

  config.url="/book"+config.url


  return config
})
axios.interceptors.response.use(({data})=>{

  return data
})
new Vue({
  router,
  store,
  render: function (h) { return h(store.state.login.token?App:Login) }
}).$mount('#app')
