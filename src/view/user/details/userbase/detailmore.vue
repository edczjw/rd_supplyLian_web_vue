<template>
  <div>
      <div v-if="show">
                <el-card class="box-card">
                <el-row :gutter="24">
                   <el-col :span="20"><div class="set-tit"><h3>还款概要</h3></div></el-col>
                   <el-col :span="4"><div class="set-statues"><h3>{{this.statues}}</h3></div></el-col>
                </el-row>
                <el-row :gutter="24">
                <el-col :span="12">授信金额（元）：{{detail.creditLimit}}</el-col>
                <el-col :span="12">授信期限（天）：{{detail.creditTerm}}</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">借款利率（%）：{{detail.creditRate}}</el-col>
                <el-col :span="12">借款服务费率（%）：{{detail.creditFeeRate}}</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">应还款时间：{{detail.loanExpireDate}}</el-col>
                <el-col :span="12">应还款总金额（元）：{{detail.totalMoney}}</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">已还本金（元）：{{detail.paidPrincipal}}</el-col>
                <el-col :span="12">剩余本金（元）：{{detail.surplusPrincipal}}</el-col>
                </el-row>

                <el-row :gutter="24">
                <el-col :span="12">已还利息（元）：{{detail.paidInterest}}</el-col>
                <el-col :span="12">剩余利息（元）：{{detail.surplusInterest}}</el-col>
                </el-row>

                <el-row>
                   <el-col><div class="set-tits"><h3>逾期概要</h3></div></el-col>
                </el-row>
                <el-row :gutter="24">
                <el-col :span="12">逾期天数：{{detail.overdueDates}}</el-col>
                <el-col :span="12">已还罚息：{{detail.paidPenalty}}</el-col>
                </el-row>
                <el-row :gutter="24">
                <el-col :span="12">剩余罚息：{{detail.surplusPenalty}}</el-col>
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
                        <el-breadcrumb-item  style="cursor:pointer;"><b @click="goback">返回详情</b></el-breadcrumb-item>
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
                        action=""
                        :file-list="fileList"
                        :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png/pdf文件，文件大小5M以内，上传文件总数量限制1-5份，至少上传1份</div>
                        </el-upload>

                        <el-upload :http-request="Upload" :multiple="true" 
                        :show-file-list="false" action="">
                        <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload>
                    </el-card>
                </div>

  </div>
</template>
<script src="http://gosspublic.alicdn.com/aliyun-oss-sdk-4.3.0.min.js"></script>

<script>
import { client } from '../../../../untils/alioss'
export default {
  data() {
    return {
        show:true,
        statues:"",//订单状态
        detail:"",
        fileList:[],
        
        uploading: false,
        percent: 0,
    };
  },
  mounted() {
      this.godetail();//获取信息
  },
  methods: {
      Upload(file) {
      var fileName = 'banner' + file.file.uid 
        //定义唯一的文件名，打印出来的uid其实就是时间戳
            client().put(fileName, file.file).then(
        result => {
        // 大功搞成  
            //下面是如果对返回结果再进行处理，根据项目需要，下面是我们自己项目所用的，仅供参考
                this.fileList[0] =
                    { 
                    'name': result.name, 
                    'url': result.url 
                    }
                uploadBannerPic(this.fileList).then(res => { 
                    //根据需要可能项目还需对自己的数据库进行保存
                })
        })
        },

      //上传服务器
      submitUpload(){
          
        //  这里是OSS
        const OSS = require('ali-oss')
            var that=this
            var bucket;//OSS文件名称
            var extranet;
            var SecretId;
            var SecretKey;

        this.$axios({
                    method: 'post',
                    url: this.$store.state.domain +"/biz/getAliyunOss"
                })
                .then(
                    response => {
                        bucket = response.data.bucket;
                        extranet = response.data.extranet;
                        SecretId = response.data.secretId;
                        SecretKey = response.data.secretKey;

                        const client = new OSS.Wrapper({
                            region: 'oss-cn-shenzhen',  
                            accessKeyId: SecretId,
                            accessKeySecret: SecretKey,
                            bucket: bucket
                        });
                        alert(bucket+":"+SecretId+":"+SecretKey)

                        //循环图片列表
                        const fNum = this.fileList;
                        for(var i=0;i<fNum.length;i++){
                            var f=fNum[i].file
                            console.log(f)
                            const Name=f.name
                            console.log(Name)
                            //后缀名
                            const suffix = Name.substr(Name.indexOf("."));
                            //时间戳
                            const obj=this.timestamp();
                            const storeAs = 'msbuc/'+obj+suffix  //  路径+时间戳+后缀名
                            console.log(storeAs)

                            client.multipartUpload(storeAs, f).then(function (result){
                                console.log(result.res.requestUrls)
                                that.status="finished";
                                that.percent=1;
                            }).catch(function (err) {
                                console.log(err);
                            });
                        }
        })
      },

      //  时间戳
      timestamp(){  
          const time = new Date();  
          const y = time.getFullYear();  
          const m = time.getMonth()+1;  
          const d = time.getDate();  
          const h = time.getHours();  
          const mm = time.getMinutes();  
          const s = time.getSeconds();  
          return ""+y+this.Add0(m)+this.Add0(d)+this.Add0(h)+this.Add0(mm)+this.Add0(s);  
      },

      Add0:function(m){  
          return m<10?'0'+m : m;  
      } ,


      godetail(){
          this.statues = this.$route.query.status
          this.$axios({
                        method: 'post',
                        url: this.$store.state.domain +"/biz/orderInfo",
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
      },

    //返回
    goback(){
        this.show=!this.show;
        this.godetail();//获取信息
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
