<template>
<div>
<el-table
  
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    :header-cell-style="{background:'#D7D7D7',color:'#666666'}"
  >
    <el-table-column type="selection"> </el-table-column>
    <el-table-column label="姓名" width="250" >
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="用户名" width="250" > </el-table-column>
    <el-table-column
      prop="address"
      label="所属部门"
      show-overflow-tooltip
       width="250"
    >
    </el-table-column
    >
     
   
  </el-table>
</div>
  
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
        },{},{},{},{}
      ],
      multipleSelection: [],
      dialogVisible: false,
    };
  },

  methods: {
   
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
  
