<template>
    <el-form class="container" :model="ruleFrom" :rules="rules" ref="adminForm">
        <h3>图书管理系统</h3>
        <el-form-item prop="adminName">
            <el-input v-model="ruleFrom.adminName" placeholder="请输入账号">

            </el-input>
        </el-form-item>
        <el-form-item prop="passWord">
            <el-input placeholder="请输入密码" type="passWord" v-model="ruleFrom.passWord"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" style="width: 48%;margin-left: 1%;" :loading="$store.state.isloading" @click="submitForm">登录</el-button>
            <el-button type="primary" style="width: 48%" :loading="$store.state.isloading" @click="submitForm">注册</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "login",
        data(){
            return {
                ruleFrom:{
                    adminName:'',
                    passWord:''
                },
                isloading:false,
                rules:{
                    adminName:[
                        { required: true, message: '请输入您的账号', trigger: 'blur' },
                        { min: 3, max: 100, message: '长度最少为3字符', trigger: 'blur' }
                    ],
                    passWord:[
                        { required: true, message: '请输入您的密码', trigger: 'blur' },
                        { min: 3, max: 100, message: '长度最少为3字符', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            submitForm(){
                this.$refs.adminForm.validate((isVali)=>{

                    console.log(isVali)
                    if (isVali) {
                        console.log(this)
                        this.$store.dispatch("login",this)
                    }

                })
            }
        }
    }
</script>

<style scoped lang="less">
    .container{
        width: 350px;
        margin: 250px auto;
        border: 1px solid #eaeaea;
        padding: 10px 30px;
        h3{
            text-align: center;
        }
    }
</style>