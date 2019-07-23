import Vue from 'vue'
import Vuex from 'vuex'
import login from "./login"
import logon from './logon'
import pc from './Pc upload'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    again({login},vm){
      axios.post("/token",{token:sessionStorage.token}).then(data=>{
        if (data.ok === -1){
          vm.$store.commit("LOGOUT")
          vm.$message({
            message: data.msg,
            type: 'warning'
          });
        }

      })
    }
  },
  modules:{
    login,
    logon,
    pc
  }
})
