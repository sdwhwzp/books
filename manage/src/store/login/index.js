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
    getLogin({commit},vm){
        axios.post("/book/")
    }
}
export default {
    state,
    mutations
}