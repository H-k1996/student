<template>
  <el-table :data="tableData" style="width: 100%" :header-cell-style="{background:'#D7D7D7',color:'#666666'}">
    <el-table-column prop="date" label="分类" width="100"> </el-table-column>
    <el-table-column prop="name" label="名称" width="100"> </el-table-column>
    <el-table-column prop="address" label="编码"> </el-table-column>
    <el-table-column prop="address" label="单价"> </el-table-column>
  </el-table>
</template>

<script>
export default {
     data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普'
          }]
        }
      }
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