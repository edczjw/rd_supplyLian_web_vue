<template>
<div>
<div class="topBanner">
    <div class="side-tit">
      <!-- <p class='left'><img src="../../assets/1.png"/><b class="fg">创建账户</b> -->
      <p class='left'><b class="fg">供应链金融服务平台</b>
      </p>
    </div>
    <p class='right' @click="goBack" title="安全退出">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye"></use>
      </svg></p>
      <p class='right' title="用户名">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-character"></use>
      </svg>{{username}}</p>
    <p class='right' @click="screenfull" title="全屏显示">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-quanping4"></use>
      </svg></p>
    <p class='right' title="联系客服：020-86534547">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-atm"></use>
      </svg></p>
  </div>
 <div class="creat-wapper">
     <div class="container">
         <div class="creat-title">创建账户</div>
         <div class="creat-form">
             <div class="form-title">企业基本信息栏</div>
             <el-form ref="form" :model="form" label-width="240px" status-icon>
                <el-row>
                <el-col :span="8">
                <el-form-item label="企业名称" prop="enterpriseName"  :rules="rules.kong">
                    <el-input size="mini" v-model="form.enterpriseName" placeholder="填写企业全称"></el-input>
                </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="注册地址" prop="registeredAddress" :rules="rules.kong">
                        <el-input size="mini" v-model="form.registeredAddress" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="实际经营地址" prop="businessAddress" :rules="rules.kong">
                        <el-input size="mini" v-model="form.businessAddress" ></el-input>
                    </el-form-item>
                </el-col>
                
                </el-row>

                <el-row>
                <el-col :span="8">
                    <el-form-item label="注册资本(元)" prop="registeredCapital" :rules="rules.number">
                        <el-input size="mini" v-model="form.registeredCapital" placeholder="填写数字值"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="实缴资本(元)" prop="paidCapital" :rules="rules.number">
                        <el-input size="mini" v-model="form.paidCapital" placeholder="填写数字值"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="成立开始日期" prop="startingDate" :rules="rules.kong">
                        <el-input size="mini" v-model="form.startingDate" placeholder="yyyy-mm-dd"></el-input>
                    </el-form-item>
                </el-col>
                
                </el-row>

                <el-row>
                <el-col :span="8">
                    <el-form-item label="成立有效截止日期" prop="endingDate" :rules="rules.kong">
                        <el-input size="mini" v-model="form.endingDate" placeholder="yyyy-mm-dd" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="是否为一般纳税人" prop="generalTaxpayers" :rules="rules.kong">
                        <el-radio v-model="form.generalTaxpayers" label="1">是</el-radio>
                        <el-radio v-model="form.generalTaxpayers" label="2">否</el-radio>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="法定代表人姓名" prop="legalName" :rules="rules.kong">
                        <el-input size="mini" v-model="form.legalName" ></el-input>
                    </el-form-item>
                </el-col>
                
                </el-row>

                <el-row>
                <el-col :span="8">
                    <el-form-item label="法定代表人身份证号码" prop="legalIdCard" :rules="rules.checkid">
                        <el-input size="mini" v-model="form.legalIdCard" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="法定代表人联系电话" prop="legalPhone" :rules="rules.phone">
                        <el-input size="mini" v-model="form.legalPhone" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
                
                
                <el-row>
                <el-col :span="24">
                    <el-form-item label="统一社会征信号码或营业执照号码" prop="socialCode" :rules="rules.kong">
                        <el-input size="mini" v-model="form.socialCode" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <div class="kelist">
                    <span class="kespan"></span>
                <el-button v-if="addshow1"  type="success" @click="addcontrol" size="mini">新增实际控制人</el-button>
                <el-row>
                <el-col :span="8">
                <el-form-item 
                    v-for="(controlList, index) in form.controlList"
                    :label="'实际控制人姓名'+(index+1)+'：'" 
                    :key="controlList.key"
                    :prop="'controlList.' + index + '.controlName'"
                    :rules="rules.kong">
                    <el-input v-model.trim="controlList.controlName"  size="mini" clearable></el-input>
                </el-form-item>
                </el-col>

                <el-col :span="8">
                    <el-form-item 
                    v-for="(controlList, index) in form.controlList"
                    :label="'实际控制人身份证号码'+(index+1)+'：'" 
                    :key="controlList.key"
                    :prop="'controlList.' + index + '.controlIdCard'"
                    :rules="rules.checkid">
                        <el-input v-model.trim="controlList.controlIdCard"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item 
                    v-for="(controlList, index) in form.controlList"
                    :label="'实际控制人联系电话'+(index+1)+'：'" 
                    :key="controlList.key"
                    :prop="'controlList.' + index + '.controlPhone'"
                    :rules="rules.phone">
                        <el-input v-model.trim="controlList.controlPhone" size="mini" clearable></el-input>
                        <el-button v-if="deleteshow1"  type="danger" size="mini" @click.prevent="removecontrol(controlList)">删除当前</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

                <div class="kelist">
                    <span class="kespan"></span>
                <el-button v-if="addshow2"  type="success" @click="addbussiness" size="mini">新增业务对接人</el-button>
                <el-row>
                <el-col :span="8">
                    <el-form-item 
                    v-for="(businessList, index) in form.businessList"
                    :label="'业务对接人姓名'+(index+1)+'：'" 
                    :key="businessList.key"
                    :prop="'businessList.' + index + '.businessName'"
                    :rules="rules.kong">
                        <el-input v-model.trim="businessList.businessName"  size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item 
                    v-for="(businessList, index) in form.businessList"
                    :label="'业务对接人联系电话'+(index+1)+'：'" 
                    :key="businessList.key"
                    :prop="'businessList.' + index + '.businessPhone'"
                    :rules="rules.phone">
                        <el-input v-model.trim="businessList.businessPhone" placeholder="请输入正确的电话号码" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item 
                    v-for="(businessList, index) in form.businessList"
                    :label="'业务对接人联系邮箱'+(index+1)+'：'" 
                    :key="businessList.key"
                    :prop="'businessList.' + index + '.businessMail'"
                    :rules="rules.mail">
                        <el-input v-model.trim="businessList.businessMail" placeholder="请输入正确的邮箱" size="mini" clearable></el-input>
                        <el-button v-if="deleteshow2"  type="danger" size="mini" @click.prevent="removebussiness(businessList)">删除当前</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>


                <div class="kelist">
                    <span class="kespan"></span>
                <el-button v-if="addshow3"  type="success" @click="addfinance" size="mini">新增财务对接人</el-button>
                <el-row>
                <el-col :span="8">
                    <el-form-item 
                    v-for="(financeList, index) in form.financeList"
                    :label="'财务对接人姓名'+(index+1)+'：'" 
                    :key="financeList.key"
                    :prop="'financeList.' + index + '.financeName'"
                    :rules="rules.kong">
                        <el-input v-model.trim="financeList.financeName" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item 
                    v-for="(financeList, index) in form.financeList"
                    :label="'财务对接人联系电话'+(index+1)+'：'" 
                    :key="financeList.key"
                    :prop="'financeList.' + index + '.financePhone'"
                    :rules="rules.phone">
                        <el-input v-model.trim="financeList.financePhone"  placeholder="请输入正确的电话号码" size="mini" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item
                    v-for="(financeList, index) in form.financeList"
                    :label="'财务对接人联系邮箱'+(index+1)+'：'" 
                    :key="financeList.key"
                    :prop="'financeList.' + index + '.financeMail'"
                    :rules="rules.mail">
                        <el-input v-model.trim="financeList.financeMail" placeholder="请输入正确的邮箱" size="mini" clearable></el-input>
                        <el-button v-if="deleteshow3"  type="danger" size="mini" @click.prevent="removefinance(financeList)">删除当前</el-button>
                    </el-form-item>
                </el-col>
                </el-row>
                </div>

             </el-form>
         </div>

        <div class="creat-button" v-if="this.$store.state.buttonshow">
         <el-button type="primary"  @click="submit('form')">提交</el-button>
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
          username:'',
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
      this.tologin()
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
      tologin(){
      if(this.userName==''){
        this.$message.error('请进行登录!')
        this.$router.push("/login")
      }
    },
      getstatues(){
          this.statues = sessionStorage.getItem("accountStatus");
          if(this.statues==1){
              this.statues='开户中'
              this.$alert('尊敬的客户，目前您的开户状态处在：'+this.statues+',请等待工作人员联系您，谢谢!', '当前开户状态', {
                confirmButtonText: '确定并返回登录窗口',
                showClose:false,
                callback: action => {
                    this.$router.push("/login")
                }
                });
          }else if(this.statues==3){
              this.statues='开户失败'
              this.$alert('尊敬的客户，很遗憾：'+this.statues+',请等待工作人员联系您，谢谢!', '当前开户状态', {
                confirmButtonText: '确定并返回登录窗口',
                showClose:false,
                callback: action => {
                    this.$router.push("/login")
                }
                });
          }else if(this.statues==4){
              this.statues='账户失效'
              this.$alert('尊敬的客户，您的开户状态为：'+this.statues+',请等待工作人员联系您，谢谢!', '当前开户状态', {
                confirmButtonText: '确定并返回登录窗口',
                showClose:false,
                callback: action => {
                    this.$router.push("/login")
                }
                });
          }
          
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
                             this.$alert('恭喜您！'+response.data.msg+'！请返回登录界面等待，工作人员将会联系告知您开户是否成功，谢谢！。', '开户结果', {
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
            
            this.deleteshow2=false;
            this.addshow2=true;
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
    padding: 20px;
    height: 100%;
}
.creat-wapper .container{
    height: 100%;
    padding: 50px 0;
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
.el-input{
    width: 210px;
}
.form-title{    
    margin-bottom: 18px;
    border-radius: 8px;
    text-align: center;
    width: 150px;
    line-height: 40px;
    font-weight: bolder;
    border: 2px solid rgb(219, 133, 133);
}
.creat-button{
    text-align: center;
}

.topBanner {
  line-height: 66px;

  position: fixed;
  left: 0;
  right: 0;
  z-index: 99;

  width: 100%;
  height: 66px;
  background: #fff;
  border-bottom: 1px solid rgba(207, 206, 206, 0.596);
}

.topBanner p {
  padding-left: 20px;
}

.left {
  float: left;
  height: 65px;
  padding-top: 2px;
  font-weight: bolder;
  background: #fff;
}
.left img{
  width: 55px;
}
.left .fg{
  float: right;
  font-family: '黝黑';
  font-size: 24px;
  color: #1682c0;
  padding-left: 10px;
  padding-right: 15px;
}
.left .icon-tip{
  width: 40px;
  height: 40px;
}

.right {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 12px;

  float: right;

  margin-right: 6px;

  cursor: pointer;
  color: rgb(189, 40, 219);

}
svg {
  width: 32px;
  height: 32px;
  padding: 3px 8px;
  color: rgb(80, 78, 78);
}

svg:hover {
  color: #1682c0;
}
.kelist .kespan{
    position: relative;
    margin-top: 20px;
    border-top: 1px dotted rgb(216, 215, 215);
    padding: 30px 20px;
}
.kelist span{
    position: absolute;
    right: 0px;
    top: 0px;
    border-width:30px 30px 0;
    border-style:solid;
    border-color: rgb(92, 162, 202) transparent transparent;/*灰 透明 透明 */
    width: 30px;
    height: 30px;
}
</style>
