<template>
    <div class="set-wapper">
         <div class="heading-top">
        <el-row>
        <el-col :span="20">账号设置</el-col>
        <el-col :span="4">客服电话：110</el-col>
        </el-row>
        </div>

        <el-tabs tab-position="left" type="border-card" @tab-click="handleClick">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-tickets">账户信息</i></span>

                <el-card class="box-card">
                <el-row>
                   <el-col><div class="set-tit"><h3>企业基本信息栏</h3></div></el-col>
                </el-row>
                <el-row :gutter="24">
                <el-col :span="12">企业名称：</el-col>
                <el-col :span="12">统一社会征信号码或营业执照号码：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">注册地址：</el-col>
                <el-col :span="12">实际经营地址：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">注册资本：</el-col>
                <el-col :span="12">实缴资本：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">成立起止日：</el-col>
                <el-col :span="12">是否为一般纳税人：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">法定代表人姓名：</el-col>
                <el-col :span="12">法定代表人身份证号码：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">法定代表人联系电话：</el-col>
                <el-col :span="12">实际控制人姓名：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">实际控制人身份证号码：</el-col>
                <el-col :span="12">实际控制人联系电话：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">业务对接人姓名：</el-col>
                <el-col :span="12">业务对接人联系电话：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">业务对接人联系邮箱：</el-col>
                <el-col :span="12">财务对接人姓名：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">财务对接人联系电话：</el-col>
                <el-col :span="12">财务对接人联系邮箱：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">注册地址：</el-col>
                <el-col :span="12">实际经营地址：</el-col>
                </el-row>

                <el-row>
                   <el-col><div class="set-tits"><h3>银行卡信息</h3></div></el-col>
                </el-row>
                <el-row :gutter="24">
                <el-col :span="12">银行卡卡号：</el-col>
                <el-col :span="12">银行名称：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">账户户名：</el-col>
                <el-col :span="12">银行支行名称：</el-col>
                </el-row>

                </el-card>
            </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-goods">当期账单</i></span>

                <div v-if="show">
                <el-card class="box-card">
                <el-row :gutter="24">
                   <el-col :span="20"><div class="set-tit"><h3>还款概要</h3></div></el-col>
                   <el-col :span="4"><div class="set-statues"><h3>待还款</h3></div></el-col>
                </el-row>
                <el-row :gutter="24">
                <el-col :span="12">授信金额（元）：</el-col>
                <el-col :span="12">授信期限（天）：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">借款利率（%）：</el-col>
                <el-col :span="12">借款服务费（%）：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">应还款时间：</el-col>
                <el-col :span="12">应还款总金额（元）：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">应还款时间：</el-col>
                <el-col :span="12">应还款总金额（元）：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">已还本金（元）：</el-col>
                <el-col :span="12">剩余本金（元）：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">已还利息（元）：</el-col>
                <el-col :span="12">剩余利息（元）：</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">已还服务费（元）：</el-col>
                <el-col :span="12">剩余服务费（元）：</el-col>
                </el-row>

                <el-row>
                   <el-col><div class="set-tits"><h3>逾期概要</h3></div></el-col>
                </el-row>
                <el-row :gutter="24">
                <el-col :span="12">总逾期天数：</el-col>
                <el-col :span="12">累计罚息：</el-col>
                </el-row>

                <el-row>
                    <el-col>
                        <el-button style="width:100%;margin:30px 0;" type="danger" plain @click="reloan()">我要还款</el-button>
                    </el-col>
                </el-row>
                </el-card>
                </div>

                <div v-if="!show">
                    <el-card class="card-box">
                        
                    <el-row :gutter="24">
                    <el-col :span="12">
                        <div class="return">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item></el-breadcrumb-item>
                        <el-breadcrumb-item>上传凭证</el-breadcrumb-item>
                        </el-breadcrumb>
                        </div>
                    </el-col>
                    </el-row>

                        <el-upload
                        class="upload-demo"
                        ref="upload"
                        accept="image/jpeg,image/gif,image/png,application/pdf"
                        :limit="5"
                        list-type="picture"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :on-preview="handlePreview"
                        :on-remove="handleRemove"
                        :before-upload="beforeAvatarUpload"
                        :file-list="fileList"
                        :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png/pdf文件，文件大小5M以内，上传文件总数量限制1-5份，至少上传1份</div>
                        </el-upload>
                    </el-card>
                </div>

                </el-tab-pane>
            <el-tab-pane>
                <span slot="label"><i class="el-icon-edit-outline">修改密码</i></span>
                <el-card class="box-card">
                    <el-form label-width="150px">
                        <el-row>
                        <el-col :span="24">
                            <el-form-item label="账号：">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>

                        <el-row>
                        <el-col :span="24">
                            <el-form-item label="输入旧密码：">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>

                        <el-row>
                        <el-col :span="24">
                            <el-form-item label="输入新密码：">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>

                        <el-row>
                        <el-col :span="24">
                            <el-form-item label="再次输入新密码：">
                                <el-input></el-input>
                            </el-form-item>
                        </el-col>
                        </el-row>

                        <el-form-item>
                            <el-button type="primary" plain >确认修改</el-button>
                        </el-form-item>
                    </el-form>

                    
                </el-card>
                </el-tab-pane>
        </el-tabs>

    </div>
</template>
<script>
export default {
    data(){
        return{
            show:true,
            fileList: []
        }
    },
    methods:{
        //切换tab
        handleClick(){
            this.show=true;
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
    padding-bottom: 80%;
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
    margin:20px 0;
    font-size: 14px;
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
</style>

