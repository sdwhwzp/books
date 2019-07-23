const filters =  {
    currency(v,n=2){// currency 过滤器的名字
        // 第一个参数是你要过滤的值.其它参数是使用该过滤器时额外传递的参数。
        console.log(v,n);
        return "$"+v.toFixed(n);// 返回的内容，即是你过滤以后的结果
    },
    date(v){
        if (v) {
            let time = new Date(v);
            return time.getFullYear()+"-"
                +(time.getMonth()+1).toString().padStart(2,"0")+"-"
                + (time.getDate()).toString().padStart(2,"0")+" "
                + (time.getHours()).toString().padStart(2,"0") + ":"
                + (time.getMinutes()).toString().padStart(2,"0") + ":"
                + (time.getSeconds()).toString().padStart(2,"0");
        }else{
            return "无";
        }

    },
    imgUrl(v){
        return "/ele/"+v;
    }
}
export default {
    install(Vue){
        for(let key in filters){
            Vue.filter(key,filters[key]);
        }
    }
}