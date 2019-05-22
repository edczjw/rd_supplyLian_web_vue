<template>
    <div class="goods-wapper">
        <div class="heading-top">
        <el-row>
        <el-col :span="24">我的订单</el-col>
        </el-row>
        </div>
        <el-card class="box-card">
              <el-table :data="tableData" v-loading="listLoading"
            element-loading-text="拼命加载中" border
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)" 
            size="medium" stripe style="width: 100%;">
                <el-table-column prop="contractNumber" label="订单编号" align="center"> </el-table-column>
                <el-table-column prop="channel" label="申请金额（元）" align="center"> </el-table-column>
                <el-table-column prop="name" label="申请天数（天）" align="center"></el-table-column>
                <el-table-column prop="money" label="订单状态" align="center"> </el-table-column>
                <el-table-column prop="loanTime" label="订单时间" align="center"></el-table-column>
                <el-table-column prop="reportDate" label="操作" align="center"></el-table-column>
            </el-table>
        </el-card>

        <!-- 分页 -->
          <el-card>
            <el-pagination background style="text-align:center" 
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange" 
            :current-page="this.searchform.pageIndex"
             :page-sizes="[20,50,100]"  
             :page-size="this.searchform.pageSize" 
             layout="total, sizes, prev, pager, next" 
             :total="count"><!--这是显示总共有多少数据-->
            </el-pagination>
          </el-card>
    </div>
</template>
<script>
export default {
    data(){
        return{
            count:0,
            pageIndex:1,//当前页
            pageSize: 50,//每页展示的条数

            searchform:{
                pageIndex: 1,	//页码
                pageSize:50	//页面记录数
            }
        }
    }
}
</script>
<style lang="less" scoped>
.goods-wapper{
    width:100%;
}
.box-card{
    border-top: 3px solid rgba(15, 182, 160, 0.849);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}
</style>

