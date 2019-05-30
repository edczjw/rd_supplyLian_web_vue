<template>
  <div class="topBanner">
    <div class="side-tit">
      <p class='left'><span>民盛小贷</span> 供应链金融服务平台
      </p>
    </div>
    <p class='right' @click="goBack" title="安全退出">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shouye"></use>
      </svg></p>
    <p class='right' title="用户名">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-character"></use>
      </svg>admin</p>
    <p class='right' @click="screenfull" title="全屏显示">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-quanping4"></use>
      </svg></p>
    <p class='right' @click="tabcontrol" title="折叠菜单栏">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-cebianlanshousuo"></use>
      </svg></p>
    
  </div>
</template>
<script>

import screenfull from 'screenfull'
export default {
  data(){
      return{
      isFullscreen: false
    }
  },
  mounted() {
      window.onresize = () => {
            // 全屏下监控是否按键了ESC
            if (!this.checkFull()) {
              // 全屏下按键esc后要执行的动作
              this.isFullscreen = false
            }
          }
       },
  methods: {
    //返回上一页
    lastpage(){
      window.history.go(-1);
    },
     /**
     * 全屏事件
     */
    screenfull() {
      if (!screenfull.enabled) {
        this.$message({
          message: 'Your browser does not work',
          type: 'warning'
        })
        return false
      }
      screenfull.toggle()
      this.isFullscreen = true
    },
    /**
     * 是否全屏并按键ESC键的方法
     */
    checkFull() {
      var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled
      // to fix : false || undefined == undefined
      if (isFull === undefined) {
          isFull = false
      }
      return isFull
    },

    //退出登陆
    goBack() {
      var _this = this;
      this.$confirm('确认退出吗?', '提示', {
        //type: 'warning'
      }).then(() => {
        // sessionStorage.removeItem('user');
        sessionStorage.setItem("name", 'str');//本地存储用户名
        this.$router.push('/login');
      }).catch(() => {

      });
      // this.$router.push("/login");
    },

    //折叠
    tabcontrol(){
      this.$store.state.isLeftHiden=!this.$store.state.isLeftHiden;
    }
  }
};
</script>

<style scoped>
* {
  font-family: '黑体';

  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.roulink{
  font-size: 12px;
}
.roulink:hover{
  color: rgba(223, 186, 20, .842);
}
.topBanner {
  line-height: 50px;

  position: fixed;
  left: 0;
  right: 0;
  z-index: 99;

  width: 100%;
  height: 50px;
  background: #72d0eb;
  border-bottom: 1px solid #a0d9ea;
}

p {
  padding-left: 20px;
}

.left {
  font-family: '黑体';
  font-size: 21px;
  color: #f3faef;
  float: left;
  font-weight: bolder;
}
.left span{
     font-size: 28px;
     color: #b86e0e;
     opacity: 1;
     padding-right: 10px;
     border-right: 2px solid rgba(175, 105, 105, 0.63);
 }
.left .icon-tip{
  width: 40px;
  height: 40px;
}

.right {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 12px;

  float: right;

  margin-right: 5px;

  cursor: pointer;

  color: rgb(182, 21, 231);
}

.right:hover {
  color: #eee;
}

svg {
  width: 30px;
  height: 30px;
  padding: 3px 8px;
  color: #fff;
}

svg:hover {
  color: #eee;
}
</style>
