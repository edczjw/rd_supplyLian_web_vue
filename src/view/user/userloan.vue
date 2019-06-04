<template>
    <div class="loan-wapper">
        <div class="heading-top">
        <el-row>
        <el-col :span="24">我要借款 <i class="el-icon-arrow-right"></i> 产品选择</el-col>
        </el-row>
        </div>
        <el-card class="box-card">
           <el-tabs v-model="activeName2" type="border-card">
                <el-tab-pane label="小贷产品" name="first">
                    <el-collapse v-model="activeName" accordion @change="handleChange">
                    <el-collapse-item title="人力薪资贷" name="1">
                        <div class="loan-need"><h3><i class="el-icon-edit-outline"></i>申请所需材料:</h3><br>
                                请提前准备以下材料：<br>
                                <i class="el-icon-check"></i>前十大合作客户名单及年交易额（整理成.zip压缩包）；<br>
                                <i class="el-icon-check"></i>人力服务合同（扫描件加盖公章，整理成.zip压缩包）；<br>
                                <i class="el-icon-check"></i>5份以上劳动合同（扫描件加盖公章，整理成.zip压缩包）；<br>
                                <i class="el-icon-check"></i>近一年的核心企业回款记录（银行水单或网银导出数据，整理成.zip压缩包）；<br>
                                <i class="el-icon-check"></i>本次融资对应的发薪名单、金额（整理成.zip压缩包）；</br>
                                <i class="el-icon-check"></i>应收款对账凭证（原始邮件或对账单盖章，整理成.zip压缩包）。</div>
                        <el-row class="row">
                        <el-button type="success" plain @click="appliy()">申请</el-button>
                        </el-row>
                    </el-collapse-item>
                    <!-- <el-collapse-item title="产品二" name="2">
                        <div class="loan-need"><h3><i class="el-icon-edit-outline"></i>申请所需材料:</h3><br>
                                 请提前准备以下材料：<br>
                                <i class="el-icon-check"></i>前十大合作客户名单及年交易额（整理成.zip压缩包）；<br>
                                <i class="el-icon-check"></i>人力服务合同（扫描件加盖公章，整理成.zip压缩包）；<br>
                                <i class="el-icon-check"></i>5份以上劳动合同（扫描件加盖公章，整理成.zip压缩包）；<br>
                                <i class="el-icon-check"></i>近一年的核心企业回款记录（银行水单或网银导出数据，整理成.zip压缩包）；<br>
                                <i class="el-icon-check"></i>本次融资对应的发薪名单、金额（整理成.zip压缩包）；</br>
                                <i class="el-icon-check"></i>应收款对账凭证（原始邮件或对账单盖章，整理成.zip压缩包）。</div>
                        <el-row class="row">
                        <el-button type="success" plain @click="appliy()">申请</el-button>
                        </el-row>
                    </el-collapse-item> -->
                    </el-collapse>
                </el-tab-pane>
                <el-tab-pane label="更多产品" name="second">敬请期待</el-tab-pane>
            </el-tabs>
        </el-card>

    </div>
</template>
<script>
export default {
    data(){
        return{
            activeName2:'first',
            activeName:'',
            productCd:'10001',//产品
        }
    },
    components:{
    },
    methods: {
        handleChange(val){
            if(val=='1'){
                this.productCd='10001'
            }else if(val=='2'){
                this.productCd='10001'
            }else{
                this.productCd='10001'
            }
        },
        appliy(){
            var pro=this.productCd;
            sessionStorage.setItem("productCd", pro);//本地存储所选产品

            //判断产品跳转信息录入页面
                this.$router.push('/user/inputinfo/inputinfo1');
        }
    }
    
}
</script>
<style lang="less" scoped>
.loan-wapper{
    width:100%;
}
.box-card{
    border-top: 3px solid rgba(15, 182, 160, 0.849);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    
}
.row{
        text-align: center;
    }
.loan-need{
    font-family: '宋体';
    font-size: 16px;
    color: rgb(71, 70, 70);
    padding: 20px 15px;
    margin-bottom: 10px;
}
</style>
