<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    :header-cell-style="{background:'#D7D7D7',color:'#666666'}"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="分类"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="编码"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="单击(元)"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="数量"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="规格"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="入库时间"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="核销时间"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="审核状态"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="操作"
      width="180"
      show-overflow-tooltip>
      <span>
        <el-button type="text" @click="dialogVisible = true" style="color:black"
          >查看详情</el-button
        >

        <el-dialog
          append-to-body="true"
          title="保修详情"
          :visible.sync="dialogVisible"
          width="50%"
          :before-close="handleClose"
        >
          <div class="gaodu">
              <img src="../../assets/img/tongguo.png" id="dingwei"/>
              <p class="juzhong">03036752&nbsp;&nbsp;文具类&nbsp;&nbsp;圆珠笔</p>
            <div id="zuo">
                <br>
                <p>
                    单价：100.00元
                </p>
                <br>
                <p>
                    规格：普通
                </p>
                <br>
                <!-- <p>是否唯一：否</p><br> -->
                <p>入库时间：2017-12-09</p><br>
                <p>核销原因:易耗品损坏</p>
            </div>
            <div id="you">
                <br>
                <p>数量：1</p><br>
                <p>存放地点：实验室1</p><br>
                <p>核销时间：2017-10-6</p><br>
            </div>
          </div>
         
        </el-dialog> </span
      >&nbsp;
      <span>
        <el-button type="text" @click="dialogVisible = true" style="color:black"
          ></el-button
        >

        <el-dialog
          append-to-body="true"
          title="保修详情"
          :visible.sync="dialogVisible"
          width="50%"
          :before-close="handleClose"
        >
          <div class="gaodu">
              <img src="../../assets/img/tongguo.png" id="dingwei"/>
              <p class="juzhong">03036752&nbsp;&nbsp;文具类&nbsp;&nbsp;圆珠笔</p>
            <div id="zuo">
                <br>
                <p>
                    单价：100.00元
                </p>
                <br>
                <p>
                    规格：普通
                </p>
                <br>
                <!-- <p>是否唯一：否</p><br> -->
                <p>入库时间：2017-12-09</p><br>
                <p>核销原因:易耗品损坏</p>
            </div>
            <div id="you">
                <br>
                <p>数量：1</p><br>
                <p>存放地点：实验室1</p><br>
                <p>核销时间：2017-10-6</p><br>
            </div>
          </div>
         
        </el-dialog> </span
      >&nbsp;
      <span style="color:red">取消核销</span>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
        dialogVisible: false,
      }
    },

    methods: {
      
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
<style scoped>
::v-deep.el-table th > .cell {
    text-align: center;
}
::v-deep.el-table .cell {
    text-align: center;
}
</style>
<style scoped>
.gaodu{
    height: 300px;
    position: relative;
}
#dingwei{
    position: absolute;
    top: -20px;
    right: 50px;
}
#zuo {
  float: left;
  margin-left: 50px;
}
#you{
    float: right;
  margin-right: 100px;

}
.text {
  height: 30px;
  width: 30px;
}
.juzhong{
    text-align: center;
}
</style>