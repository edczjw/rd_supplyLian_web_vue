<template>
    <div class="loan-wapper">
        <div class="heading-top">
        <el-row>
        <el-col :span="24">我要借款 <i class="el-icon-arrow-right"></i> 产品选择</el-col>
        </el-row>
        </div>
        <el-card class="box-card">

            <ul class="pro-ul">
                <li class="animated zoomIn">
                    <div class="inner-box">
                    <div><img src="../../assets/pro1.png" alt=""></div>
                <el-badge value="hot" class="item">
                    <div class="pro-tit">人力薪资贷</div>
                </el-badge>
                    </div>

                    <div class="desc-inner">
                        <div>需提前准备材料：</div><br>
                        <div><i class="el-icon-check"></i>  前十大合作客户名单及年交易额；</div><br>
                        <div><i class="el-icon-check"></i>  人力服务合同；</div><br>
                        <div><i class="el-icon-check"></i>  5份以上劳动合同；</div><br>
                        <div><i class="el-icon-check"></i>  近一年的核心企业回款记录；</div><br>
                        <div><i class="el-icon-check"></i>  本次融资对应的发薪名单、金额；</div></br>
                        <div><i class="el-icon-check"></i>  应收款对账凭证。</div>
                    </div>
                    <el-button type="success" @click="appliy('10001')">申请</el-button>
                </li>
                <li class="animated zoomIn">
                    <div class="inner-box">
                    <div><img src="../../assets/want.png" alt=""></div>
                    <div class="pro-tit">敬请期待</div>
                    </div>

                    <div class="desc-inner">
                        <div><i class="el-icon-check"></i>  敬请期待。</div>
                    </div>
                    <el-button type="success" disabled >申请</el-button>
                </li>
            </ul>

          
        </el-card>

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    components:{
    },
    methods: {
        appliy(val){
            var pro=val;
            sessionStorage.setItem("productCd", pro);//本地存储所选产品

            //判断产品跳转信息录入页面
                this.$router.push('/user/inputinfo/inputinfo1');
        }
    }
    
}
</script>
<style lang="less" scoped>
.pro-ul{
    width: 100%;
    display:inline-flex;
    list-style: none;
}
.pro-ul li{
    cursor: pointer;
    position: relative;
    text-align: center;
    border-radius: 6px;
    width: 26%;
    height: 448px;
    margin: 10px;
    overflow: hidden;
    border: 1px solid rgb(224, 223, 223);
    .el-button{
        position: absolute;
        width: 100%;
        border-radius: 0;
        height: 48px;
        font-size:18px;
        bottom: 0;
        left: 0;
    }
    img{
        width: 90px;
    }
    
}
.pro-ul li:hover{
    box-shadow: 0px 0px 5px #8888889f;
}
.inner-box{
    padding: 20px;
    border-bottom: 1px dotted rgba(202, 199, 199, 0.712);
    .pro-tit{
        margin-top: 10px;
        color: black;
        font-weight: bolder;
        font-size: 28px;
    }
}
.pro-tit:hover{
        color: rgb(52, 41, 214);
    }
.desc-inner{
    text-align: left;
    padding: 5px;
    font-size: 12px;
    color: rgb(117, 114, 114);
}
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    color: rgb(71, 70, 70);
    padding: 20px 125px;
    margin-bottom: 20px;
}
</style>
