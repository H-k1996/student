<template>
  <div>
    <Header></Header>
    <el-row>
      <el-col :span="24"
        ><div class="grid-content bg-purple-dark storageBox">
          <p>教学设备管理>设备入库</p>
          <div class="baikuang">
            <p class="ruku">入库记录</p>
            <p>






<!-- Form -->
<el-button type="text" @click="dialogFormVisible = true">
  <el-button type="danger" class="tianjia">+添加设备</el-button>
</el-button>

<el-dialog title="新增设备" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="请选择分类" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="编码" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="单价" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" style="width:220px"></el-input>元
    </el-form-item>
    <el-form-item label="数量" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>
    <el-form-item label="规则" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off" style="width:220px"></el-input>
    </el-form-item>



    <el-form-item label="存放地点" :label-width="formLabelWidth">
      <el-select v-model="form.regions" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>

  <el-radio v-model="radio" label="1" class="juzuo">是</el-radio>
  <el-radio v-model="radio" label="2">否</el-radio>
    
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>




              <el-input
                v-model="input"
                placeholder="请输入内容"
                class="shuru"
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
              <Table></Table>
            </div>
            <div class="xiaobaikuang">
              <div id="zuo">
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-warning mTop"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  确定上报
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="myModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myModalLabel"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">数据上报</h4>
                      </div>
                      <div class="modal-body">
                        <Tabletow></Tabletow>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                        >
                          确定上报
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-warning mTop"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  查看上报信息
                </button>

                <!-- Modal -->
                <div
                  class="modal fade"
                  id="myModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myModalLabel"
                >
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                        <h4 class="modal-title" id="myModalLabel">数据上报</h4>
                      </div>
                      <div class="modal-body">
                        <Tabletow></Tabletow>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-default"
                          data-dismiss="modal"
                        >
                          确定上报
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
import Table from "../../../../components/Table/index";
import Tabletow from "../../../../components/Table/Tabletow";
export default {
  components: {
    Header,
    Table,
    Tabletow,
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