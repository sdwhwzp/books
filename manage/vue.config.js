module.exports={
    devServer:{
        open:true,
        port:8080,
        host:"127.0.0.1",
        proxy:{
            "/book":{
                target:"http:127.0.0.1",
                changeOrigin: true,
                pathRewrite:{
                    "^/book":""
                }
            }
        }
    },

}