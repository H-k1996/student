<template>
  <div>
    <Header></Header>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark storageBox">
          <p>易耗品管理>易耗品分布</p>
          <div class="baikuang">
            <p class="ruku">分发记录</p>

        <p>




<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">
  <el-button type="danger" class="tianjia">+集体分布·</el-button>
</el-button>

<el-dialog title="新增设备" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="请选择分类" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="易耗品名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="编码" :label-width="formLabelWidth">
      <el-input v-model="form.regionss" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="单价" :label-width="formLabelWidth">
      <el-input v-model="form.date1" autocomplete="off" style="width:220px"></el-input>元
    </el-form-item>
    <el-form-item label="数量" :label-width="formLabelWidth">
      <el-input v-model="form.date2" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="规则" :label-width="formLabelWidth">
      <el-input v-model="form.data3" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>



    <el-form-item label="存放地点" :label-width="formLabelWidth">
      <el-select v-model="form.regions" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogFormVisible = false">提交</el-button>
  </div>
</el-dialog>


<el-badge :value="12" class="item">
  <el-button size="small" class="cankan">查看未处理的申请</el-button>
</el-badge>

              <el-input
                v-model="input"
                placeholder="请输入内容"
                class="shuru"
              ></el-input>
              <el-input
                v-model="input2"
                placeholder="领用人姓名"
                class="shuru"
              ></el-input>
              <span class="ruku">分布时间:</span>
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
              <DistributeTable></DistributeTable>
            </div>
            <div class="xiaobaikuang">
              <div id="zuo">
                
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
import DistributeTable from "../../../../components/yiTable/distributeTable";
import Tabletow from "../../../../components/Table/Tabletow";
export default {
  components: {
    Header,
    DistributeTable,
    Tabletow,
  },
  data() {
    return {
        input2:'',
      radio: '1',
      dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
            regionss:'',
          name: '',
          region: '',
          date1: '',
          date2: '',
          data3:'',
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
.cankan{
    height: 40px;
    margin-left: 5px;
    border: 1px solid #ff495b;
    color: #ff495b;
}
.Table{
    margin-left: 22px;
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
  padding: 15px;
}
.shuru {
  width: 140px;
  margin-left: 20px;
}
.tianjia {
  background: #ff495b;
  margin-left: 10px;
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
}
#you {
  float: right;
}
.mTop {
  margin-top: 10px;
  margin-left: 20px;
}
</style>