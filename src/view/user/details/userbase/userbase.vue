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
                    企业名称：{{detail.enterpriseName}}
                </el-col>
                <el-col :span="12">
                    统一社会征信号码或营业执照号码：{{detail.socialCode}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    注册地址：{{detail.registeredAddress}}
                </el-col>
                <el-col :span="12">
                    实际经营地址：{{detail.businessAddress}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    注册资本：{{detail.registeredCapital}}
                </el-col>
                <el-col :span="12">
                    实缴资本：{{detail.paidCapital}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    成立开始日：{{detail.startingDate}}
                </el-col>
                <el-col :span="12">
                    有效截止日：{{detail.endingDate}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    是否为一般纳税人：
                    <span v-if="detail.generalTaxpayers == '0'">
                    否
                    </span>
                    <span v-if="detail.generalTaxpayers == '1'">
                    是
                    </span>
                </el-col>
                <el-col :span="12">
                    法定代表人姓名：{{detail.legalName}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    法定代表人身份证号码：{{detail.legalIdCard}}
                </el-col>
                <el-col :span="12">
                    法定代表人联系电话：{{detail.legalPhone}}
                </el-col>
                </el-row>

               <el-row>
                <el-table :data="detail.controlList" border>
                <el-table-column property="controlName" label="实际控制人姓名" align="center"></el-table-column>
                <el-table-column property="controlIdCard" label="实际控制人身份证号码" align="center"></el-table-column>
                <el-table-column property="controlPhone" label="实际控制人联系电话" align="center"></el-table-column>
                </el-table>
                </el-row>

                <el-row>
                <el-table :data="detail.businessList" border>
                <el-table-column property="businessName" label="业务对接人姓名" align="center"></el-table-column>
                <el-table-column property="businessPhone" label="业务对接人联系电话" align="center"></el-table-column>
                <el-table-column property="businessMail" label="业务对接人联系邮箱" align="center"></el-table-column>
                </el-table>
                </el-row>

                <el-row>
                <el-table :data="detail.financeList" border >
                <el-table-column property="financeName" label="财务对接人姓名" align="center"></el-table-column>
                <el-table-column property="financePhone" label="财务对接人联系电话" align="center"></el-table-column>
                <el-table-column property="financeMail" label="财务对接人联系邮箱" align="center"></el-table-column>
                </el-table>
                </el-row>

                <!-- 银行卡信息 -->
                <el-row>
                <el-col :span="12"><h4>银行卡信息</h4>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    银行卡卡号：{{detail.cardNo}}
                </el-col>
                <el-col :span="12">
                    银行名称：{{detail.bankName}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    账户户名：{{detail.accountName}}
                </el-col>
                <el-col :span="12">
                    银行支行名称：{{detail.bankBranchName}}
                </el-col>
                </el-row>

                <!-- 企业财务信息栏 -->
                <el-row>
                <el-col :span="12"><h4>企业财务信息栏</h4>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    近三年经营收入金额：{{detail.threeYearIncome}}
                </el-col>
                <el-col :span="12">
                    近三年的利润金额：{{detail.threeYearProfit}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    近三年的开票金额：{{detail.threeYearInvoice}}
                </el-col>
                <el-col :span="12">
                    近三年的纳税金额：{{detail.threeYearTaxes}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    当前金融机构借贷余额：{{detail.financialLendingBalance}}
                </el-col>
                <el-col :span="12">
                    当前非金融机构融资余额：{{detail.unfinancialLendingBalance}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    对外担保情况：{{detail.externalGuarantees}}
                </el-col>
                <el-col :span="12">
                    担保人：{{detail.warrantorName}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    担保金额：{{detail.amountGuaranteed}}
                </el-col>
                <el-col :span="12">
                    担保期限：{{detail.warrantyPeriod}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12"><h4>人力薪资贷申请</h4>
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    付款主体名称：{{detail.paymentSubject}}
                </el-col>
                <el-col :span="12">
                    开始合作期限：{{detail.periodCooperation}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    过去两年交易额：{{detail.turnover}}
                </el-col>
                <el-col :span="12">
                    付款账期：{{detail.paymentPeriod}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    项目当前应收款总额：{{detail.totalReceivables}}
                </el-col>
                <el-col :span="12">
                    项目员工总数：{{detail.projectEmployees}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    平均员工薪资：{{detail.averageEmployeeSalary}}
                </el-col>
                <el-col :span="12">
                    单个员工薪资上限：{{detail.capEmployeeSalary}}
                </el-col>
                </el-row>

                <el-row>
                <el-col :span="12">
                    本次申请借款总额：{{detail.totalApplication}}
                </el-col>
                <el-col :span="12">
                    本次申请借款最长期限：{{detail.applicationDeadline}}
                </el-col>
                </el-row>
                <el-row>

                <el-col :span="12">
                    本次借款指定回款及还款账户：{{detail.repaymentAccount}}
                </el-col>
                <el-col :span="12">
                    本次借款质押的应收款金额：{{detail.pledgedReceivables}}
                </el-col>
                </el-row>
                <el-row>

                <el-col :span="12">
                    本次借款担保方式：{{detail.borrowingGuarantee}}
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
        detail:{},
    };
  },
  mounted() {
      this.getdetail();
  },
  methods: {
        
        getdetail(){
             this.$axios({
                        method: 'post',
                        url: this.$store.state.domain +"/biz/order/orderEnterpriseInfo",
                        data: {
                            processNo:this.$route.query.processNo
                        }
                    })
                    .then(
                        response => {
                        if(response.data.code==0){
                            this.detail = response.data.detail.result
                        }else{
                            this.$message.error(response.data.msg);
                        }
                        },
                        response => {
                        console.log(response);
                        }
                     )
        }
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
    color: rgba(241, 160, 38, 0.767);
    font-size: 18px;
    font-weight: bolder;
    border-bottom:1px solid #eee;
}

.el-row{
    margin:20px 0;
    font-size: 14px;
    padding: 15px 40px;
    font-family: '苹方'
    
}
</style>
