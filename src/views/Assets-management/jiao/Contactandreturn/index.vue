<template>
  <div>
    <Header></Header>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark storageBox">
          <p>教学设备管理>设备借出和归还</p>
          <div class="baikuang">
            <p class="rukus">借出和归还记录</p>
            <p>
              <el-badge :value="12" class="item">
                <el-button size="small" class="tianjia" @click="tiao()"
                  >查看未处理风险</el-button
                >
              </el-badge>
              <el-input
                v-model="input"
                placeholder="请输入编码或名称"
                class="shuru"
              ></el-input>
              <span class="ruku">借出时间:</span>
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

              <span class="ruku">归还时间:</span>
              <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期"
                class="riqi"
              >
              </el-date-picker>
              <span>---</span>
              <el-date-picker
                v-model="value2"
                type="date"
                placeholder="选择日期"
                class="riqi zuobian"
              >
              </el-date-picker>
              <el-button type="success" class="canxun">查询</el-button>
              <el-dropdown>
                <el-button type="primary" class="orange zuothree">
                  导出excel<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>导入全部</el-dropdown-item>
                  <el-dropdown-item>导入选中</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
            <div class="Table">
              <ContactTable></ContactTable>
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
  </div>
</template>
<script>
import Header from "../../../../components/Header/Index";
import Tabletow from "../../../../components/Table/Tabletow";
import ContactTable from "../../../../components/Table/contactTable";
export default {
  components: {
    Header,
    Tabletow,
    ContactTable,
  },
  data() {
    return {
      input: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
      },
      value1: "",
      value2: "",
    };
  },
  methods: {
    tiao() {
      this.$router.push({
        path: "/src/views/Assets-management/C-viewunhandledrisks",
      });
    },
  },
};
</script>
<style scoped>
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
  background: none;
  margin-left: 20px;
  border: 1px solid #ff495b;
  color: #ff495b;
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
  margin-left: 20px;
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