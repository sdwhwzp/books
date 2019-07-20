<template>
    <div>
        <el-form class="container" :model="ruleForm" :rules="rules" ref="ruleForm">
            <h3>注册</h3>
            <el-form-item prop="adminName">
                <el-input style="width: 90%"  ref="adminName" v-model="ruleForm.adminName" placeholder="请输入账号" >

                </el-input>

                <i v-if="this.$store.state.logon.show" style="color: aqua;font-size: 20px;margin-left: 4%" class="el-icon-success"></i>
                <i v-if="this.$store.state.logon.noshow" style="color: #F56C6C;font-size: 20px;margin-left: 4%" class="el-icon-error"></i>

            </el-form-item>
            <el-form-item prop="phoneId" ref="phoneId">
                <el-input style="width: 70%" v-model="ruleForm.phoneId" placeholder="请输入手机号"></el-input>
                <el-button :loading="loading" size="mini" style="width: 25%;margin-left: 4%" type="primary" @click="getCode">获取验证码</el-button>
            </el-form-item>
            <el-form-item prop="passWord">
                <el-input placeholder="请输入密码" type="passWord" v-model="ruleForm.passWord" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="checkpassWord">
                <el-input placeholder="请再次输入密码" type="passWord" v-model="ruleForm.checkpassWord" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item prop="code">
                <el-input placeholder="请输入验证码" type="input" v-model="ruleForm.code" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 48%;margin-left: 1%;" :loading="$store.state.isloading" @click="$router.push('/')">返回登录</el-button>
                <el-button type="primary" style="width: 48%" :loading="$store.state.isloading" @click="logon">注册</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
    export default {
        name: "logon",
        data(){
            var valiadminName = (rule, value, callback) => {

                this.$store.commit("CHANGE_SHOW",false)
                this.$store.commit("CHANGE_NOSHOW",false)

                this.$store.dispatch("change",this)





                callback();
            };
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.ruleForm.checkpassWord !== '') {
                        this.$refs.ruleForm.validateField('checkpassWord');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.ruleForm.passWord) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm:{
                    adminName:'',
                    passWord:'',
                    phoneId:"",
                    checkpassWord:"",
                    code:""

                },
                loading:false,
                isloading:false,

                rules:{
                    adminName:[
                        { required: true, message: '请输入您的账号', trigger: 'blur' },
                        { min: 3, max: 100, message: '长度最少为3字符', trigger: 'blur' },
                        {validator: valiadminName,trigger: 'blur'}
                    ],
                    passWord:[
                        { required: true, message: '请输入您的密码', trigger: 'blur' },
                        { min: 3, max: 100, message: '长度最少为3字符', trigger: 'blur' },
                        {validator: validatePass,trigger: 'blur'}
                    ],
                    checkpassWord:[
                        { required: true, message: '请输入您的密码', trigger: 'blur' },
                        { min: 3, max: 100, message: '长度最少为3字符', trigger: 'blur' },
                        {validator: validatePass2,trigger: 'blur'}
                    ],
                    code:[
                        { required: true, message: '请输入您的验证码', trigger: 'blur' },
                        { min: 6, max: 6, message: '请输入6位数字', trigger: 'blur' },
                    ],
                    phoneId:[
                        { required: true, message: '请输入您的手机号', trigger: 'blur' },
                        { min: 11, max: 11, message: '请输入正确的手机号', trigger: 'blur' }
                    ]
                }
            }
        },
        methods:{
            getCode(){

                if (this.$refs.phoneId.validateState==="success") {
                    this.loading=true
                    let _me =this
                    let index=60
                    let timer=setInterval(function () {
                        --index
                        if (index < 1) {
                            clearInterval(_me.timer)
                            _me.loading=false
                        }
                    },1000)
                    this.$store.dispatch("sendCode",this)
                }

            },
            logon(){

                this.$refs.ruleForm.validate((isVali)=>{

                    if (isVali) {

                        this.$store.dispatch("logon",this)
                    }


                })


            },

        },
        mounted() {
            this.$store.commit("CHANGE_SHOW",false)
            this.$store.commit("CHANGE_NOSHOW",false)
        }
    }
</script>

<style scoped lang="less">
    .container{
        width: 350px;
        margin:  auto;
        border: 1px solid #eaeaea;
        padding: 10px 30px;
    h3{
        text-align: center;
    }
    }
</style>