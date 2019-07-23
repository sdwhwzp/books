<template>
    <div id="app">
        <el-container>
            <el-header style="height: 20%;background: #F56C6C">
                <h1>图书管理下载中心</h1>
                <el-button @click="$store.commit('LOGOUT')" type="primary">退出</el-button>
            </el-header>
            <el-main id="upload" style="height:5%;">
                <el-button ref="book" type="text" style="font-size: 30px" @click="dialogFormVisible = true">上传图书</el-button>
                <el-dialog title="只允许上传一本图书" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="图书类型">
                            <el-select v-model="form.region" placeholder="请选择图书类型">
                                <el-option label="武侠" value="武侠"></el-option>
                                <el-option label="玄幻" value="玄幻"></el-option>
                                <el-option label="言情" value="言情"></el-option>
                                <el-option label="历史" value="历史"></el-option>
                                <el-option label="魔法" value="魔法"></el-option>
                                <el-option label="军事" value="军事"></el-option>
                                <el-option label="古典" value="古典"></el-option>
                                <el-option label="其他" value="其他"></el-option>
                            </el-select>
                            <upload :fileList.sync="fileList" :num.sync="num" :value.sync="value"></upload>

                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="resetFields">取 消</el-button>
                        <el-button type="primary" @click="upload">确 定</el-button>
                    </div>
                </el-dialog>
            </el-main>
            <el-main>
                <h3>图书列表</h3>


                <router-link to="/userlist" >请点击我</router-link>
                <router-view v-if="show"></router-view>

            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>
<script>
  export default {
    name: "app",
    data() {
      return {
        show:true,
          token:sessionStorage.token,
          dialogFormVisible:false,
          form:{
              region:"",
          },
          value:"",
          fileList:[],
          num:''

      }
    },
    methods:{
         upload(){
            this.$store.dispatch('upLoad',this)
            this.resetFields()
            this.$store.dispatch("getbookList")
        },
        resetFields(){
            this.fileList=[]
            this.form.region=""
            this.dialogFormVisible=false
        }
    },
    mounted() {
      const str = window.location.href
        console.log(str)
      const me = this
        this.$store.dispatch("getbookList")
      if (str.indexOf("login")>0 || str.indexOf("logon") > 0) {

        this.show = false
      }else {
          this.show=true
      }
      setInterval(function () {
        me.$store.dispatch("again", me)

      }, 60000)
    },
    beforeCreate() {
      if (sessionStorage.token) {
        this.$store.dispatch("again", this)

      } else {
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
  @media screen and (min-width: 1120px) {
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

  }
  @media screen and (min-width: 769px) and (max-width: 1119px){
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

  }
  @media screen and (max-width:768px){
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
      #upload{
          display: none;
      }
  }

</style>
