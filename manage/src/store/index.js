import Vue from 'vue'
import Vuex from 'vuex'
import login from "./login"
import logon from './logon'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    again({login},vm){


      axios.post("/token",{token:localStorage.token}).then(data=>{

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
    logon
  }
})
