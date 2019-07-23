<template>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                label="上传时间"
                width="180">
            <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
        </el-table-column>
        <el-table-column
                label="书名"
                width="180">
            <template slot-scope="scope">

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
                        @click="handleDelete(scope.$index, scope.row)">下载</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>


<script>
    export default {
        name: "index",
        data(){
            return{
                tableData:[
                ]
            }
        },
        mounted() {
           this.$store.dispatch("getbookList")
        }
    }
</script>

<style scoped>

</style>