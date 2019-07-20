import axiox from 'axios'
const state={

    show:false,
    noshow:false
}
const mutations={
    CHANGE_SHOW(state,show){
        state.show=show
    },
    CHANGE_NOSHOW(state,noshow){
        state.noshow=noshow
    },
}
const actions={
    sendCode({},vm) {

        axiox.get("/book/phoneId",{
            params:{
                phoneId:vm.ruleForm.phoneId
            }
        }).then(({data})=>{
            if (data.ok===-2){
                alert(data.msg)
            }

        })
    },
    logon({},vm){
        console.log(11111111)
        axiox.post("/book/logon",vm.ruleForm).then(({data})=>{
            if (data.ok===-2){
                alert(data.msg)
            }
            console.log(data.msg)
        })
    },
    change({commit},userName){

        axiox.get("/book/userName",{
            params:{
                userName
            }
        }).then(({data})=>{
            if (data.ok===-2){
                commit("CHANGE_NOSHOW",true)
                alert(data.msg)
            }

            if (data.ok===1){
                commit("CHANGE_SHOW",true)
                alert(data.msg)
            }
        })
    }
}

export default {
    actions,
    state,
    mutations
}