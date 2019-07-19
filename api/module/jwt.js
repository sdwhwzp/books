const  jwt =require("jwt-simple")
const key="@#$@#%$@#$@#$@#"
module.exports={
    encode(adminName,exp=60*10*1000) {
        return jwt.encode({
            adminName,
            exp:Date.now()+exp
        },key)

    },
    decode(token){
        try{
            const info=jwt.decode(token,key)

            if (info.exp > Date.now()) {
                console.log(1111)
                return {
                    ok:1,
                    msg:"成功",
                    info
                }
            }else {
                return {
                    ok:-1,
                    msg:"过期"
                }
            }
        }
        catch{
            return ({
                ok:1,
                msg:"解析失败"
            })
        }
    }
}