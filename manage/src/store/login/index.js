import axios from "axios"
const state={
  token:sessionStorage.token
}
const mutations={
    CHANGE_TOKEN(state,token){
        state.token=sessionStorage.token=token
    },
    LOGOUT(state){
        sessionStorage.removeItem("token")
        state.token=sessionStorage.token

    }
}
const actions={
    login({commit},vm){
        axios.post("/login",vm.ruleFrom)
            .then(data=>{
            console.log(data)
                if (data.ok === 1) {
                    commit("CHANGE_TOKEN",data.token)
                    vm.$router.push('/')
                    vm.$message({
                        message: data.msg,
                        type: "success"
                    })
                }
                else {
                    vm.$message({
                        message: data.msg,
                        type: "warning"
                    })
                }

        })
    }
}
export default {
    state,
    mutations,
    actions
}