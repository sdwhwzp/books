<template>
    <el-upload

            name="book"
            enctype="multipart/form-data"
            class="upload-demo"
            ref="upload"
            action="/book/upload"
            :file-list="fileList"
            :on-success="handleSuccess"
            :auto-upload="true">
        <el-button slot="trigger" size="small" type="primary" ref="file">选取文件</el-button>
    </el-upload>
</template>

<script>
    export default {
        name: "upload",
        props:["value","fileList","num"],
        data(){
            return {

            }
        },
        methods: {
            submitUpload() {
                this.$refs.upload.submit()

            },
            handleSuccess(response) {

                if (response.ok === 1) {
                    this.$message({
                        showClose: true,
                        message: response.msg,
                        type: 'success'
                    });
                    this.$emit("update:value",response.filename)
                    this.$emit("update:num",response.book)
                } else {
                    this.$message({
                        showClose: true,
                        message: response.msg,
                        type: 'warning'
                    });

                }
            }
        },
    }
</script>

<style scoped>

</style>