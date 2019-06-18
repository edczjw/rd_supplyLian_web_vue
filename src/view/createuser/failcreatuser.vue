<template>
<div>
<div class="topBanner">
    <div class="side-tit">
      <p class='left'><img src="../../assets/1.png"/><b class="fg">创建账户</b>
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
             <el-form ref="detail" :model="this.detail" label-width="260px" status-icon>
                <el-row>
                <el-col :span="8">
                <el-form-item label="企业名称：" prop="enterpriseName"  :rules="rules.kong">
                    <span v-if="willShow" >{{this.detail.enterpriseName}}</span>
                    <el-input v-else size="mini" v-model="detail.enterpriseName" placeholder="填写企业全称"></el-input>
                </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="统一社会征信号码或营业执照号码：" prop="socialCode" :rules="rules.kong">
                        <span v-if="willShow" >{{this.detail.socialCode}}</span>
                        <el-input v-else size="mini" v-model="detail.socialCode" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="注册地址：" prop="registeredAddress" :rules="rules.kong">
                        <span v-if="willShow" >{{this.detail.registeredAddress}}</span>
                        <el-input v-else size="mini" v-model="detail.registeredAddress" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="8">
                    <el-form-item label="实际经营地址：" prop="businessAddress" :rules="rules.kong">
                        <span v-if="willShow" >{{this.detail.businessAddress}}</span>
                        <el-input v-else size="mini" v-model="detail.businessAddress" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="注册资本：" prop="registeredCapital" :rules="rules.number">
                        <span v-if="willShow" >{{this.detail.registeredCapital}}</span>
                        <el-input v-else size="mini" v-model="detail.registeredCapital" placeholder="若有小数则保留两位小数"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="实缴资本：" prop="paidCapital" :rules="rules.number">
                        <span v-if="willShow" >{{this.detail.paidCapital}}</span>
                        <el-input v-else size="mini" v-model="detail.paidCapital" placeholder="若有小数则保留两位小数"></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="8">
                    <el-form-item label="成立开始日期：" prop="startingDate" :rules="rules.kong">
                        <span v-if="willShow" >{{this.detail.startingDate}}</span>
                        <el-input v-else size="mini" v-model="detail.startingDate" placeholder="yyyy-mm-dd"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="成立有效截止日期：" prop="endingDate" :rules="rules.kong">
                        <span v-if="willShow" >{{this.detail.endingDate}}</span>
                        <el-input v-else size="mini" v-model="detail.endingDate" placeholder="yyyy-mm-dd" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="是否为一般纳税人：" prop="generalTaxpayers" :rules="rules.kong">
                        <span v-if="willShow" >
                          <span v-if="detail.generalTaxpayers=='是'">是</span>
                          <span v-if="detail.generalTaxpayers=='否'">否</span>
                          </span>
                        <div v-else>
                        <el-radio size="mini" border v-model="detail.generalTaxpayers" >是</el-radio>
                        <el-radio size="mini" border v-model="detail.generalTaxpayers" >否</el-radio>
                        </div>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="8">
                    <el-form-item label="法定代表人姓名：" prop="legalName" :rules="rules.kong">
                        <span v-if="willShow" >{{this.detail.legalName}}</span>
                        <el-input size="mini" v-else v-model="detail.legalName" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="法定代表人身份证号码：" prop="legalIdCard" :rules="rules.checkid">
                        <span v-if="willShow" >{{this.detail.legalIdCard}}</span>
                        <el-input size="mini" v-else v-model="detail.legalIdCard" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="法定代表人联系电话：" prop="legalPhone" :rules="rules.phone">
                        <span v-if="willShow" >{{this.detail.legalPhone}}</span>
                        <el-input size="mini" v-else v-model="detail.legalPhone" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <div class="kelist">
                  <span class="kespan"></span>
                <el-row>
                <el-table :data="this.detail.controlList" border>
                <el-table-column property="controlName" label="实际控制人姓名" align="center">
                    <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.controlName}}</span>
                    <el-input v-else size="mini" v-model="scope.row.controlName" placeholder="请输入内容"></el-input> 
                </template>
                </el-table-column>
                <el-table-column property="controlIdCard" label="实际控制人身份证号码" align="center">
                    <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.controlIdCard}}</span>
                    <el-input v-else size="mini" v-model="scope.row.controlIdCard" placeholder="请输入内容"></el-input> 
                </template>
                </el-table-column>
                <el-table-column property="controlPhone" label="实际控制人联系电话" align="center">
                    <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.controlPhone}}</span>
                    <el-input v-else size="mini" v-model="scope.row.controlPhone" placeholder="请输入内容" ></el-input> 
                </template>
                </el-table-column>
                 <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, detail.controlList)">删除</el-button>
                </template>
            </el-table-column>
                </el-table>
                </el-row>
                </div>

                <div class="kelist">
                  <span class="kespan"></span>
                <el-row>
                <el-table :data="this.detail.businessList" border>
                <el-table-column property="businessName" label="业务对接人姓名" align="center">
                    <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.businessName}}</span>
                    <el-input v-else size="mini" v-model="scope.row.businessName" placeholder="请输入内容" ></el-input> 
                </template>
                </el-table-column>
                <el-table-column property="businessPhone" label="业务对接人联系电话" align="center">
                    <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.businessPhone}}</span>
                    <el-input v-else size="mini" v-model="scope.row.businessPhone" placeholder="请输入内容" ></el-input> 
                </template>
                </el-table-column>
                <el-table-column property="businessMail" label="业务对接人联系邮箱" align="center">
                    <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.businessMail}}</span>
                    <el-input v-else size="mini" v-model="scope.row.businessMail" placeholder="请输入内容" ></el-input> 
                </template>
                </el-table-column>
                 <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, detail.businessList)">删除</el-button>
                </template>
            </el-table-column>
                </el-table>
                </el-row>
                </div>

                <div class="kelist">
                  <span class="kespan"></span>
                <el-row>
                <el-table :data="this.detail.financeList" border >
                <el-table-column property="financeName" label="财务对接人姓名" align="center">
                    <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.financeName}}</span>
                    <el-input v-else size="mini" v-model="scope.row.financeName" placeholder="请输入内容" ></el-input> 
                </template>
                </el-table-column>
                <el-table-column property="financePhone" label="财务对接人联系电话" align="center">
                    <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.financePhone}}</span>
                    <el-input v-else size="mini" v-model="scope.row.financePhone" placeholder="请输入内容" ></el-input> 
                </template>
                </el-table-column>
                <el-table-column property="financeMail" label="财务对接人联系邮箱" align="center">
                    <template slot-scope="scope">
                    <span v-if="willShow">{{scope.row.financeMail}}</span>
                    <el-input v-else size="mini" v-model="scope.row.financeMail" placeholder="请输入内容" ></el-input> 
                </template>
                </el-table-column>
                 <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, detail.financeList)">删除</el-button>
                </template>
            </el-table-column>
                </el-table>
                </el-row>
                </div>
             </el-form>
         </div>
            <div class="creat-button" v-if="this.$store.state.buttonshow">
            <el-button  type="success" @click="fn()">修改</el-button>
            <el-button  type="success" @click="save()">保存</el-button>
            <el-button type="primary"  @click="submit('detail')">提交</el-button>
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
          
          detail:{
                   
          },//所有信息

          willShow:true,//展示和输入切换
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
    }
  },
  mounted() {
    this.tologin()
      this.getMessage();//获取企业信息
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
    
    handleDelete(index, rows) {
      // console.log(index)
      if(index==0){
        this.$message.error('至少留有一条数据！')
      }else{
        rows.splice(index, 1);
      }
    },


      //获取企业信息
        getMessage(){
            //获取企业编号
            var enterpriseNo = sessionStorage.getItem("enterpriseNo");

                this.$axios({
                    method: 'post',
                    url: this.$store.state.domain +"/biz/user/getBasicInfo",
                    data: {
                            enterpriseNo: enterpriseNo
                    }
                  })
                  .then(
                    response => {
                      if(response.data.code==0){
                        
                          this.detail = response.data.detail;

                      }else{
                        this.$message.error(response.data.msg);
                      }
                    },
                    response => {
                      console.log(response);
                    }
                  );
        },

        //修改
        fn(){
            this.willShow=false;
        },
        //保存
        save(){
            this.willShow=true;
        },

      //提交
      submit(formName){
          this.$refs[formName].validate((valid) => {
          if (valid) {
            
            //获取企业编号
          this.detail.enterpriseNo = sessionStorage.getItem("enterpriseNo");
          this.detail.lstUpdUser = sessionStorage.getItem("username");
          if(this.detail.generalTaxpayers == '是'){
            this.detail.generalTaxpayers = '1'
          }else{
            this.detail.generalTaxpayers = '0'
          }

            this.$axios({
                        method: 'post',
                        url: this.$store.state.domain +"/biz/user/editBasicInfo",
                        data: this.detail,
                    })
                    .then(
                        response => {
                        if(response.data.code==0){
                             this.$alert(response.data.msg+'请返回登录界面等待工作人员联系告知您开户是否成功。', '开户结果', {
                                confirmButtonText: '确定并返回登录窗口',
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

.right:hover {
  color: #1682c0;
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
.kelist{
    position: relative;
    margin-top: 20px;
    border-top: 1px dotted rgb(15, 214, 121);
    padding: 35px 50px;
    border-radius: 4px;
}
.kelist .kespan{
    position: absolute;
    right: 0px;
    top: 0px;
    border-width:30px 30px 0;
    border-style:solid;
    border-color: rgb(92, 162, 202) transparent transparent;/*灰 透明 透明 */
    width: 30px;
    height: 30px;
}
.kelist{
  margin-bottom: 20px;
}
</style>
