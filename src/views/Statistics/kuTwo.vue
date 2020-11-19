<template>
    <div>
         <p>
              <!-- Form -->
            <span style="margin-left:20px">教学设备目录：一级目录</span>

            
              
          <el-input v-model="input" placeholder="请输入内容" class="shuru" style="margin-left:650px"></el-input>
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
    </div>
</template>
<script>
import KuTable  from "../../components/StatisticsTable/kuTable"
export default {
    components:{
        KuTable
    },
    data(){
        return{
            input:""
        }
    }
}
</script>
<style scoped>
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