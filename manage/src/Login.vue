<template>

   <div id="app">

      <h1 v-if="show">欢迎来到图书管理系统</h1>
      <span v-if="show" @click="show=!show">

         <router-link to="/login" >登录</router-link>
      </span>

      <router-view v-if="!show"></router-view>
   </div>


</template>

<script>
    export default {
        name: "login",
         data(){
           return{
              show:true
           }
         }

    }
</script>

<style scoped lang="less">
   #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
   }
   #nav {
      padding: 30px;
      a {
         font-weight: bold;
         color: #2c3e50;
         &.router-link-exact-active {
            color: #42b983;
         }
      }
   }
</style>