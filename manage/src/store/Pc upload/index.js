import axios from 'axios'
const state={

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
    }
}
export default {
    actions
}