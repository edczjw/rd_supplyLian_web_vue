<template>
  <div>
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
        
        //跳转返回顶部
        if(document.body.scrollTop > 0) {
                window.scrollTo(0, -1);
                document.body.scrollTop = 0;
            }
            window.scrollTo(0, -1);
            document.body.scrollTop = 0;
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
