import axiox from 'axios'
const state={

}
const mutations={

}
const actions={
    sendCode({},vm) {

        axiox.get("/book/phoneId",{
            params:{
                phoneId:vm.ruleForm.phoneId
            }
        }).then(({data})=>{
            console.log(data.msg)
        })
    },
    logon({},vm){
        axiox.post("/book/logon",vm.ruleForm).then(({data})=>{
            console.log(data.msg)
        })
    }
}

export default {
    actions
}