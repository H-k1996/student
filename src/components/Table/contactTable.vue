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
    <el-table-column label="分类" width="135">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="名称" width="60"> </el-table-column>
    <el-table-column prop="address" label="编码" width="90"> </el-table-column>
    <el-table-column prop="unitprice" label="单价(元)" width="80">
    </el-table-column>

    <el-table-column prop="numberoflent" label="借出数量" width="70">
    </el-table-column>
    <el-table-column prop="specification" label="规格" width="70">
    </el-table-column
    ><el-table-column prop="nameofborrower" label="借用人姓名" width="90">
    </el-table-column
    ><el-table-column prop="department" label="所在部门" width="90">
    </el-table-column
    ><el-table-column prop="outtime" label="借出时间" width="90">
    </el-table-column
    ><el-table-column prop="returntime" label="归还时间" width="100">
    </el-table-column
    ><el-table-column
      prop="returnthenumberof"
      label="归还数量"
      width="80"
    ></el-table-column
    ><el-table-column
      prop="returnthestatus"
      label="归还状态"
      width="100"
    ></el-table-column
    ><el-table-column
      prop="thenumberoflost"
      label="丢失数量"
      width="80"
    ></el-table-column
    ><el-table-column prop="operation" label="操作" width="120">
      <el-button
        type="text"
        @click="dialogTableVisible = true"
        style="color: black"
        >查看</el-button
      >

      <el-dialog
        title="归还"
        :visible.sync="dialogTableVisible"
        append-to-body="true"
      >
        <p class="juzhong">03036752 行政办公设备 办公桌</p>
        <img src="../../assets/chu.png" /> </el-dialog
      > 
      <!-- <span>查看</span>&nbsp; -->
      <el-button
        type="text"
        @click="dialogFormVisible = true"
        style="color: #00b698"
        >归还</el-button
      >

      <el-dialog
        title="归还"
        :visible.sync="dialogFormVisible"
        append-to-body="true"
      >
        <p class="juzhong">03036752 行政办公设备 办公桌</p>
        <div class="da">
          <div class="zuo">
            <p>单价：100.00元</p>
            <p>存放地点：实验室1</p>
            <p>借出时间：2017-11-15</p>
            <p>
              归还数量：<el-input-number
                v-model="num"
                @change="handleChange"
                size="mini"
                :min="1"
                :max="10"
                label="描述文字"
              ></el-input-number>
            </p>
          </div>
          <div class="you">
            <p>规格：普通</p>
            <p>借用人姓名：李飘飘</p>
            <p>借出数量：10</p>
            <p>
              是否有损坏：<el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </p>
          </div>
          <p>
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="textarea"
              maxlength="30"
              show-word-limit
            >
            </el-input>
          </p>
        </div> </el-dialog
      > 

      <!-- <span>查看</span>&nbsp; -->
      <el-button
        type="text"
        @click="dialogFormVisibles = true"
        style="color: #f15760"
        >挂失</el-button
      >

      <el-dialog
        title="借出挂失"
        :visible.sync="dialogFormVisibles"
        append-to-body="true"
      >
        <div class="da">
          <div class="zuo">
            <p>分类:行政办公设备</p>
            <p>单价：100.00元</p>
            <p>存放地点：实验室1</p>
            <p>借出时间：2017-11-15</p>
            <p>
              归还数量：<el-input-number
                v-model="num"
                @change="handleChange"
                size="mini"
                :min="1"
                :max="10"
                label="描述文字"
              ></el-input-number>
            </p>
          </div>
          <div class="you">
            <p>名称:办公桌</p>
            <p>规格：普通</p>
            <p>借用人姓名：李飘飘</p>
            <p>借出数量：10</p>
            <p>
              是否有损坏：<el-radio v-model="radio" label="1">是</el-radio>
              <el-radio v-model="radio" label="2">否</el-radio>
            </p>
          </div>
          <p>
            <el-input
              type="textarea"
              placeholder="请输入内容"
              v-model="textarea"
              maxlength="30"
              show-word-limit
            >
            </el-input>
          </p>
        </div> </el-dialog
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
<script>
import Tabletow from "../Table/Tabletow";

export default {
  components: {
    Tabletow,
  },
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