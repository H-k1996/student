<template>
  <div>
    <Header></Header>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark storageBox">
          <p>易耗品管理>易耗品分布>集体分布</p>
          <div class="baikuang">
            <router-link to="/yi/distribute" tag="p" class="ruku">&lt;&lt;返回</router-link>

            <p>
              <el-input
                v-model="input"
                placeholder="请输入内容"
                class="shuru zuodain"
              ></el-input>
              <span class="ruku">入库时间:</span>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
                class="riqi"
              >
              </el-date-picker>
              <span>---</span>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期"
                class="riqi zuobian"
              >
              </el-date-picker>
              <el-button type="success" class="canxun">查询</el-button>
            </p>
            <div class="Table">
              <CollectiveTable></CollectiveTable>
            </div>
            <div class="xiaobaikuang">
              <div id="zuo">
                <p class="xuanzhe">选择领用人</p>
                <div class="heikuang">
                  <el-tree
                    :data="data"
                    show-checkbox
                    node-key="id"
                    :default-expanded-keys="[1, 11]"
                    :default-checked-keys="[11]"
                    :props="defaultProps"
                  >
                  </el-tree>
                </div>     
                <p><el-button type="success" class="canxun wei">提交</el-button></p>
              </div>
              <div id="you">
                  <el-input
                v-model="input"
                placeholder="请输入内容"
                class="shuru shurus"
              ></el-input>
              <el-button type="success" class="canxun ">查询</el-button><br>
              <Collectivetabletwo></Collectivetabletwo>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Header from "../../../../components/Header/Index";
import CollectiveTable from "../../../../components/yiTable/collectiveTable";
// import Tabletow from "../../../../components/Table/Tabletow";
import Collectivetabletwo from "../../../../components/yiTable/collectivetabletwo";

export default {
  components: {
    Header,
    CollectiveTable,
    Collectivetabletwo
    // Tabletow,
  },
  data() {
    return {
      data: [
        {
          id: 1,
          label: "01恒谦中学",
          children: [
            {
              id: 4,
              label: "011初中部",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
            {
              id: 4,
              label: "012高中部",
              children: [
                {
                  id: 9,
                  label: "012a数学组",
                },
                {
                  id: 11,
                  label: "012b语文组",
                },
                {
                  id: 10,
                  label: "012c英语组",
                },
                {
                  id: 10,
                  label: "012d理科组",
                },
                {
                  id: 10,
                  label: "012e文科组",
                },
              ],
            },
            {
              id: 4,
              label: "013行政组",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      input2: "",
      radio: "1",
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        regionss: "",
        name: "",
        region: "",
        date1: "",
        date2: "",
        data3: "",
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
.wei{
    margin-left: 20px;
    margin-top: 10px;
}
.cankan {
  height: 40px;
  margin-left: 5px;
  border: 1px solid #ff495b;
  color: #ff495b;
}
.Table {
  margin-left: 22px;
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
  height: 1000px;
}
.ruku {
  padding: 15px;
}
.shuru {
  width: 300px;
  /* margin-top: 60px; */
  margin-bottom: 20px;
}
.shurus{
  margin-top: 60px;
}
.zuodain{
    margin-left: 25px;
}
.tianjia {
  background: #ff495b;
  margin-left: 10px;
  padding: 13px;
  border: none;
  color: white;
}
.riqi {
  width: 150px;
  margin-right: 10px;
}
.zuobian {
  margin-left: 15px;
}
.canxun {
  background: #00b698;
}
.orange {
  background: #ffa245;
  border: none;
}
.zuotwo {
  margin-left: 10px;
}
.zuothree {
  margin-left: 110px;
}
.xiaobaikuang {
  height: 50px;
}
#zuo {
  float: left;
  margin-left: 20px;
}
.xuanzhe {
  padding: 20px 0 10px 20px;
}
.heikuang {
  width: 400px;
  height: 300px;
  border: 1px solid black;
  margin-left: 20px;
}
#you {
  float: left;
  margin-left: 40px;
}
.mTop {
  margin-top: 10px;
  margin-left: 20px;
}
</style>