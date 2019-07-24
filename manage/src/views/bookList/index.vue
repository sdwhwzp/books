<template>
    <div>
        <el-table
                :data.sync="$store.state.pc.tableData"
                style="">
            <el-table-column
                    label="上传时间"
                    width="">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.addTime |date}}</span>
                </template>
            </el-table-column>

            <el-table-column
                    label="书名"
                    width="">
                <template slot-scope="scope">
                    {{scope.row.bookName}}
                </template>
            </el-table-column>
            <el-table-column
                    label="类别"
                    width="">
                <template slot-scope="scope">
                    {{scope.row.booksType}}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">删除</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="open(scope.$index, scope.row)">下载</el-button>
                </template>

            </el-table-column>

        </el-table>
        <el-pagination
                :current-page="$store.state.pc.pageIndex/1"
                @current-change="changePageIndex"
                layout="prev, pager, next"
                :page-count="$store.state.pc.pageSum/1">
        </el-pagination>
    </div>


</template>


<script>
    export default {
        name: "index",
        data(){
            return{

            }
        },
       methods: {
           changePageIndex(pageIndex){
               this.$store.dispatch("getbookList",pageIndex)
           },
           handleEdit(index,row) {
              this.$store.dispatch("deleteBook",row)
               this.$store.dispatch("getbookList")
           },
           handleDelete(index, row) {

               this.open(index,row)

               // this.$store.dispatch("download",row)



           },
           open(index,row) {

                   this.$prompt('请输入邮箱', '提示', {
                       confirmButtonText: '确定',
                       cancelButtonText: '取消',
                       inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                       inputErrorMessage: '邮箱格式不正确'
                   }).then(({ value }) => {

                       this.$message({
                           type: 'success',
                           message: "正在发送"
                       });
                       this.$store.dispatch("download",{row,value})

                   }).catch(() => {
                       this.$message({
                           type: 'info',
                           message: '取消输入'
                       });
                   });
               }
           }

    }
</script>

<style scoped>

</style>