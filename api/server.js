const  express=require("express")
const db=require("./module/db")
const hp =require("./module/hp")
const jwt =require("jwt-simple")
const app = express()
app.listen(80,function () {
    console.log("success")
})