<template>
  <div>
    <Header></Header>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark storageBox">
          <p>申请管理>采购申请>发起采购申请</p>
          <div class="baikuang">
            <router-link to="/shenqing/jiao" tag="p" class="rukus">&lt;&lt;返回</router-link>
      
            <div class="Table">
              <JiaoTableTwo></JiaoTableTwo>
            </div>
            <div class="xiaobaikuang">
              <div id="zuo"></div>
              <div id="you">
            
              </div>
              <p>
<el-button type="success" @click="dialogTableVisible = true" style="background:none;margin-left: 100px;margin-top:10px;color:#e75564;border:1px solid #e75564">新增一条</el-button>

<el-button type="success" @click="dialogTableVisible = true" style="background:#00b698;margin-left: 470px;margin-top:10px">提交申请</el-button>

              </p>
            </div>
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
        path: "/shenqing/jiao",
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