<template>
    <div class="loan-wapper">
        <div class="heading-top">
        <el-row>
        <el-col :span="24">我要借款 <i class="el-icon-arrow-right"></i> 产品选择</el-col>
        </el-row>
        </div>
        <el-card class="box-card">
           <el-tabs v-model="activeName2" type="border-card">
                <el-tab-pane label="全部产品" name="first">
                    <el-collapse v-model="activeName" accordion @change="handleChange">
                    <el-collapse-item title="产品一" name="1">
                        <div class="loan-need"><h3><i class="el-icon-edit-outline"></i>申请所需材料:</h3><br>
                                请提前准备好复印件：<br>
                                <i class="el-icon-check"></i>1. 企业统一社会信用代码证副本；<br>
                                <i class="el-icon-check"></i>2. 公司章程；<br>
                                <i class="el-icon-check"></i>3. 法定代表人、实际控制人、股东的身份证；<br>
                                <i class="el-icon-check"></i>4. 近期(不少于3个月)经营结算账户的流水；<br>
                                <i class="el-icon-check"></i>5. 银行要求的其他资料。</div>
                        <el-row class="row">
                        <el-button type="success" plain @click="appliy()">申请</el-button>
                        </el-row>
                    </el-collapse-item>
                    <el-collapse-item title="产品二" name="2">
                        <div class="loan-need"><h3><i class="el-icon-edit-outline"></i>申请所需材料:</h3><br>
                                请提前准备好复印件：<br>
                                <i class="el-icon-check"></i>1. 企业统一社会信用代码证副本；<br>
                                <i class="el-icon-check"></i>2. 公司章程；<br>
                                <i class="el-icon-check"></i>3. 法定代表人、实际控制人、股东的身份证；<br>
                                <i class="el-icon-check"></i>4. 近期(不少于3个月)经营结算账户的流水；<br>
                                <i class="el-icon-check"></i>5. 银行要求的其他资料。</div>
                        <el-row class="row">
                        <el-button type="success" plain @click="appliy()">申请</el-button>
                        </el-row>
                    </el-collapse-item>
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
            productCd:'M001',//产品
        }
    },
    components:{
    },
    methods: {
        handleChange(val){
            if(val=='1'){
                this.productCd='M006'
            }else if(val=='2'){
                this.productCd='M006'
            }else{
                this.productCd='M006'
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
