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
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column label="申请时间">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="采购物品"> </el-table-column>
    <el-table-column prop="address" label="审核状态"> </el-table-column>
   <el-table-column prop="operation" label="操作">
      <el-button
        type="text"
        @click="dialogTableVisible = true"
        style="color: black"
        >查看详情</el-button
      >
<el-dialog
        title="申请详情"
        :visible.sync="dialogTableVisible"
        append-to-body="true"
        width="1000px"
      >
      <p style="color:rgb(28, 133, 199)">2017年11月13日
        <img src="../../assets/img/shen.png" style="margin-left:750px"/>
      </p>
      <el-table
      :data="tableData"
      style="width: 100%"
    :header-cell-style="{background:'#D7D7D7',color:'#666666'}"
      >
      <el-table-column
        prop="name"
        label="名称"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="品牌"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="型号"
        >
      </el-table-column>
      <el-table-column
        prop="address"
        label="需采购数量">
      </el-table-column>
      <el-table-column
        prop="address"
        label="备注">
      </el-table-column>
    </el-table>
<p style="margin-top:20px"><img src="../../assets/img/shenhe.png"/></p>
        </el-dialog> 
    

      <!-- <span>查看</span>&nbsp; -->
      <el-button
        type="text"
        @click="dialogFormVisibles = true"
        style="color: #f15760"
        >撤回申请</el-button
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