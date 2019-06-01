<template>
<div>
<div class="topBanner">
    <div class="side-tit">
      <p class='left'><span>民盛小贷</span> 创建账户
      </p>
    </div>
    <p class='right' @click="goBack" title="安全退出">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye"></use>
      </svg>返回登录</p>
      <p class='right' title="用户名">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-character"></use>
      </svg>{{username}}</p>
    <p class='right' @click="screenfull" title="全屏显示">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-quanping4"></use>
      </svg></p>
    <p class='right' title="联系客服">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-atm"></use>
      </svg>112</p>
  </div>
 <div class="creat-wapper">
     <div class="container">
         <div class="creat-title">创建账户</div>
         <div class="creat-form">
             <div class="form-title">企业基本信息栏</div>
             <el-form ref="form" :model="form" label-width="240px" status-icon>
                <el-row>
                <el-col :span="24">
                <el-form-item label="企业名称" prop="enterpriseName"  :rules="rules.kong">
                    <el-input v-model="form.enterpriseName" placeholder="填写企业全称"></el-input>
                </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="统一社会征信号码或营业执照号码" prop="socialCode" :rules="rules.kong">
                        <el-input v-model="form.socialCode" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="24">
                    <el-form-item label="注册地址" prop="registeredAddress" :rules="rules.kong">
                        <el-input v-model="form.registeredAddress" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="实际经营地址" prop="businessAddress" :rules="rules.kong">
                        <el-input v-model="form.businessAddress" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="24">
                    <el-form-item label="注册资本" prop="registeredCapital" :rules="rules.number">
                        <el-input v-model="form.registeredCapital" placeholder="填写数字值"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="实缴资本" prop="paidCapital" :rules="rules.number">
                        <el-input v-model="form.paidCapital" placeholder="填写数字值"></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="24">
                    <el-form-item label="成立开始日期" prop="startingDate" :rules="rules.kong">
                        <el-input v-model="form.startingDate" placeholder="yyyy-mm-dd"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="成立有效截止日期" prop="endingDate" :rules="rules.kong">
                        <el-input v-model="form.endingDate" placeholder="yyyy-mm-dd" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="24">
                    <el-form-item label="是否为一般纳税人" prop="generalTaxpayers" :rules="rules.kong">
                        <el-radio v-model="form.generalTaxpayers" label="1">是</el-radio>
                        <el-radio v-model="form.generalTaxpayers" label="2">否</el-radio>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="法定代表人姓名" prop="legalName" :rules="rules.kong">
                        <el-input v-model="form.legalName" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="24">
                    <el-form-item label="法定代表人身份证号码" prop="legalIdCard" :rules="rules.checkid">
                        <el-input v-model="form.legalIdCard" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="法定代表人联系电话" prop="legalPhone" :rules="rules.phone">
                        <el-input v-model="form.legalPhone" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <div class="kelist">
                <el-button v-if="addshow1" plain type="success" @click="addcontrol" size="mini">新增</el-button>
                <el-row>
                <el-col :span="12">
                <el-form-item 
                    v-for="(controlList, index) in form.controlList"
                    :label="'实际控制人姓名'+(index+1)+'：'" 
                    :key="controlList.key"
                    :prop="'controlList.' + index + '.controlName'"
                    :rules="rules.kong">
                    <el-input v-model.trim="controlList.controlName"  size="mini" clearable></el-input>
                </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-form-item 
                    v-for="(controlList, index) in form.controlList"
                    :label="'实际控制人身份证号码'+(index+1)+'：'" 
                    :key="controlList.key"
                    :prop="'controlList.' + index + '.controlIdCard'"
                    :rules="rules.checkid">
                        <el-input v-model.trim="controlList.controlIdCard"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item 
                    v-for="(controlList, index) in form.controlList"
                    :label="'实际控制人联系电话'+(index+1)+'：'" 
                    :key="controlList.key"
                    :prop="'controlList.' + index + '.controlPhone'"
                    :rules="rules.phone">
                        <el-input v-model.trim="controlList.controlPhone" size="mini" clearable></el-input>
                        <el-button v-if="deleteshow1" plain type="danger" size="mini" @click.prevent="removecontrol(controlList)">删除</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <div class="kelist">
                <el-button v-if="addshow2" plain type="success" @click="addbussiness" size="mini">新增</el-button>
                <el-row>
                <el-col :span="12">
                    <el-form-item 
                    v-for="(businessList, index) in form.businessList"
                    :label="'业务对接人姓名'+(index+1)+'：'" 
                    :key="businessList.key"
                    :prop="'businessList.' + index + '.businessName'"
                    :rules="rules.kong">
                        <el-input v-model.trim="businessList.businessName"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item 
                    v-for="(businessList, index) in form.businessList"
                    :label="'业务对接人联系电话'+(index+1)+'：'" 
                    :key="businessList.key"
                    :prop="'businessList.' + index + '.businessPhone'"
                    :rules="rules.phone">
                        <el-input v-model.trim="businessList.businessPhone" placeholder="请输入正确的电话号码" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item 
                    v-for="(businessList, index) in form.businessList"
                    :label="'业务对接人联系邮箱'+(index+1)+'：'" 
                    :key="businessList.key"
                    :prop="'businessList.' + index + '.businessMail'"
                    :rules="rules.mail">
                        <el-input v-model.trim="businessList.businessMail" placeholder="请输入正确的邮箱" size="mini" clearable></el-input>
                        <el-button v-if="deleteshow2" plain type="danger" size="mini" @click.prevent="removebussiness(businessList)">删除</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>


                <div class="kelist">
                <el-button v-if="addshow3" plain type="success" @click="addfinance" size="mini">新增</el-button>
                <el-row>
                <el-col :span="12">
                    <el-form-item 
                    v-for="(financeList, index) in form.financeList"
                    :label="'财务对接人姓名'+(index+1)+'：'" 
                    :key="financeList.key"
                    :prop="'financeList.' + index + '.financeName'"
                    :rules="rules.kong">
                        <el-input v-model.trim="financeList.financeName" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item 
                    v-for="(financeList, index) in form.financeList"
                    :label="'财务对接人联系电话'+(index+1)+'：'" 
                    :key="financeList.key"
                    :prop="'financeList.' + index + '.financePhone'"
                    :rules="rules.phone">
                        <el-input v-model.trim="financeList.financePhone"  placeholder="请输入正确的电话号码" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    <el-form-item
                    v-for="(financeList, index) in form.financeList"
                    :label="'财务对接人联系邮箱'+(index+1)+'：'" 
                    :key="financeList.key"
                    :prop="'financeList.' + index + '.financeMail'"
                    :rules="rules.mail">
                        <el-input v-model.trim="financeList.financeMail" placeholder="请输入正确的邮箱" size="mini" clearable></el-input>
                        <el-button v-if="deleteshow3" plain type="danger" size="mini" @click.prevent="removefinance(financeList)">删除</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>
             </el-form>
         </div>

        <div class="creat-button" v-if="this.$store.state.buttonshow">
         <el-button type="primary" plain @click="submit('form')">提交</el-button>
         </div>
     </div>
 </div>
</div>
</template>
<script>

import screenfull from 'screenfull'
import rules from '../../untils/rules'
export default {
  data(){
      return{
          username:'admin',
          isFullscreen: false,
          rules,  
          statues:'',
          addshow1:true,
          deleteshow1:false,
          addshow2:true,
          deleteshow2:false,
          addshow3:true,
          deleteshow3:false,
          form:{
                username:"",                   //账号
               // 企业基本信息栏
                enterpriseName:"",              //企业名称
                socialCode:"",              //统一社会征信号码或营业执照号码
                registeredAddress:"",               //注册地址
                businessAddress:"",             //实际经营地址
                registeredCapital:"",               //注册资本
                paidCapital:"",             //实缴资本
                startingDate:"",              //成立开始日
                endingDate:"",                  //成立有效截止日期
                generalTaxpayers:'1',                //是否为一般纳税人
                legalName:"",               //法定代表人姓名
                legalIdCard:"",              //身份证号码
                legalPhone:"",               //联系电话
                //控制人list
                controlList:[{
                    controlName:"",             //实际控制人姓名
                    controlIdCard:"",              //身份证号码
                    controlPhone:"",               //联系电话
                }],             
                
                //业务对接人list
                businessList:[{
                    businessName:"",                //业务对接人姓名
                    businessPhone:"",               //联系电话
                    businessMail:"",                //联系邮箱
                }],                
                              
                //财务对接人list
                financeList:[{
                    financeName:"",             //财务对接人姓名
                    financePhone:"",               //联系电话
                    financeMail:"",                //联系邮箱
                }],             
          }
    }
  },
  mounted() {
      this.getstatues();//获取开户状态
      this.getName();
       window.onresize = () => {
            // 全屏下监控是否按键了ESC
            if (!this.checkFull()) {
              // 全屏下按键esc后要执行的动作
              this.isFullscreen = false
            }
          }
       },
  methods: {
      getstatues(){
          this.statues = sessionStorage.getItem("accountStatus");
          if(this.statues==1){
              this.statues='开户中'
          }else if(this.statues==3){
              this.statues='开户失败'
          }else if(this.statues==4){
              this.statues='账户失效'
          }
          console.log(this.statues)
          this.$alert(this.statues+',请等待工作人员联系您。', '当前开户状态', {
          confirmButtonText: '确定并返回登录窗口',
          showClose:false,
          callback: action => {
            this.$router.push("/login")
          }
        });
      },
      //提交
      submit(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {
          this.form.username = sessionStorage.getItem("username");

            this.$axios({
                        method: 'post',
                        url: this.$store.state.domain +"/biz/user/openAccount",
                        data: this.form,
                    })
                    .then(
                        response => {
                        if(response.data.code==0){
                             this.$alert(response.data.msg+'请返回登录界面等待工作人员联系告知您开户是否成功。', '开户结果', {
                                confirmButtonText: '确定并重新进行登录',
                                callback: action => {
                                //跳转到登录界面
                                this.$router.push("/login")
                                }
                                });
                            

                        }else{
                            this.$message.error(response.data.msg);
                        }
                        },
                        response => {
                        console.log(response);
                        }
                     )
                  }else {
              console.log('error submit!!');
              return false;
            }
          
        })
      },

      //新增控制人
        addcontrol(){
            this.form.controlList.push({
                controlName:"",             //实际控制人姓名
                idCard:"",              //身份证号码
                phone:"",               //联系电话
                key: Date.now()
            });
            this.addshow1=false;
            this.deleteshow1=true;
        },

        //删除控制人
        removecontrol(item){
            var index = this.form.controlList.indexOf(item)
            if (index !== -1) {
            this.form.controlList.splice(index, 1)
            
            this.deleteshow1=false;
            this.addshow1=true;
            }
        },


        //新增业务人
        addbussiness(){
            this.form.businessList.push({
                businessName:"",                //业务对接人姓名
                phone:"",               //联系电话
                mail:"",                //联系邮箱
                key: Date.now()
            });
            this.addshow2=false;
            this.deleteshow2=true;
        },

        //删除业务人
        removebussiness(item){
            var index = this.form.businessList.indexOf(item)
            if (index !== -1) {
            this.form.businessList.splice(index, 1)
            
            this.deleteshow3=false;
            this.addshow3=true;
            }
        },

        // 新增财务人
        addfinance(){
            this.form.financeList.push({
                financeName:"",             //财务对接人姓名
                phone:"",               //联系电话
                mail:"",                //联系邮箱
                key: Date.now()
            });
            this.addshow3=false;
            this.deleteshow3=true;
        },

        //删除财务人
        removefinance(item){
            var index = this.form.financeList.indexOf(item)
            if (index !== -1) {
            this.form.financeList.splice(index, 1)
            
            this.deleteshow3=false;
            this.addshow3=true;
            }
        },

         /**
     * 全屏事件
     */
    screenfull() {
      if (!screenfull.enabled) {
        this.$message({
          message: 'Your browser does not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
      this.isFullscreen = true
    },
    /**
     * 是否全屏并按键ESC键的方法
     */
    checkFull() {
      var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled
      // to fix : false || undefined == undefined
      if (isFull === undefined) {
          isFull = false
      }
      return isFull
    },

    getName(){
        this.username = sessionStorage.getItem("username");
    },
    //退出登陆
    goBack() {
      var _this = this;
      this.$confirm('确认退出吗?', '提示', {
        //type: 'warning'
      }).then(() => {
        // sessionStorage.removeItem('user');
        sessionStorage.setItem("name", 'str');//本地存储用户名
        this.$router.push('/login');
      }).catch(() => {

      });
      // this.$router.push("/login");
    },
  }
};
</script>

<style scoped>
.creat-wapper{
    margin: 0 210px;
    padding: 20px;
    height: 100%;
}
.creat-wapper .container{
    height: 100%;
    padding: 50px 0;
    border-left: 1px solid rgb(214, 212, 212);
    border-right: 1px solid rgb(214, 212, 212);
}
.container .creat-title{
    margin: 0 auto;
    font-size: 28px;
    width: 120px;
    text-align: center;
    line-height: 40px;
}
.creat-form{
    margin-top: 10px;
    padding: 50px;
}
.form-title{
    padding-left: 50px;
    margin-bottom: 18px;
}
.creat-button{
    text-align: center;
}
.topBanner {
  line-height: 50px;

  position: fixed;
  left: 0;
  right: 0;
  z-index: 99;

  width: 100%;
  height: 50px;
  background: #72d0eb;
  border-bottom: 1px solid #a0d9ea;
}

.topBanner p {
  padding-left: 20px;
}

.left {
  font-family: '黑体';
  font-size: 21px;
  color: #f3faef;
  float: left;
  font-weight: bolder;
}
.left span{
     font-size: 28px;
     color: #b86e0e;
     opacity: 1;
     padding-right: 10px;
     border-right: 2px solid rgba(175, 105, 105, 0.63);
 }
.left .icon-tip{
  width: 40px;
  height: 40px;
}

.right {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 12px;

  float: right;

  margin-right: 5px;

  cursor: pointer;

  color: rgb(89, 90, 94);
}

.right:hover {
  color: #eee;
}

svg {
  width: 30px;
  height: 30px;
  padding: 3px 8px;
  color: #fff;
}

svg:hover {
  color: #eee;
}
</style>
