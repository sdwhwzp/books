<template>
  <div id="app">
    <el-container>
      <el-header style="height: 20%;background: #F56C6C" >
        <h1 >图书管理下载中心</h1>
        <el-button @click="$store.commit('LOGOUT')" type="primary">退出</el-button></el-header>
      <el-main>Main

        <el-upload
                class="upload-demo"
                ref="upload"
                action="https://127.0.1/book/books/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>

        </el-upload>
      </el-main>
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
      const me=this
      if (str.indexOf("login") || str.indexOf("logon")>0) {
        this.show=false
      }
      setInterval(function () {
        me.$store.dispatch("again",me)

      },60000)
    },
    beforeCreate() {
      if (localStorage.token) {
        this.$store.dispatch("again",this)

      }else {
        this.$store.commit("LOGOUT")
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
