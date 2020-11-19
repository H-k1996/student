<template>
  <div>
    <Header></Header>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark storageBox">
          <p>教学设备管理>设备入库</p>
          <div class="baikuang">
            <p class="ruku">教学设备相关审批记录</p>
            <p>
              <span style="margin-left: 20px" class="an lvan"
                >教学设备库存</span
              >
              <span class="an">易耗品库存</span>
              <span class="an">其他资产库存</span>
            </p>

            <KuTwo></KuTwo>

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
import KuTwo from "../../views/Statistics/kuTwo";
import Biaosix from "../../components/echar/biaosix";
import Biaofour from "../../components/echar/biaofour";
export default {
  components: {
    Header,
    KuTwo,
    Biaosix,
    Biaofour,
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
  margin-left: 50px;
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