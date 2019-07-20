import axios from "axios"
const state={
  token:localStorage.token
}
const mutations={
    CHANGE_TOKEN(state,token){
        state.token=localStorage.token=token
    },
    LOGOUT(state){
        localStorage.removeItem("token")
        state.token=localStorage.token

    }
}
const actions={
    login({commit},vm){
        axios.post("/book/login",vm.ruleFrom)
            .then(({data})=>{
            console.log(data)
                commit("CHANGE_TOKEN",data.token)
        })
    }
}
export default {
    state,
    mutations,
    actions
}