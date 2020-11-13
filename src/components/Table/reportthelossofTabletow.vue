<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    :header-cell-style="{ background: '#D7D7D7', color: '#666666' }"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column label="分类" width="110">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="名称" width="70"> </el-table-column>
    <el-table-column
      prop="address"
      label="编码"
      width="80"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="单击(元)"
      width="80"
      show-overflow-tooltip
    >
    </el-table-column
    ><el-table-column
      prop="address"
      label="挂失数量"
      width="80"
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
    ><el-table-column prop="address" label="存放地点" show-overflow-tooltip>
    </el-table-column
    ><el-table-column prop="address" label="入库时间" show-overflow-tooltip>
    </el-table-column>

    <el-table-column prop="address" label="挂失数量" show-overflow-tooltip>
      <button @click="reduce()">-</button>
      <span><input type="text" v-model="num4" class="text" /></span>
      <button @click="add()">+</button>
      <!-- <el-input-number v-model="num4" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number> -->
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
          address: "上海市普陀区金沙江路 1518 弄",
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