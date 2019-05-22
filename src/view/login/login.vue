<template>
  <div class="wrapper">
    <div class="contain">
    <div class="text-left">
        <h1>民盛小贷供应链</h1>
            <h2>金融服务平台</h2>
            <span class="ti"></span>
        <span>Minsheng Credit Supply ChainFinancial Service Platform</span>
    </div>

    <div class="inner-right">

      <!-- 登录框 -->
        <div class="do-login">
            <h2>账号登录</h2>

            <el-form ref="form" :model="this.loginform">
              <div class="login-content">
                <el-input class="ell" placeholder="请输入手机号" v-model.trim="loginform.mobile">
                  <template slot="prepend">
                    <i class="el-icon-edit"></i>
                  </template>
                </el-input>
              </div>

              <div class="login-content">
                <el-input class="ell" type="password" show-password placeholder="请输入密码" v-model.trim="loginform.password">
                  <template slot="prepend">
                    <i class="el-icon-view"></i>
                  </template>
                </el-input>
              </div>
              <div class="button-content">
                <el-button type="primary" plain size="medium" @click="login()" >登录</el-button>
              </div>
            </el-form>

            <div class="button-content">
              <el-button type="warning" plain @click="toregist()" >未有账号？立即注册</el-button>
            </div>

            

        </div>

        <!-- 注册框 -->
        <div class="do-regist" style="display: none;">
            <h2>账号注册</h2>

            <el-form ref="form" :model="this.registform">
              <div class="login-content">
                <el-input class="ell" placeholder="请填写手机号" v-model.trim="registform.mobile">
                  <template slot="prepend">
                    <i class="el-icon-edit"></i>
                  </template>
                </el-input>
              </div>

              <div class="login-content">
                <el-input class="ell" type="password" show-password placeholder="请填写注册密码" v-model.trim="registform.password">
                  <template slot="prepend">
                    <i class="el-icon-view"></i>
                  </template>
                </el-input>
              </div>

              <div class="login-content">
                <el-input class="ell" type="password" show-password placeholder="请再次填写注册密码" v-model.trim="registform.realpassword">
                  <template slot="prepend">
                    <i class="el-icon-view"></i>
                  </template>
                </el-input>
              </div>

              <div class="checkbox">
                  <el-checkbox-group v-model="checked">
                    <el-checkbox >已同意并愿意接受 《XXXXX》 和 《xxxx声明》</el-checkbox>
                  </el-checkbox-group>
              </div>

              <div class="button-content">
                <el-button type="primary" plain size="medium"  @click="regist()" >注册</el-button>
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
    return {
          // 登录表单
          loginform: {
              mobile: "",
              password: ""
          },
          // 注册表单
          registform:{
              mobile: "",
              password: "",
              realpassword:""
          },
          //是否点击同意
          checked:true
    };
  },
  mounted() {

  },
  methods: {
    //登录
    login(){
      this.$router.push("/home");//跳转
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
    padding: 50px 0;
    background-color: #fff;
    border: 1px solid rgb(231, 229, 229);
    -moz-box-shadow: 10px 10px 5px #cde7f1;  /* 老的 Firefox */

    //  h-shadow:水平阴影的位置 v-shadow:垂直阴影的位置 blur:模糊距离 spread:阴影的尺寸 color inset:将外部阴影 (outset) 改为内部阴影;
    box-shadow: 10px 10px 5px #cde7f1; 
}

.inner-right .do-regist{
   margin-top:5%;
    margin-left: 10%;
    width: 80%;
    text-align: center;
    padding: 60px 0;
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
.ell {
width: 80%!important;
}
.button-content {
position: relative;
margin-top: 10px;

    button {
        width: 80%;
    }
}
</style>
