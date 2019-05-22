<template>
  <div>
                <el-card class="box-card">
                <!-- 企业基本信息栏 -->
                <el-row>
                <el-col :span="12"><h4>企业基本信息栏</h4>
                </el-col>
                </el-row>
                
                <el-row>
                <el-col :span="12">
                    企业名称：
                       
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    统一社会征信号码或营业执照号码：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    注册地址：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    实际经营地址：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    注册资本：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    实缴资本：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    成立起止日：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    是否为一般纳税人：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    法定代表人姓名：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    法定代表人身份证号码：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    法定代表人联系电话：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    实际控制人姓名：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    实际控制人身份证号码：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    实际控制人联系电话：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    业务对接人姓名：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    业务对接人联系电话：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    业务对接人联系邮箱：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    财务对接人姓名：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    财务对接人联系电话：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    财务对接人联系邮箱：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <!-- 银行卡信息 -->
                <el-row>
                <el-col :span="12"><h4>银行卡信息</h4>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    银行卡卡号：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    银行名称：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    账户户名：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    银行支行名称：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <!-- 企业财务信息栏 -->
                <el-row>
                <el-col :span="12"><h4>企业财务信息栏</h4>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    近三年经营收入金额：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    近三年的利润金额：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    近三年的开票金额：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    近三年的纳税金额：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    当前金融机构借贷余额：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    当前非金融机构融资余额：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    对外担保情况：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    担保人：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    担保金额：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    担保期限：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12"><h4>人力薪资贷申请</h4>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    付款主体名称：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    开始合作期限：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    过去两年交易额：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    付款账期：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    项目当前应收款总额：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    项目员工总数：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    平均员工薪资：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    单个员工薪资上限：
                        
                    </el-form-item>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    本次申请借款总额：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    本次申请借款最长期限：
                        
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>

                <el-col :span="12">
                    本次借款指定回款及还款账户：
                        
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    本次借款质押的应收款金额：
                        
                    </el-form-item>
                </el-col>
                </el-row>
                <el-row>

                <el-col :span="12">
                    本次借款担保方式：
                        
                    </el-form-item>
                </el-col>
                </el-row>
                </el-card>

  </div>
</template>
<script>
export default {
  data() {
    return {
        show:true,
    };
  },
  mounted() {
  },
  methods: {
    // 我要还款
    reloan(){
        this.show=!this.show;
    },
  },
  watch: {},
  components: {}
};
</script>

 <style lang='less' scoped>
.box-card{
    border-top: 3px solid rgba(15, 182, 160, 0.849);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
.set-wapper{
    width:100%;
    height: 0;
    position: relative;
    padding-bottom: 80%;
}
.el-col h4{
    padding: 30px 0;
    color: blue;
}
</style>
