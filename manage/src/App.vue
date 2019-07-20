<template>
  <div id="app">
    <el-container>
      <el-header style="height: 20%;background: #F56C6C" >
        <h1 >图书管理下载中心</h1>
        <el-button @click="$store.commit('LOGOUT')" type="primary">退出</el-button></el-header>
      <el-main>Main<router-view v-if="show"></router-view></el-main>
      <el-footer>Footer</el-footer>
    </el-container>


  </div>
</template>
<script>
  export default {
    name: "app",
    data(){
      return{
        show:true
      }
    },
    mounted() {
      const str=window.location.href
      if (str.indexOf("login") || str.indexOf("logon")>0) {
        this.show=false
      }

    }

  }
</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
body,html{
  height: 100%;
}
.el-header, .el-footer {

  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 50px;
  height: 500px;
}



.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

</style>
