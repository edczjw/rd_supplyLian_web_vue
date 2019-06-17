<template>
    <div class="set-wapper">
         <div class="heading-top">
        <el-row>
        <el-col :span="20">账号设置</el-col>
        <!-- <el-col :span="4"><i class="el-icon-phone-outline"></i>  客服电话：110</el-col> -->
        </el-row>
        </div>

        <el-tabs tab-position="left" type="border-card" @tab-click="handleClick" v-model="activeName">
            <el-tab-pane name="0">
                <span slot="label"><i class="el-icon-tickets">  账户信息</i></span>

                <el-card class="box-card">
                <el-row>
                   <el-col><div class="set-tit"><h3><i class="el-icon-view"></i>  企业基本信息栏</h3></div></el-col>
                </el-row>

                <div class="tab-out">
                <el-row :gutter="24">
                <el-col :span="8"><span>企业名称：</span>{{this.detail.enterpriseName}}</el-col>
                <el-col :span="8"><span>是否为一般纳税人：</span>{{this.detail.generalTaxpayers}}</el-col>
                <el-col :span="8"><span>注册资本（万元）：</span>{{this.detail.registeredCapital}}</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="8"><span>实缴资本（万元）：</span>{{this.detail.paidCapital}}</el-col>
                <el-col :span="8"><span>成立开始日：</span>{{this.detail.startingDate}}</el-col>
                <el-col :span="8"><span>有效截止日：</span>{{this.detail.endingDate}}</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="8"><span>法定代表人姓名：</span>{{this.detail.legalName}}</el-col>
                <el-col :span="8"><span>法定代表人联系电话：</span>{{this.detail.legalPhone}}</el-col>
                <el-col :span="8"><span>法定代表人身份证号码：</span>{{this.detail.legalIdCard}}</el-col>
                </el-row>
                
                <el-row :gutter="24">
                <el-col :span="12"><span>注册地址：</span>{{this.detail.registeredAddress}}</el-col>
                </el-row>
                
                <el-row :gutter="24">
                <el-col :span="12"><span>实际经营地址：</span>{{this.detail.businessAddress}}</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12"><span>统一社会征信号码或营业执照号码：</span>{{this.detail.socialCode}}</el-col>
                </el-row>
                </div>

                <div class="tab-out">
                 <el-row>
                <el-table :data="this.detail.controlList" >
                <el-table-column property="controlName" label="实际控制人姓名" align="center"></el-table-column>
                <el-table-column property="controlIdCard" label="实际控制人身份证号码" align="center"></el-table-column>
                <el-table-column property="controlPhone" label="实际控制人联系电话" align="center"></el-table-column>
                </el-table>
                </el-row>

                <el-row>
                <el-table :data="this.detail.businessList" >
                <el-table-column property="businessName" label="业务对接人姓名" align="center"></el-table-column>
                <el-table-column property="businessPhone" label="业务对接人联系电话" align="center"></el-table-column>
                <el-table-column property="businessMail" label="业务对接人联系邮箱" align="center"></el-table-column>
                </el-table>
                </el-row>

                <el-row>
                <el-table :data="this.detail.financeList" >
                <el-table-column property="financeName" label="财务对接人姓名" align="center"></el-table-column>
                <el-table-column property="financePhone" label="财务对接人联系电话" align="center"></el-table-column>
                <el-table-column property="financeMail" label="财务对接人联系邮箱" align="center"></el-table-column>
                </el-table>
                </el-row>
                </div>

                <el-row>
                   <el-col><div class="set-tits"><h3><i class="el-icon-message"></i>  银行卡信息</h3></div></el-col>
                </el-row>
                
                <div class="tab-out">
                <el-row :gutter="24">
                <el-col :span="8"><span>银行名称：</span>{{this.bankdetail.bankName}}</el-col>
                <el-col :span="8"><span>账户户名：</span>{{this.bankdetail.accountName}}</el-col>
                <el-col :span="8"><span>银行支行名称：</span>{{this.bankdetail.bankBranchName}}</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="24"><span>银行卡卡号：</span>{{this.bankdetail.cardNo}}</el-col>
                </el-row>
                </div>

                </el-card>
            </el-tab-pane>
           
            <el-tab-pane name="1">
                <span slot="label"><i class="el-icon-edit-outline">  修改密码</i></span>
                <el-card class="box-card">
                    <el-form ref="form" :model="this.form" status-icon :rules="rules" label-width="155px" class="demo-ruleForm">
                <div class="tab-out">
                        <el-row>
                        <el-col :span="24">
                            <el-form-item label="登录账号：" prop="username" :rules="rules.username">
                                {{form.username}}
                            </el-form-item>
                        </el-col>
                        </el-row>

                        <el-row>
                        <el-col :span="24">
                            <el-form-item label="输入旧密码：" prop="oldPassword" :rules="rules.password">
                                <el-input size="mini" placeholder="请输入旧密码" v-model.trim="form.oldPassword"></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>

                        <el-row>
                        <el-col :span="24">
                            <el-form-item label="输入新密码：" prop="newPassword"  :rules="rules.newPassword">
                                <el-input size="mini" placeholder="请输入新密码" v-model.trim="form.newPassword"></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>

                        <el-row>
                        <el-col :span="24">
                            <el-form-item label="再次输入新密码："  prop="renewPassword" :rules="rules.renewPassword">
                                <el-input size="mini" placeholder="请再次输入新密码" v-model.trim="form.renewPassword"></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>

                        <el-row style="text-align:center">
                        <el-col :span="24">
                            <el-button type="primary" @click="submit('form')">确认修改</el-button>
                        </el-col>
                        </el-row>
                </div>
                    </el-form>

                    
                </el-card>
                </el-tab-pane>
        </el-tabs>

    </div>
</template>
<script>

import rules from '../../untils/rules'
export default {
    data(){
        // 确认密码校验
        var validatePass1 = (rule, value, callback) => {
            if (value != this.form.newPassword) {
            callback(new Error('与新密码不一致!'));
            } else {
            callback();
            }
        };
        // 确认密码校验
        var validatePass2 = (rule, value, callback) => {
            if (value == this.form.oldPassword) {
            callback(new Error('新密码和旧密码不能相同!'));
            } else {
            callback();
            }
        };
        return{
            activeName: '0',//标签
            show:true,
            fileList: [],

            detail:"",//企业信息
            bankdetail:"",//银行卡信息

            form:{
                username:"",
                oldPassword:"",
                newPassword:"",
                renewPassword:"",
            },

            //输入框验证
          rules: {
              username: [
                { required: true, message: '账号不能为空。', trigger: 'blur'},
                { max: 11, message: '长度 11 个字符。', trigger: 'blur' },
                { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码。', trigger: 'blur'},
              ],
              password:[
                { required: true, message: '旧密码不能为空。', trigger: 'blur' },
                // { min: 8, max: 16, message: '长度在 8 到 16 个字符', trigger: 'blur' }
              ],
              newPassword: [
                  { required: true, message: '不能为空。', trigger: 'blur' },
                  { validator: validatePass2, trigger: 'blur' }
                ],
              renewPassword:[
                  { required: true, message: '不能为空。', trigger: 'blur' },
                  { validator: validatePass1, trigger: 'blur' }
              ]
          }
        }
    },
    mounted() {
        this.getname();
        this.getMessage();//获取企业信息
        this.getbankMessage();//获取银行卡信息
    },
    methods:{
        getname(){
            
            if(this.activeName==1){
            this.form.username = sessionStorage.getItem("username");
            }else{
                this.form.username = sessionStorage.getItem("username");
            }
        },
        submit(formName){
            this.$refs[formName].validate((valid) => {
            if (valid) {
                    this.$axios({
                    method: 'post',
                    url: this.$store.state.domain +"/biz/user/editPassword",
                    data: this.form,
                  })
                  .then(
                    response => {
                      if(response.data.code==0){
                        
                        this.$alert(response.data.msg, '修改结果', {
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
                  );
                
                } else {
                console.log('error submit!!');
                return false;
            }
            });

        },

        //获取企业信息
        getMessage(){
            //获取企业编号
            var enterpriseNo = sessionStorage.getItem("enterpriseNo");

            //判断是否在第一页
            if(this.activeName==0){
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
                        
                          this.detail = response.data.detail

                      }else{
                        this.$message.error(response.data.msg);
                      }
                    },
                    response => {
                      console.log(response);
                    }
                  );
            }
        },

        //获取银行卡信息
        getbankMessage(){
            //获取企业编号
            var enterpriseNo = sessionStorage.getItem("enterpriseNo");

            //判断是否在第一页
            if(this.activeName==0){
                this.$axios({
                    method: 'post',
                    url: this.$store.state.domain +"/biz/accountSetting/accountInfo",
                    data: {
                            enterpriseNo: enterpriseNo
                    }
                  })
                  .then(
                    response => {
                      if(response.data.code==0){
                        
                          this.bankdetail = response.data.detail.result

                      }else{
                        this.$message.error(response.data.msg);
                      }
                    },
                    response => {
                      console.log(response);
                    }
                  );
            }
        },

        //切换tab
        handleClick(){
            //默认显示当期账单
            this.show=true;
            this.getMessage()
            this.getbankMessage()
            this.getname();
        },

        // 我要还款
        reloan(){
            this.show=!this.show;
            
            //跳转返回顶部
            if(document.body.scrollTop > 0) {
                    window.scrollTo(0, -1);
                    document.body.scrollTop = 0;
                }
                window.scrollTo(0, -1);
                document.body.scrollTop = 0;
        },

        //手动上传
        submitUpload() {
        this.$refs.upload.submit();
        },
        //移除文件
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        //预览文件
        handlePreview(file) {
            console.log(file);
        },

        //设置上传文件的格式
        beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg'||'image/png'||'application/pdf';
        const isLt5M = file.size / 1024 / 1024 < 5;

        if (!isJPG) {
          this.$message.error('上传文件格式只能是 JPG | jpeg | png | pdf 格式!');
        }
        if (!isLt5M) {
          this.$message.error('上传文件大小不能超过 5MB!');
        }
        return isJPG && isLt5M;
      }
    }
}
</script>
<style lang="less" scoped>
.box-card{
    border-top: 3px solid rgba(15, 182, 160, 0.849);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.set-wapper{
    width:100%;
    height: 0;
    position: relative;
    padding-bottom: 70%;
}
.el-tabs{
    border-top: 1px solid rgba(15, 182, 160, 0.849);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding-bottom: 60px;
}
.box-card .el-row h3{
    font-size: 18px;
    font-weight: bolder;
    }
.box-card .el-row{
    font-size: 14px;
    padding: 10px 25px;
    
}

.box-card .el-row span{
        color:rgb(94, 92, 90);
    }

.set-tit{
    border-bottom: 1px solid rgba(201, 197, 197, 0.377);
    padding: 10px 0;
    margin-bottom: 10px;
}
.set-tits{
    border-bottom: 1px solid rgba(201, 197, 197, 0.377);
    padding: 10px 0;
    margin: 30px 0 10px 0;
}
.set-statues{
    background: #eee;
    border-radius: 10px;
    text-align: center;
    padding: 10px 0;
    color:red;
}
.card-box{
    padding: 10px 60px 40px;
}
.return{
    margin-bottom: 30px;
    font-size: 14px;
}
.tab-out{
    border: 1px dashed rgb(231, 185, 139);
    overflow: hidden;
    margin: 0px 15px 10px;
    border-radius: 15px;

}

.tab-out .el-row{
    border-bottom: 1px dashed rgba(231, 185, 139, 0.678);
    font-family:'黑体'
}
</style>

