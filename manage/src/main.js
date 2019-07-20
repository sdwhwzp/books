import Vue from 'vue'
import App from './App.vue'
import Login from "./Login.vue"
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import components from './components'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(components)

new Vue({
  router,
  store,
  render: function (h) { return h(store.state.login.token?App:Login) }
}).$mount('#app')
