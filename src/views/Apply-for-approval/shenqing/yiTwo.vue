<template>
  <div>
    <Header></Header>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark storageBox">
          <p>申请管理>教学设备借入申请>发起借入申请</p>
          <div class="baikuang">
            <router-link to="/shenqing/jiao" tag="p" class="rukus">&lt;&lt;返回</router-link>
            <p>
              <el-badge class="item">
                <el-button size="small" class="tianjia"
                  >加入借入申请单</el-button
                >
              </el-badge>
              <el-input v-model="input" placeholder="请输入内容" class="daxiao"></el-input>

              <el-button type="success" class="canxun">查询</el-button>
            </p>
            <div class="Table">
              <JiaoTableTwo></JiaoTableTwo>
            </div>
            <div class="xiaobaikuang">
              <div id="zuo"></div>
              <div id="you">
                <el-pagination
                  class="mTop"
                  background
                  layout="prev, pager, next"
                  :total="1000"
                >
                </el-pagination>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>


















    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark storageBox">
          <div class="baikuang">
            <p class="rukus">教学设备借入申请单</p>
            
            <div class="Table">
              <JiaoTableTwo></JiaoTableTwo>
            </div>
            <div class="xiaobaikuang">
              
            </div>
            <p><!-- Table -->
<el-button type="success" @click="dialogTableVisible = true" style="background:#00b698;margin-left: 550px;">提交申请</el-button>

<el-dialog title="领用申请提交" :visible.sync="dialogTableVisible" width="900px">
  <el-table :data="gridData"
    :header-cell-style="{background:'#D7D7D7',color:'#666666'}"
  >
    <el-table-column property="date" label="分类"></el-table-column>
    <el-table-column property="name" label="名称"></el-table-column>
    <el-table-column property="name" label="编码"></el-table-column>
    <el-table-column property="name" label="单价"></el-table-column>
    <el-table-column property="name" label="可用数量"></el-table-column>
    <el-table-column property="name" label="规格"></el-table-column>
    <el-table-column property="name" label="存放地点"></el-table-column>
    <el-table-column property="name" label="领用数量"></el-table-column>
  </el-table>
  <p style="margin-top:10px;">
      <span>备注(选填):</span>
      <br>
      <br>
      <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>

  <p>
      <el-button type="success" @click="tiao()" style="background:#00b698;margin-left: 570px;">提交</el-button>
      <el-button type="success" @click="dialogTableVisible = false" style="background:#e75564;margin-left: 30px;border:none">返回重新编辑</el-button>
  </p>
</el-dialog>
</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Header from "../../../components/Header/Index";
import JiaoTableTwo from "../../../components/shenqingTable/jiaoTableTwo";
export default {
  components: {
    Header,
    JiaoTableTwo
  },
  data() {
    return {
          textarea: '',
         gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      input: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      value1: "",
      value2: "",
      dialogTableVisible: false,
    };
  },
  methods: {
    tiao() {
      this.$router.push({
        path: "/shenqing/yi",
      });
    },
  },
};
</script>
<style scoped>
.daxiao{
    width: 250px;
    margin-left: 10px;
}
.storageBox {
  background: #f4f4f6;
  padding: 20px;
  font-size: 15px;
}
.baikuang {
  background: white;
}
.ruku {
  padding: 10px;
}
.shuru {
  width: 180px;
  margin-left: 20px;
}
.tianjia {
  background: #ff495b;
  margin-left: 20px;
  border: 1px solid #ff495b;
  color: white;
  /* padding: 5px; */
}
.riqi {
  width: 135px;
  margin-right: 5px;
}
.zuobian {
  margin-left: 5px;
}
.canxun {
  background: #00b698;
}
.orange {
  background: #ffa245;
  border: none;
}
.zuotwo {
  margin-left: 120px;
}
.zuothree {
  margin-left: 600px;
}
.xiaobaikuang {
  height: 50px;
}
#zuo {
  float: left;
}
#you {
  float: right;
}
.mTop {
  margin-top: 10px;
  margin-left: 20px;
}
.rukus {
  padding: 20px;
}

</style>
<style>
    .el-dialog__header{
  background: #00b698;
  color: white;
}
.el-dialog__title{
    color: white;
}
</style>