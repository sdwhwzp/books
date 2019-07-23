import axios from 'axios'
const state={
    tableData:[]
}
const  mutations={
    CHANGE_DATA(state,tableDate){
        state.tableData=tableDate
    }
}
const actions={
    upLoad({},vm){
       axios.post("/books",{
           token:vm.token,
           bookName:vm.value,
           booksType:vm.form.region
       }).then(data=>{
           console.log(data)
       })
    },
    getbookList({state,commit},pageIndex=1){
        axios.get('/bookslist',{
            params:{
                token:localStorage.token,
                pageIndex
            }
        }).then(data=>{
            console.log(data)
        })
    }
}
export default {
    actions
}