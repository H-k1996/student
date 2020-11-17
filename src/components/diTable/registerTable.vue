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
    <el-table-column label="编码" width="140">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="地产名称" width="120"> </el-table-column>
    <el-table-column prop="address" label="土地面积(m²)" width="200"> </el-table-column>
    <el-table-column prop="name" label="建筑面积((m²))" width="100">
    </el-table-column>

    <el-table-column prop="name" label="非建筑面积(m²)" width="90"> </el-table-column>
    <el-table-column prop="name" label="地址"> </el-table-column
    ><el-table-column prop="name" label="状态"> </el-table-column
    ><el-table-column prop="name" label="变更时间">
    </el-table-column
    ><el-table-column prop="name" label="入库时间"> </el-table-column
    ><el-table-column prop="name" label="操作" >

<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">
  <span type="danger">编辑</span>
</el-button>
<el-dialog title="新增地产" :visible.sync="dialogFormVisible" append-to-body="true">
  <el-form :model="form">
    <el-form-item label="编码" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
     <el-form-item label="地产名称" :label-width="formLabelWidth">
      <el-input v-model="form.date1" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="土地名称" :label-width="formLabelWidth">
      <el-input v-model="form.date2" autocomplete="off" style="width:220px"></el-input>m²
    </el-form-item>
    <el-form-item label="建筑面积" :label-width="formLabelWidth">
      <el-input v-model="form.resource" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
       <el-form-item label="地址" :label-width="formLabelWidth">
      <el-input v-model="form.desc" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>




    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogFormVisible = false">提交</el-button>
  </div>
</el-dialog>



      <!-- Table -->

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