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
    <el-table-column label="分类" >
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="名称" > </el-table-column>
    <el-table-column
      prop="address"
      label="编码"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="单击(元)"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="数量"
      width="80"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="规格"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="存放地点"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="入库时间"
      show-overflow-tooltip
    >
    </el-table-column>

    <el-table-column
      prop="address"
      label="分布个数"
      show-overflow-tooltip
    >
<el-input-number size="mini" v-model="num4"></el-input-number>
    </el-table-column>
     
   
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
  
