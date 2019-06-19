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
                <el-col :span="12">借款日利率（%）：{{detail.creditRate*100}}</el-col>
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

                <el-row v-if="buttonshow">
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
                        drag
                        accept="image/jpeg,image/png,application/pdf"
                        :limit="5"
                        :http-request="Upload"
                        :file-list='fileList'
                        :on-exceed="handleExceed"
                        :before-upload="beforeAvatarUpload"
                        :on-change="handleChange"
                        action=""
                        list-type="picture"
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png/pdf文件格式，每个文件大小5M以内，上传文件总数量限制1-5份，至少上传1份</div>
                        </el-upload>
                        <el-progress v-if="videoFlag2" :percentage="videoUploadPercent2" style="margin-top:30px;"></el-progress>

                        <el-row style="margin-top:20px;">
                            <el-button type="success" @click="makesure">确认上传</el-button>
                        </el-row>
                    </el-card>
                </div>
            </div>

  </div>
</template>

<script>
// import OSS from 'ali-oss';
export default {
  data() {
    return {
            videoFlag2:false,//进度条
            videoUploadPercent2:0,
        buttonshow:true,//显示隐藏按钮
        show:true,
        statues:"",//订单状态
        detail:"",
        fileList:[],//文件容器
        auditingImage:[],//存储文件url
    };
  },
  mounted() {
      this.godetail();//获取信息
  },
  methods: {
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 5 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      //对文件列表进行控制
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-5);
      },
       // 图片上传前验证:限制用户上传的图片格式和大小
      beforeAvatarUpload (file) {
        const isimg = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'application/pdf';
        const isLt5M = file.size / 1024 / 1024 < 5;

        if (!isimg) {
        this.$message.error('上传文件只能是jpg/png/pdf文件格式!');
        }

        if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 5MB!')
        }
        return isimg && isLt5M;
      },

    //上传
      Upload(file) {
        this.videoFlag2= true;
        const OSS = require('ali-oss');
            let _self = this;
            var bucket;//OSS文件名称
            var region;
            var extranet;
            var accessKeyId;
            var accessKeySecret;
        this.$axios({
            method: 'post',
            url: this.$store.state.domain +"/biz/getAliyunOss"
            })
            .then(
                response => {// 向后台发请求 拉取OSS相关配置
                    
                    //后端提供数据
                    const client = new OSS({
                        region: 'oss-cn-shenzhen',// 服务器集群地区
                        extranet: response.data.extranet,
                        accessKeyId:response.data.secretId, // OSS帐号
                        accessKeySecret:response.data.secretKey, // OSS 密码
                        bucket:response.data.bucket // 阿里云上存储的 Bucket
                        })
                    console.log('配置client成功！')
                    console.log(client)

                    // 存储路径，并且给图片改成唯一名字
                    var fileName = file.file.name 

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));

                    //时间戳
                    const obj=this.timestamp();

                    //时间戳
                    const obj2=this.timestamp1();

                    //获取企业编号
                    const enterpriseNo = sessionStorage.getItem("enterpriseNo");

                    const storeAs = 'prod/meson/msscloan/file/enterprise/'+obj+'/'+enterpriseNo+'/repaymentvoucher/'+obj2+'-'
                    +fileName

                    
                            //保存
                    _self.auditingImage.push('http://mssaas.oss-cn-shenzhen.aliyuncs.com/'+storeAs)

                    //上传
                    client.multipartUpload(storeAs,file.file,{
                        progress:function (p) { //获取进度条的值
                            // console.log(p)
                            _self.videoUploadPercent2 = p*100
                            
                        }}).then(res => {
                        if(res.url!=null || res.url!=""){
                            
                            // console.log('服务器返回的文件url：')
                            // //返回服务器文件url
                            // console.log(res.url)
                            
                            this.videoFlag2 = false;
                            _self.videoUploadPercent2 = 0;
                            
                            this.$notify({
                            title: '上传结果',
                            type: 'success',
                            offset: 100,
                            dangerouslyUseHTMLString: true,
                            message: '<strong>'+file.file.name+'文件已选择！</strong>',
                            position: 'bottom-left'
                            });
                            console.log(file.file.name+'文件上传成功！')
                        }
                            }).catch(err => {
                                this.$message.error('上传文件异常');
                                console.log('上传文件异常：');
                                console.log(err)
                        });
                        //失败  
                    },
                    //打印
                    response => {
                    console.log(response);
                    }
            )
    },

    makesure(){
         //把上传图片的url发给后台做记录
        this.$axios({
                method: 'post',
                url: this.$store.state.domain +"/biz/saveVoucher",
                data:{
                    processNo:this.$route.query.processNo,
                    imagesUrl:this.auditingImage
                }
                })
                .then(
                    response => {
                            if(response.data.code==0){
                                this.$alert('所有凭证文件上传完成', '上传结果', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        console.log(response.data.msg);
                                        console.log(response.data.detail.result);
                                    }
                                    });
                            }else{
                                console.log(response.data.msg);
                            }
                        }, response => {
                            console.log(response);
                        });
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
    return ""+y+'-'+this.Add0(m)+'-'+this.Add0(d);  
},
Add0:function(m){  
    return m<10?'0'+m : m;  
} ,

//  时间戳1
timestamp1(){  
    const time = new Date();  
    const y = time.getFullYear();  
    const m = time.getMonth()+1;  
    const d = time.getDate();  
    const h = time.getHours();  
    const mm = time.getMinutes();  
    const s = time.getSeconds();  
    return ""+y+'-'+this.Add1(m)+'-'+this.Add1(d)+'_'+this.Add1(h)+this.Add1(mm)+this.Add1(s);  
},
Add1:function(m){  
    return m<10?'0'+m : m;  
} ,

godetail(){
    this.statues = this.$route.query.status
//   if(this.statues == '已结清' || this.statues == '审核中' || this.statues == '待放款'){
//       this.buttonshow=false;//隐藏还款按钮
//   }else if(this.statues == '待还款' || this.statues == '已逾期'){
//       this.buttonshow=true;//显示还款按钮
//   }
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
