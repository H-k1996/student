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
      label="申请人姓名"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="所在部门"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="申请时间"
      show-overflow-tooltip>
    </el-table-column>
    <el-table-column
      prop="address"
      label="借入设备"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="借入时间"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="预计归还时间"
      show-overflow-tooltip>
    </el-table-column><el-table-column
      prop="address"
      label="操作"
      show-overflow-tooltip>
      <span style="color:#52b6b3">借出</span>&nbsp;
      
<span  @click="dialogFormVisible = true" style="color:#ff495b">拒绝</span>

<el-dialog title="拒绝申请" :visible.sync="dialogFormVisible" append-to-body="true">
  <el-form :model="form">
   
    拒绝原因:<el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>

  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="danger" @click="dialogFormVisible = false">确 定 拒 绝</el-button>
  </div>
</el-dialog>








    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
           textarea: '',
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区'
        }],
        multipleSelection: []
      }
    },

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