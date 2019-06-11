<template>
  <div class="wrapper ">
    <div class="contain">
    <div class="text-left">
        <h1 class="animated zoomIn">民盛小贷供应链</h1>
            <h2 class="animated zoomIn">金融服务平台</h2>
            <span class="ti animated zoomIn"></span>
        <span class="animated zoomIn">Minsheng Credit Supply ChainFinancial Service Platform</span>
    </div>

    <div class="inner-right">

      <!-- 登录框 -->
        <div class="do-login animated bounceIn">
            <h2>账号登录</h2>

            <el-form ref="loginform" :model="this.loginform" status-icon :rules="rules" label-width="55px" class="demo-ruleForm">
              <div class="login-content">
                <el-form-item label="账号" prop="username" :rules="rules.username">
                <el-input class="ell" placeholder="请输入手机号" v-model.trim="loginform.username">
                  <template slot="prepend">
                    <i class="el-icon-edit"></i>
                  </template>
                </el-input>
                </el-form-item>
              </div>

              <div class="login-content">
                <el-form-item label="密码" prop="password">
                <el-input class="ell" type="password" show-password placeholder="请输入密码" v-model.trim="loginform.password">
                  <template slot="prepend">
                    <i class="el-icon-view"></i>
                  </template>
                </el-input>
                </el-form-item>
              </div>
              <div class="button-content">
                <el-button type="primary" plain size="medium" @click="login('loginform')" >登录</el-button>
              </div>
            </el-form>

            <div class="button-content">
              <el-button type="warning" plain @click="toregist()" >未有账号？立即注册</el-button>
            </div>

            

        </div>

        <!-- 注册框 -->
        <div class="do-regist  animated bounceIn" style="display: none;">
            <h2>账号注册</h2>

            <el-form ref="registform" :rules="rules" :model="this.registform" status-icon label-width="80px" class="demo-ruleForm">
              <div class="login-content">
                <el-form-item label="账号" prop="username" :rules="rules.username">
                <el-input class="ell" placeholder="请填写手机号" v-model.trim="registform.username">
                  <template slot="prepend">
                    <i class="el-icon-edit"></i>
                  </template>
                </el-input>
                </el-form-item>
              </div>

              <div class="login-content">
                <el-form-item label="密码" prop="password" :rules="rules.password">
                <el-input class="ell" type="password" show-password placeholder="请填写注册密码" v-model.trim="registform.password">
                  <template slot="prepend">
                    <i class="el-icon-view"></i>
                  </template>
                </el-input>
                </el-form-item>
              </div>

              <div class="login-content">
                <el-form-item label="确认密码" prop="realpassword" :rules="rules.realpassword">
                <el-input class="ell" type="password" show-password placeholder="请再次填写注册密码" v-model.trim="registform.realpassword">
                  <template slot="prepend">
                    <i class="el-icon-view"></i>
                  </template>
                </el-input>
                </el-form-item>
              </div>

              <div class="checkbox">
                    <el-checkbox prop="agreementStatus" :rules="rules.agreementStatus" v-model="registform.agreementStatus">已同意并愿意接受 
                      <router-link to="/agreement">
                      《民盛小贷企业用户服务协议》
                      </router-link> 
                    </el-checkbox>   
                                
              </div>

              <div class="button-content">
                <el-button type="primary" plain size="medium"  @click="regist('registform')" >注册</el-button>
              </div>

              <div class="button-content">
                <el-button type="primary"  plain size="medium"  @click="tologin()" >已有账号？立即登录</el-button>
              </div>
            </el-form>
        </div>
    </div>

    </div>
  </div>
</template>
<script>
import Router from "vue-router";
//引入jquery插件
import $ from 'jquery'
export default {
  data() {
    // 确认密码校验
    var validatePass2 = (rule, value, callback) => {
        if (value !== this.registform.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
          // 登录表单
          loginform: {
              username: '',
              password: ""
          },
          // 注册表单
          registform:{
              username: "",  //账号
              password: "",  //密码
              realpassword:"",  //确认密码
              agreementStatus:false//是否勾选注册协议
          },

          //输入框验证
          rules: {
              username: [
                { required: true, message: '账号不能为空。', trigger: 'blur'},
                { max: 11, message: '长度 11 个字符。', trigger: 'blur' },
                { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码。', trigger: 'blur'},
              ],
              password:[
                { required: true, message: '密码不能为空。', trigger: 'blur' },
                // { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
              ],
              realpassword: [
                  { required: true, message: '不能为空。', trigger: 'blur' },
                  { validator: validatePass2, trigger: 'blur' }
                ],
              agreementStatus: [
                  { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
                ],
          }
    }
  },
  mounted() {

  },
  methods: {
    //注册
    regist(formName){
      if(this.registform.agreementStatus == false){
        this.$alert('确认是否勾选了查看协议！', '提醒', {
                    confirmButtonText: '确定',
                    callback: action => {
                    
                    }
                    });
      }
       this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios({
                method: 'post',
                url: this.$store.state.domain +"/biz/user/register",
                data: this.registform,
              })
              .then(
                response => {
                  if(response.data.code==0){
                    //注册成功
                    this.$message({
                        message: '恭喜你'+response.data.msg+'，欢迎进入登录。',
                        type: 'success'
                      });
                    //切换登录窗口
                    this.tologin();

                  }else{
                    this.$message.error(response.data.msg);
                  }
                }
              )
              .catch(function (error) {
                  console.log(error);
              });
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      
    },
    //登录
    login(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
                this.$axios({
                    method: 'post',
                    url: this.$store.state.domain +"/biz/user/login",
                    data: this.loginform,
                  })
                  .then(
                    response => {
                      if(response.data.code==0){
                        
                        //开户状态、用户名、企业编号
                        var accountStatus = response.data.detail.accountStatus;
                        var username = response.data.detail.username;

                        //未开户时不返回
                        if(response.data.detail.enterpriseNo != '' || response.data.detail.enterpriseNo!=null){
                        var enterpriseNo = response.data.detail.enterpriseNo;
                        }

                        //登录成功
                        this.$message({
                          message: '恭喜你'+response.data.msg,
                          type: 'success'
                        }); 

                        if(accountStatus == 2){
                          //已开户
                          this.$router.push("/mshome");//跳转
                          console.log(accountStatus+'跳转到主页')
                        }else if(accountStatus == 0){
                          this.$router.push("/creatuser/creatus")
                          console.log(accountStatus+'创建账户')
                          this.$store.state.buttonshow=true;//隐藏开户提交按钮
                        }else if(accountStatus == 1 || accountStatus == 4 || accountStatus == 5 ){
                          this.$router.push("/creatuser/creatus")
                          console.log(accountStatus+'创建账户')
                          this.$store.state.buttonshow=false;//隐藏开户提交按钮
                        }else if(accountStatus == 3){
                          this.$router.push("/failcreatuser/failcreatus")
                          console.log(accountStatus+'创建账户失败')
                        }

                        


                      //存储状态、用户名、企业编号
                      sessionStorage.setItem("accountStatus", accountStatus);
                      sessionStorage.setItem("username", username);
                      sessionStorage.setItem("enterpriseNo", enterpriseNo);

                      }else{
                        this.$message.error(response.data.msg);
                      }
                    },
                    response => {
                      console.log(response);
                    }
                  );
        } else {
              console.log('error submit!!');
              return false;
            }
        })
    },
    //切换登录
    tologin(){
      $(".do-login").show(500);
			$(".do-regist").hide(500);
    },
    //切换注册
    toregist(){
      $(".do-login").hide(500);
			$(".do-regist").show(500);
    }
  },
  computed: {},
  components: {}
};
</script>

<style lang='less' scoped>

.wrapper {
  position: absolute;;
  height: 100%;
  width: 100%;
  background-image: url('../../assets/u0.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.contain{
    position: relative;
    width: 90%;
    height: 90%;
    left: 5%;
    top:5%;
}

.text-left{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
    top:2%;
    left: 3%;
    width: 45%;
    height: 90%;
    float: left;
    text-align: center;
}
.text-left h1,.text-left h2,.text-left span{
    display: block;
    position: relative;
    top: 30%;
    color: rgba(38, 80, 128, 0.767);
}
.text-left h1{
    font-size: 52px;
}
.text-left h2{
    font-size: 48px;
}
.text-left span{
    font-size: 32px;
}
.text-left .ti{
    display: block;
    margin: 0 auto;
    height: 2px;
    width: 230px;
    margin-top: 30px;
    margin-bottom: 20px;
    background-color: rgba(38, 80, 128, 0.767);
}
.inner-right{
    position: relative;
    top:5%;
    right: 3%;
    width: 45%;
    height: 90%;
    float: right;
}

.inner-right .do-login{
    margin-top:5%;
    margin-left: 10%;
    width: 70%;
    text-align: center;
    padding: 50px 40px;
    background-color: #fff;
    border: 1px solid rgb(231, 229, 229);
    -moz-box-shadow: 10px 10px 5px #cde7f1;  /* 老的 Firefox */

    //  h-shadow:水平阴影的位置 v-shadow:垂直阴影的位置 blur:模糊距离 spread:阴影的尺寸 color inset:将外部阴影 (outset) 改为内部阴影;
    box-shadow: 10px 10px 5px #cde7f1; 
}

.inner-right .do-regist{
    margin-top:5%;
    margin-left: 10%;
    width: 85%;
    text-align: center;
    padding: 30px 40px;
    background-color: #fff;
    border: 1px solid rgb(231, 229, 229);
    -moz-box-shadow: 10px 10px 5px #cde7f1;  /* 老的 Firefox */

    //  h-shadow:水平阴影的位置 v-shadow:垂直阴影的位置 blur:模糊距离 spread:阴影的尺寸 color inset:将外部阴影 (outset) 改为内部阴影;
    box-shadow: 10px 10px 5px #cde7f1; 
}
.do-login h2{
    font-size: 36px;
    color: rgba(31, 84, 145, 0.767);
}
.do-regist h2{
    font-size: 36px;
    color: rgba(31, 84, 145, 0.767);
}
.login-content {
margin-top: 30px;
}
.checkbox{
margin-top: 15px;
}
// .ell {
// width: 90%!important;
// }

.button-content {
position: relative;
margin-top: 20px;
    button {
        width: 50%;
    }
}
</style>
