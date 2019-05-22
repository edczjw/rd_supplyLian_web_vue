<template>
  <div>
    <div class="outpadding">
       <!-- <p class="xiangqingtitle"><i class="el-icon-location-outline"></i>北京华域</p> -->

      <el-tabs v-model="tabname" type="card">
        <!-- 有两大板块，分别来自不同的页面 -->
        <el-tab-pane label="订单信息" name="detailmore"></el-tab-pane>
        <el-tab-pane label="基本信息" name="userbase"></el-tab-pane>
      </el-tabs>
      <detailmore v-if="tabname=='detailmore'"></detailmore>
      <userbase v-if="tabname=='userbase'"></userbase>
    </div>
  </div>
</template>
<script>
import detailmore from "./userbase/detailmore";
import userbase from "./userbase/userbase";

export default {
  data() {
    return {
      detail: {},
      tabname: "detailmore",//默认打开的是基本信息
    };
  },
  mounted() {
  },
  methods: {
    
  },
  watch: {},
  components: {
    detailmore,
    userbase
  }
};
</script>

 <style lang='less' scoped>

.outpadding {
  padding: 30px 20px;

  background-color: rgb(252, 249, 249);
}
</style>
