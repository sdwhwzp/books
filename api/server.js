const  express=require("express")
const db=require("./module/db")
const hp =require("./module/hp")
const jwt =require("jwt-simple")
const app = express()
app.get("/login",function (req, res) {
    console.log(req)
    res.json({
        ok:1,
        msg:"登录成功"
    })
})
app.listen(80,function () {
    console.log("success")
})