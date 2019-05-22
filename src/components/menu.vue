<template>
<!-- template必须包裹一个div，否则会报错 -->
<div class="side" :class="{'side-menu' : this.$store.state.isLeftHiden}">
   <el-row>
      <el-col>
        <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#2a3542" text-color="rgb(226, 228, 229)" active-text-color="rgb(68, 196, 235)"
        :collapse="this.$store.state.isLeftHiden">
        
            <router-link to="/user/usergoods" >
                <el-menu-item index="1">
                    <i class="el-icon-menu"></i>
                    <span slot="title">我的订单</span>
                </el-menu-item>
            </router-link>
            <router-link to="/user/userloan" >
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">我要借款</span>
                </el-menu-item>
            </router-link>
            <router-link to="/user/userset" >
                <el-menu-item index="3">
                    <i class="el-icon-menu"></i>
                    <span slot="title">账号设置</span>
                </el-menu-item>
            </router-link>

        </el-menu>
  </el-col>
   </el-row>
</div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      
    }
  }
</script>

<style scoped  lang=less>
  .el-menu {
      border-color: #2a3542;
  }

/* 菜单 */
.side {
  position: fixed;

  width: 199px;
  height: 100%;
  transition: all .5s;

  background-color: #2a3542;
}

.side-menu {
  width: 64px;
  transition: all .5s;
  background-color: #2a3542;
}

/* 修边 */
.el-menu {
  /* important的意义在于优先于它内部定义的样式 */
  margin: -.3px !important;
}

.el-menu-item {
  text-align: center;
}


</style>