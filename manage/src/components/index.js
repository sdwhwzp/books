import upload from '@/components/Pc'
const components={
    upload

}
export default {
    install(Vue) {
        for (let key in components){
            Vue.component(key,components[key])
        }
    }
}