import axios from "axios"
const state={
  token:""
}
const mutations={
    CHANGE_TOKEN(state,token){
        state.token=localStorage.token
    }
}
const actions={
    login({commit},vm){
        console.log(vm.ruleFrom)
        axios.get("/book/login",vm.ruleFrom).then(({data})=>{
            console.log(data)
        })
    }
}
export default {
    state,
    mutations,
    actions
}