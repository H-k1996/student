<template>
  <el-table
    v-loading="loading"
    size="small "
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    :header-cell-style="{background:'#D7D7D7',color:'#666666'}"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection"> </el-table-column>
    <el-table-column label="盘点名称">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="创建人"> </el-table-column>
    <el-table-column prop="address" label="盘点开始时间"> </el-table-column>
    <el-table-column prop="address" label="盘点结束时间"> </el-table-column>
    <el-table-column prop="address" label="状态"> </el-table-column>
   <el-table-column prop="operation" label="操作">
      <el-button
        type="text"
        @click="dialogTableVisible = true"
        style="color: black"
        >开始盘点</el-button
      >
     

    

    

    </el-table-column>
  </el-table>
</template>
<style scoped>
.da {
  height: 350px;
}
.juzhong {
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
}
.zuo {
  float: left;
  display: inline-block;
  margin-left: 80px;
  font-size: 15px;
  margin-top: 10px;
}
.zuo p {
  margin-top: 30px;
}
.you {
  float: right;
  margin-right: 70px;
  font-size: 15px;
  display: inline-block;
  margin-top: 10px;
}
.you p {
  margin-top: 30px;
  margin-bottom: 30px;
}
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
    color:white;
  }
</style>
<script>
export default {
  data() {
    return {
      textarea: "",
      radio: "1",
      num: 1,
      tableData: [
        {
          date: "行政办公设备-桌椅类",
          name: "王小虎",
          address: "03036752",
          unitprice: "100.00",
          numberoflent: "10",
          specification: "普通",
          nameofborrower: "李飘飘",
          department: "语文组",
          outtime: "2017-11-1",
          returntime: "1",
          returnthenumberof: "0",
          returnthestatus: "全部归还",
          thenumberoflost: "0",
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
       dialogFormVisibles: false,
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