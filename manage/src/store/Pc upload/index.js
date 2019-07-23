import axios from 'axios'
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
        console.log(vm)
       axios.post("/books",{
           token:vm.token,
           bookName:vm.value,
           booksType:vm.form.region,
           book:vm.num
       }).then(data=>{
           console.log(data)

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
                console.log(data)
        })
    },
    download({commit},row){
        axios.get("/down",{
            params:{
                row
            }
        }).then(function(response) {
            console.log(response)
            var downloadElement = document.createElement('a');
            var href = response; //创建下载的链接
            downloadElement.href = "../api"+href;
            downloadElement.download = row.bookName; //下载后文件名
            document.body.appendChild(downloadElement);
            downloadElement.click(); //点击下载
            document.body.removeChild(downloadElement); //下载完成移除元素
            window.URL.revokeObjectURL(href); //释放掉blob对象


        })
            .catch(function(error) {
                console.log(error);
            });

    }
}
export default {
    actions,
    mutations,state
}