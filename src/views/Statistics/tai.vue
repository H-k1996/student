<template>
  <div>
    <Header></Header>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark storageBox">
          <p>统计分析>台账</p>
          <div class="baikuang">
            <p class="ruku">台账记录</p>
            <p>
              <span style="margin-left: 20px" class="an lvan"
                >教学设备台账</span
              >
              <span class="an">易耗品台账</span>
              <span class="an">其他资产台账</span>
            </p>

            <p>
              <!-- Form -->
            <span style="margin-left:20px">教学设备目录：一级目录</span>

            
              
          <el-input v-model="input" placeholder="请输入内容" class="shuru" style="margin-left:120px"></el-input>
          &nbsp;<span>统计日期:&nbsp;<el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>---<el-date-picker
      v-model="value2"
      type="date"
      placeholder="选择日期">
    </el-date-picker></span>
              <el-button type="success" class="canxun">查询</el-button>
                <el-button type="primary" class="orange zuothree">
                  更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>导入全部</el-dropdown-item>
                  <el-dropdown-item>导入选中</el-dropdown-item>
                </el-dropdown-menu>
            </p>
            <div class="Table">
                <KuTable></KuTable>
            </div>

            <div class="xiaobaikuang">
              <div id="zuo">
                <!-- Button trigger modal -->
              </div>
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
            <div class="ding">
              <img src="../../assets/img/tong.png"/>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Header from "../../components/Header/Index";
import KuTable from "../../components/StatisticsTable/kuTable"
export default {
  components: {
    Header,
    KuTable,
  },
  data() {
    return {
      radio: "1",
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
      input: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
    };
  },
};
</script>
<style scoped>

.an {
  display: inline-block;
  width: 140px;
  height: 40px;
  background: #e4e4e4;
  text-align: center;
  line-height: 40px;
  margin-right: 10px;
}
.lvan {
  background: #00b597;
  color: white;
}
.juzuo {
  margin-left: 50px;
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
  padding: 20px;
}
.shuru {
  width: 250px;
  margin-left: 20px;
}
.tianjia {
  background: #ff495b;
  margin-left: 20px;
}
.riqi {
  width: 150px;
  margin-right: 20px;
}
.zuobian {
  margin-left: 20px;
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
  margin-left: 30px;
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
</style>