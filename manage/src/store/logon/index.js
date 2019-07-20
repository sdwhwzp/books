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
                vm.$message({
                    message: data.msg,
                    type: "warning"
                })
            }
            if (data.ok === 1) {
                vm.$message({
                    message: data.msg,
                    type: "success"
                })
            }
        })
    },
    logon({},vm){
        axiox.post("/book/logon",vm.ruleForm).then(({data})=>{
            if (data.ok===-2){
                vm.$message({
                    message: data.msg,
                    type: "warning"
                })
            }
            if (data.ok===-1){
                vm.$message({
                    message: data.msg,
                    type: "warning"
                })
            }
            if (data.ok === 1) {
                vm.$message({
                    message: data.msg,
                    type: "success"
                }).then(vm.$router.push('/'))
            }
        })
    },
    change({commit},vm){

        axiox.get("/book/userName",{
            params:{
                userName:vm.ruleForm.adminName
            }
        }).then(({data})=>{
            if (data.ok===-2){
                commit("CHANGE_NOSHOW",true)
                vm.$message({
                    message: data.msg,
                    type: "warning"
                })

            }
            if (data.ok===1){

                commit("CHANGE_SHOW",true)
                vm.$message({
                    message: data.msg,
                    type: "success"
                })

            }

        })

    }
}
export default {
    actions,
    state,
    mutations
}