<template>
 <div class="creat-wapper">
     <div class="container">
         <div class="creat-title">创建账户</div>
         <div class="creat-form">
             <div class="form-title">企业基本信息栏</div>
             <el-form ref="form" :model="form" label-width="240px">
                 <el-row :gutter="20">
                    <el-col :span="12">
                        <div>
                        <el-form-item label="企业名称">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="统一社会征信号码或营业执照号码">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="注册地址">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="实际经营地址">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="12">
                        <div>
                        <el-form-item label="注册资本">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="实缴资本">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="成立起止日">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="是否为一般纳税人">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="12">
                        <div>
                        <el-form-item label="法定代表人姓名">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="法定代表人身份证号码">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="法定代表人联系电话">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="实际控制人姓名">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="12">
                        <div>
                        <el-form-item label="实际控制人身份证号码">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="实际控制人联系电话">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="业务对接人姓名">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="业务对接人联系电话">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="12">
                        <div>
                        <el-form-item label="业务对接人联系邮箱">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="财务对接人姓名">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="财务对接人联系电话">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div>
                        <el-form-item label="财务对接人联系邮箱">
                            <el-input></el-input>
                        </el-form-item>
                        </div>
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

export default {
  data(){
      return{
    }
  },
  mounted() {
       },
  methods: {
      //提交
      submit(){
          this.$store.state.showmenu=!this.$store.state.showmenu;
          this.$router.push("/home");//跳转
      }
  }
};
</script>

<style scoped>
.creat-wapper{
    margin-right: 210px;
    padding: 40px;
    height: 100%;
}
.creat-wapper .container{
    height: 100%;
    padding: 10px 0;
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
    margin-top: 20px;
    padding: 20px;
}
.form-title{
    padding-left: 50px;
    margin-bottom: 18px;
}
.creat-button{
    text-align: center;
}

</style>
