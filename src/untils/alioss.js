var OSS = require('ali-oss').Wrapper
export function client() {
this.$axios({
    method: 'post',
    url: this.$store.state.domain +"/biz/getAliyunOss"
})
.then(
    response => {
        var client = new OSS({
            region: 'oss-cn-shenzhen',
            accessKeyId: response.data.secretId,
            accessKeySecret: response.data.secretKey,
            bucket: response.data.bucket
        })  //后端提供数据
        return client
})
}