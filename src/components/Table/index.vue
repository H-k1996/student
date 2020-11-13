<template>
  <el-table
    size="small "
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    :header-cell-style="{background:'#D7D7D7',color:'#666666'}"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column label="分类" width="140">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="名称" width="120"> </el-table-column>
    <el-table-column prop="address" label="编码" width="200"> </el-table-column>
    <el-table-column prop="name" label="单价(元)" width="100">
    </el-table-column>

    <el-table-column prop="name" label="数量" width="90"> </el-table-column>
    <el-table-column prop="name" label="规则" width="120"> </el-table-column
    ><el-table-column prop="name" label="存放地点" width="90"> </el-table-column
    ><el-table-column prop="name" label="是否唯一" width="100">
    </el-table-column
    ><el-table-column prop="name" label="入库时间" width="90"> </el-table-column
    ><el-table-column prop="name" label="上报状态" width="100">
    </el-table-column
    ><el-table-column prop="name" label="操作" width="120">





      <!-- Table -->
      <el-button type="text" @click="dialogTableVisible = true">编辑</el-button>

      <el-dialog
        title="收货地址"
        :visible.sync="dialogTableVisible"
        append-to-body="true"
      >
        <el-table :data="gridData">
          <el-table-column
            property="date"
            label="日期"
            width="150"
          ></el-table-column>
          <el-table-column
            property="name"
            label="姓名"
            width="200"
          ></el-table-column>
          <el-table-column property="address" label="地址"></el-table-column>
        </el-table>
      </el-dialog>



&nbsp;

      <el-button type="text" @click="open" style="color:red">删除</el-button>

    </el-table-column>
  </el-table>
</template>

<script>

export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          date: "行政办公设备-桌椅类",
          name: "王小虎",
          address: "03036752",
        },
      ],
      multipleSelection: [],

      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },

  methods: {
     open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
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
</style>
<style>
.el-dialog__header{
  background: #00b698;
}
.el-dialog__title{
  color: white;
}
.el-button--primary{
  background: #00b698;
}
.modal-header{
  background: #00b698;
}
.btn-default{
  background: #00b698;
  color: white;
}
.modal-title{
  color: white;
}

</style>