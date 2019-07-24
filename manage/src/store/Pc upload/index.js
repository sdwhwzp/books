import axios from 'axios'
import { Message } from 'element-ui';
const state={
      pageIndex:"",
      pageSum:"",
    tableData:[]
}
const  mutations={
    CHANGE_DATA(state,tableDate){
        state.tableData=tableDate

    },
    CHANGE_PAGE(state,{pageIndex,pageSum}){
        state.pageIndex=pageIndex,
        state.pageSum=pageSum

    }
}
const actions={
    upLoad({},vm){

       axios.post("/books",{
           token:vm.token,
           bookName:vm.value,
           booksType:vm.form.region,
           book:vm.num
       }).then(data=>{


       })
    },
    getbookList({state,commit},pageIndex=1){
        axios.get('/bookslist',{
            params:{
                token:sessionStorage.token,
                pageIndex
            }
        }).then(data=>{
            if (data.ok===1) {
                commit("CHANGE_DATA",data.bookInfo)
                commit("CHANGE_PAGE",{pageIndex:data.pageIndex,pageSum:data.pageSum})
            }

        })
    },
    deleteBook({commit},row){

        axios.delete("/delete",{params:{
            row
            }}).then(data=>{

        })
    },
    download({commit},{row,value}){

        axios.get("/down",{
            params:{
                row,
                value
            }
        }).then(data=>{

            if (data.result.ok === 1) {
                Message.success(data.result.msg)
            }
            if (data.result.ok === -1) {
                Message.warning(data.result.msg)
            }
        })

    }
}
export default {
    actions,
    mutations,state
}