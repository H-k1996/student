<template>
  <div>
    <Header></Header>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark storageBox">
          <p>房产管理>房产改造</p>
          <div class="baikuang">
            <p class="ruku">改造记录</p>
            <p>






<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">
  <el-button type="danger" class="tianjia">+新增改造</el-button>
</el-button>
            <el-dialog
              title="新增改造"
              :visible.sync="dialogFormVisible"
              width="1000px"
            >
              <p>
                <el-input
                  v-model="input4"
                  placeholder="请输入编码或名称"
                  class="input3"
                ></el-input>
                
                
                 <span class="ruku">改造时间:</span>
                <el-date-picker
                  v-model="value3"
                  type="date"
                  placeholder="选择日期"
                  class="riqi"
                >
                
                </el-date-picker>
                
                <el-date-picker
                  v-model="value5"
                  type="date"
                  placeholder="选择日期"
                  class="riqi"
                >
                
                </el-date-picker>
                <el-button type="success">查询</el-button>

              </p>
              <RemouldTableTow></RemouldTableTow>
              <p style="margin-top: 10px">
                <span class="ruku">改造时间:</span>
                <el-date-picker
                  v-model="value6"
                  type="date"
                  placeholder="选择日期"
                  class="riqi"
                >
                </el-date-picker>
              </p>
              <p>
               <span class="ruku">改造内容及原因:</span>
                <el-input
                  type="textarea"
                  :rows="2"
                  placeholder="请输入内容"
                  v-model="textarea"
                  class="min"
                >
                </el-input>
              </p>
              <p class="bian">
                  <el-button type="success" @click="dialogFormVisible = false">提交</el-button>
              </p>
            </el-dialog>




              <el-input
                v-model="input"
                placeholder="请输入内容"
                class="shuru"
              ></el-input>
              <span class="ruku">改造时间:</span>
              <el-date-picker
                v-model="value1"
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
              <el-button type="success" class="orange zuotwo"
                >批量导入</el-button
              >
              <el-dropdown>
                <el-button type="primary" class="orange zuothree">
                  更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>导入全部</el-dropdown-item>
                  <el-dropdown-item>导入选中</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </p>
            <div class="Table">
              <MaintainTable></MaintainTable>
            </div>
            <div class="xiaobaikuang">
              <div id="zuo">
                <button
                  type="button"
                  class="mTop anniu"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  批量删除
                </button>
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
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Header from "../../../../components/Header/Index";
import MaintainTable from "../../../../components/houseTable/maintainTable";
import RemouldTableTow from "../../../../components/diTable/remouldTableTow";

export default {
  components: {
    Header,
    MaintainTable,
    RemouldTableTow
  },
  data() {
    return {
      radio: '1',
      dialogTableVisible: false,
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
       value3: "",
      value4: "",
      value5: "",
      value6: "",
    };
  },
};
</script>
<style scoped>
.anniu {
  background: none;
  border: 1px solid #00b698;
  color: #00b698;
  padding: 5px;
}
.juzuo{
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
<style scoped>
.bian{
  margin-left: 892px;
}
.min{
    margin-top: 10px;
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
.anniu {
  background: none;
  border: 1px solid #00b698;
  color: #00b698;
  padding: 5px;
}
.input2 {
  width: 300px;
  margin-left: 20px;
}.input3 {
  width: 300px;
}
</style>
<style>
.el-button--success{
  background: #00b698;
  border: none;
}
.el-dialog__header{
  background: #00b698;
}
.el-dialog__title{
  color: white;
}
</style>