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
                        accept="image/jpeg,image/gif,image/png,application/pdf"
                        :limit="5"
                        :http-request="Upload"
                        :file-list='fileList'
                        action=""
                        multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        <div class="el-upload__tip" slot="tip">只能上传jpg/png/pdf文件，文件大小5M以内，上传文件总数量限制1-5份，至少上传1份</div>
                        </el-upload>
                        <!-- <el-upload :http-request="Upload" :multiple="true" 
                        :show-file-list="true" action="">
                        <el-button size="small" type="primary">点击上传</el-button>
                        </el-upload> -->
                    </el-card>

                    <!-- 列表 -->
        <div class="file-list">
          <!-- 预览 -->
            <section v-for="(file, index) of files" class="file-item draggable-item" 
            :key="file.name">
                <img :src="file.src" alt="" ondragstart="return false;">
                <span class="file-remove" @click="remove(index)">+</span>
            </section>

            <!-- 添加 -->
            <section v-if="status == 'ready'" class="file-item">
                <div @click="add" class="add"></div>
            </section>
        </div>

        <section v-if="files.length != 0" class="upload-func">
          <!-- 进度条 -->
            <div class="progress-bar">
                <section v-if="uploading" :width="(percent * 100) + '%'">
                    {{(percent * 100) + '%'}}</section>
            </div>
            <!-- 按钮 -->
            <div class="operation-box">
                <button v-if="status == 'ready'" @click="submit">上传</button>
                <button v-if="status == 'finished'" @click="finished">完成</button>
            </div>
        </section>
        <!-- 格式框 -->
        <input type="file" @change="fileChanged" ref="file" 
        multiple="multiple" accept="image/jpg,image/jpeg,image/png,image/bmp">
    </div>
                </div>

  </div>
</template>

<script>
import OSS from 'ali-oss';
export default {
  data() {
    return {
        buttonshow:true,
        status: 'ready',
        // 图片容器
        files: [],
        uploading: false,
        percent: 0,

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
      //完成
    finished() {
        this.files = []
        this.status = 'ready'
    },

//删除
    remove(index) {
        this.files.splice(index, 1)
    },

//辨别是否同一个文件
    fileChanged() {
        const list = this.$refs.file.files
        for (let i = 0; i < list.length; i++) {
            if (!this.isContain(list[i])) {
                const item = {
                    name: list[i].name,
                    size: list[i].size,
                    file: list[i]
                }
                this.html5Reader(list[i], item)
                this.files.push(item)
            }
        }
        this.$refs.file.value = ''
    },
    //查询列表是否包含同一个名字的文件
    isContain(file) {
      return this.files.find((item) => item.name === file.name && item.size === file.size)
    },
    // 将图片文件转成BASE64格式
    html5Reader(file, item){
        const reader = new FileReader()
        reader.onload = (e) => {
            this.$set(item, 'src', e.target.result)
        }
        reader.readAsDataURL(file)
    },
      // 添加图片
    add() {
        this.$refs.file.click()
    },
    // 上传图片
    submit() {
        console.log(this.files)
        var that=this
        var bucket;//OSS文件名称
        // var Region;//OSS区域
        var SecretId;
        var SecretKey;

        this.$axios({
            method: 'post',
            url: this.$store.state.domain +"/biz/getAliyunOss"
            })
        .then((response) => {
          if (response.data.code == 0) {
            bucket = response.data.bucket;
            // Region = response.data.detail.region;
            SecretId = response.data.secretId;
            SecretKey = response.data.secretKey;

          //  这里是OSS
            const client = new OSS.Wrapper({
                region: 'oss-cn-shenzhen',  
                accessKeyId: SecretId,
                accessKeySecret: SecretKey,
                bucket: bucket
            });
            //循环图片列表
            const fNum = this.files;
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
                    console.log('成功')
                    that.status="finished";
                    that.percent=1;
                }).catch(function (err) {
                    console.log(err);
                });
              }
          }
      })
    },
    
      Upload(file) {
            var bucket;//OSS文件名称
            // var Region;//OSS区域
            var SecretId;
            var SecretKey;
        this.$axios({
            method: 'post',
            url: this.$store.state.domain +"/biz/getAliyunOss"
            })
            .then(
                response => {
                    console.log('获取阿里云配置成功')
                    SecretKey = response.data.secretKey;
                    SecretId = response.data.secretId;
                    bucket = response.data.bucket;
                    
                    //后端提供数据
                    const client = new OSS({
                        region: 'oss-cn-shenzhen',
                        accessKeyId: SecretId,
                        accessKeySecret: SecretKey,
                        bucket: bucket
                    })
                    console.log('配置client成功')
                    var fileName = 'banner' + file.file.name 

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));
                    //时间戳
                    const obj=this.timestamp();
                    const storeAs = 'mssaas/'+obj+suffix  //  路径+时间戳+后缀名
                    console.log(client)

                    console.log(file)

                    //上传
                    client.put(storeAs,file.file).then(function (result){
                        console.log('成功')
                                // console.log(result);
                                // console.log(result.url);
                            }).catch(function (err) {
                                console.log('上传文件异常：'+err);
                        });
                        //失败  
                    },
                    //打印
                    response => {
                    console.log(response);
                    }
            )
    },
     
      //上传服务器
      submitUpload(file){
          console.log(file)
        var bucket;//OSS文件名称
            // var Region;//OSS区域
            var SecretId;
            var SecretKey;
        this.$axios({
            method: 'post',
            url: this.$store.state.domain +"/biz/getAliyunOss"
            })
            .then(
                response => {
                    console.log('获取阿里云配置成功')
                    SecretKey = response.data.secretKey;
                    SecretId = response.data.secretId;
                    bucket = response.data.bucket;
                    
                    //后端提供数据
                    const client = new OSS({
                        region: 'oss-cn-shenzhen',
                        accessKeyId: SecretKey,
                        accessKeySecret: SecretId,
                        bucket: bucket
                    })
                    console.log('配置client成功')
                    var fileName = 'banner' + file.file.name 

                    //后缀名
                    const suffix = fileName.substr(fileName.indexOf("."));
                    //时间戳
                    const obj=this.timestamp();
                    const storeAs = 'msbuc/'+obj+suffix  //  路径+时间戳+后缀名
                    console.log(client)

                    //上传
                    client.put(storeAs, file).then(function (result){
                                console.log(result);
                                console.log(result.url);
                            }).catch(function (err) {
                                console.log(err);
                        });
                        //失败  
                    },
                    //打印
                    response => {
                    console.log(response);
                    }
            )
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
          if(this.statues == '已结清' || this.statues == '审核中' || this.statues == '待放款'){
              this.buttonshow=false;//隐藏还款按钮
          }else if(this.statues == '待还款' || this.statues == '已逾期'){
              this.buttonshow=true;//显示还款按钮
          }
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
