<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    :header-cell-style="{ background: '#D7D7D7', color: '#666666' }"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column label="分类" width="100">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="名称" width="100"> </el-table-column>
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
      label="数量"
      width="100"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="规格"
      width="100"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="存放地点"
      width="100"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="是否唯一"
      width="100"
      show-overflow-tooltip
    >
    </el-table-column>

    <el-table-column
      prop="address"
      label="入库时间"
      width="110"
      show-overflow-tooltip
    >
    </el-table-column>
    <el-table-column
      prop="address"
      label="修理数量"
      width="100"
      show-overflow-tooltip
    >
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
.text {
  height: 30px;
  width: 30px;
}
::v-deep.el-table th > .cell {
  text-align: center;
}
::v-deep.el-table .cell {
  text-align: center;
}
</style>