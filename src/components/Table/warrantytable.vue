<template>
  <el-table
  
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    :header-cell-style="{background:'#D7D7D7',color:'#666666'}"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column label="分类" width="110">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="名称" width="90"> </el-table-column>
    <el-table-column
      prop="address"
      label="编码"
      width="90"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="单击(元)"
      width="100"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="保修数量"
      width="90"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="规格"
      width="90"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="保修时间"
      width="100"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="修理状态"
      width="100"
      show-overflow-tooltip
    >
    </el-table-column>

    <el-table-column
      prop="address"
      label="修理时间"
      width="100"
      show-overflow-tooltip
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="修理花销"
      width="100"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      width="100"
      label="审批状态"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column prop="address" label="操作" width="200" show-overflow-tooltip>
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
              <p class="juzhong">03036752&nbsp;&nbsp;行政办公设备&nbsp;&nbsp;办公桌</p>
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
                <p>是否唯一：否</p><br>
                <p>报修时间：2017-12-09</p><br>
                <p>维修时间：2017-12-09</p>
            </div>
            <div id="you">
                <br>
                <p>数量：1</p><br>
                <p>存放地点：库房1</p><br>
                <p>入库时间：2017-10-6</p><br>
                <p>故障原因：易耗品损坏</p><br>
                <p>维修金额：1000元</p>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog> </span
      >&nbsp; 
      
      
      
      
      <span>
        <el-button type="text" @click="dialogVisible = true" style="color:black"
          >编辑</el-button
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
              <p class="juzhong">03036752&nbsp;&nbsp;行政办公设备&nbsp;&nbsp;办公桌</p>
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
                <p>是否唯一：否</p><br>
                <p>报修时间：2017-12-09</p><br>
                <p>维修时间：2017-12-09</p>
            </div>
            <div id="you">
                <br>
                <p>数量：1</p><br>
                <p>存放地点：库房1</p><br>
                <p>入库时间：2017-10-6</p><br>
                <p>故障原因：易耗品损坏</p><br>
                <p>维修金额：1000元</p>
            </div>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false"
              >确 定</el-button
            >
          </span>
        </el-dialog> </span
      >
      
      
      
      
       &nbsp;
      <span style="color:red">取消保修</span>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      num4: 4,
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: " 1518 弄",
        },
      ],
      multipleSelection: [],
      dialogVisible: false,
    };
  },

  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    reduce() {
      this.num4--;
      alert(this.num4);
    },
    add() {
      this.num4++;
    },
    handleChange(value) {
      console.log(value);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
};
</script>
<style scoped>
::v-deep.el-table th > .cell {
    text-align: center;
}
::v-deep.el-table .cell {
    text-align: center;
}
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
::v-deep.el-table th > .cell {
    text-align: center;
}
::v-deep.el-table .cell {
    text-align: center;
}
</style>
<style>
    .el-button--primary{
        background: #00b698;
    }
    .el-dialog__header{
        background: #00b698;
    }
</style>
  
