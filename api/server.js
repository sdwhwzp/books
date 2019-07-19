const  express=require("express")
const db=require("./module/db")
const hp =require("./module/hp")
const jwt =require("./module/jwt")
const bodyParser=require("body-parser")
const app = express()
app.use(bodyParser.json())
app.post("/login",function (req, res) {

    const {adminName,passWord}=req.body

    db.findOne("admin",
        {
            userName:adminName,
            password:hp.md5(passWord)
    },function (err, adminInfo) {
              res.json({
            token:jwt.encode(adminName),
            ok:1,
            msg:"登录成功"
        })
    })

})
app.listen(80,function () {
    console.log("success")
})