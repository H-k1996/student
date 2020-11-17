<template>
  <div>
    <Header></Header>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark storageBox">
          <p>房产管理>房产登记</p>
          <div class="baikuang">
            <p class="ruku">房产记录</p>
            <p>






<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">
  <el-button type="danger" class="tianjia">+添加房产</el-button>
</el-button>
<el-dialog title="新增地产" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="编码" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
     <el-form-item label="房产名称" :label-width="formLabelWidth">
      <el-input v-model="form.date1" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
<p>是否拥有房产证：<el-radio v-model="radio" label="1">备选项</el-radio> <el-radio v-model="radio" label="2">备选项</el-radio></p><br>
      
     
    <el-form-item label="房屋坐落：" :label-width="formLabelWidth">
      <el-input v-model="form.date2" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="房屋结构：" :label-width="formLabelWidth">
      <el-input v-model="form.resource" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
       <el-form-item label="层数:" :label-width="formLabelWidth">
      <el-input v-model="form.desc" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="建筑面积：" :label-width="formLabelWidth">
      <el-input v-model="form.desc" autocomplete="off" style="width:220px"></el-input>m²
    </el-form-item>
    <el-form-item label="套内建筑面积：" :label-width="formLabelWidth">
      <el-input v-model="form.desc" autocomplete="off" style="width:220px"></el-input>m²
    </el-form-item>




    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogFormVisible = false">提交</el-button>
  </div>
</el-dialog>




              <el-input
                v-model="input"
                placeholder="请输入内容"
                class="shuru"
              ></el-input>
              <span class="ruku">变更时间:</span>
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
              <RegisterTable></RegisterTable>
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
import RegisterTable from "../../../../components/houseTable/registerTable";
export default {
  components: {
    Header,
    RegisterTable,
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
</style>