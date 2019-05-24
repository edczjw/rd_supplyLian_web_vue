<template>
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
                        <el-input v-model="form.generalTaxpayers" ></el-input>
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
                    <el-form-item label="法定代表人身份证号码" prop="idCard" :rules="rules.checkid">
                        <el-input v-model="form.idCard" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="法定代表人联系电话" prop="phone" :rules="rules.phone">
                        <el-input v-model="form.phone" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="24">
                    <el-form-item label="实际控制人姓名" prop="controlName" :rules="rules.kong">
                        <el-input v-model="form.controlName" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="实际控制人身份证号码" prop="idCard" :rules="rules.checkid">
                        <el-input v-model="form.idCard" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="24">
                    <el-form-item label="实际控制人联系电话" prop="phone" :rules="rules.phone">
                        <el-input v-model="form.phone" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="业务对接人姓名" prop="businessName" :rules="rules.kong">
                        <el-input v-model="form.businessName" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="24">
                    <el-form-item label="业务对接人联系电话" prop="phone" :rules="rules.phone">
                        <el-input v-model="form.phone" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="业务对接人联系邮箱" prop="mail" :rules="rules.mail">
                        <el-input v-model="form.mail" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="24">
                    <el-form-item label="财务对接人姓名" prop="financeName" :rules="rules.kong">
                        <el-input v-model="form.financeName" ></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="24">
                    <el-form-item label="财务对接人联系电话" prop="phone" :rules="rules.phone">
                        <el-input v-model="form.phone" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="24">
                    <el-form-item label="财务对接人联系邮箱" prop="mail" :rules="rules.mail">
                        <el-input v-model="form.mail" ></el-input>
                    </el-form-item>
                </el-col>
                </el-row>
             </el-form>
         </div>

        <div class="creat-button">
         <el-button type="primary" plain @click="submit()">提交</el-button>
         </div>
     </div>
 </div>
</template>
<script>

import rules from '../../untils/rules'
export default {
  data(){
      return{
          rules,  
          form:{
               // 企业基本信息栏
                enterpriseName:"",              //企业名称
                socialCode:"",              //统一社会征信号码或营业执照号码
                registeredAddress:"",               //注册地址
                businessAddress:"",             //实际经营地址
                registeredCapital:"",               //注册资本
                paidCapital:"",             //实缴资本
                startingDate:"",              //成立开始日
                endingDate:"",                  //成立有效截止日期
                generalTaxpayers:"",                //是否为一般纳税人
                legalList:"",               //法人list
                legalName:"",               //法定代表人姓名
                idCard:"",              //身份证号码
                phone:"",               //联系电话
                controlList:"",             //控制人list
                controlName:"",             //实际控制人姓名
                idCard:"",              //身份证号码
                phone:"",               //联系电话
                businessList:"",                //业务对接人list
                businessName:"",                //业务对接人姓名
                phone:"",               //联系电话
                mail:"",                //联系邮箱
          }
    }
  },
  mounted() {
       },
  methods: {
      //提交
      submit(){
          this.$store.state.showmenu=!this.$store.state.showmenu;
          this.$router.push("/mshome");//跳转
      }
  }
};
</script>

<style scoped>
.creat-wapper{
    margin-right: 210px;
    padding: 20px;
    height: 100%;
}
.creat-wapper .container{
    height: 100%;
    padding: 20px 0;
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

</style>
