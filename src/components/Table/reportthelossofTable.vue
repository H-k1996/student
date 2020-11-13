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
      label="挂失数量"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="规格"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="挂失类型"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="审批状态"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="挂失时间"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="操作"
      show-overflow-tooltip>
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
        multipleSelection: []
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