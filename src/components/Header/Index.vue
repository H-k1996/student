<template>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-dark">
        <el-row id="row">
          <el-col :span="6" class="leftzuo"
            ><div class="grid-content bg-purple">
              <span class="lvzuobian"></span>
              <router-link tag="span" to="/">学校资产管理系统</router-link>
            </div></el-col
          >
          <el-col :span="3"
            ><div class="grid-content bg-purple-light">
              <el-dropdown placement="top-start">
                <span class="el-dropdown-link baizi"> 资产管理 </span>
                <el-dropdown-menu slot="dropdown" class="shenlvse">
                  <el-dropdown class="zi">教学设备</el-dropdown>
                  <router-link tag="span" to="/jiao/storage">入库</router-link>
                  <router-link tag="span" to="/jiao/contact">接触和归还</router-link>
                  <router-link tag="span" to="/jiao/reportthelossof">挂失</router-link>
                  <router-link tag="span" to="/jiao/warranty">保修</router-link>
                  <router-link tag="span" to="/jiao/scrap">报废</router-link>
                  <br />
                  <br />

                  <el-dropdown class="zi">易耗品</el-dropdown>
                  <router-link tag="span" to="/yi/storage">入库</router-link>
                  <router-link tag="span" to="/yi/distribute">分发</router-link>
                  <router-link tag="span" to="/yi/cancel">核销</router-link>
                  <br />
                  <br />
                  <el-dropdown class="zi">地产</el-dropdown>
                  <router-link tag="span" to="/di/register">登记</router-link>
                  <router-link tag="span" to="/di/remould">改造</router-link>
                  <router-link tag="span" to="">核销</router-link>
                  <br />
                  <br />
                  <el-dropdown class="zi">房产</el-dropdown>
                  <router-link tag="span" to="/house/register">登记</router-link>
                  <router-link tag="span" to="/house/maintain">维修</router-link>
                  <router-link tag="span" to="/house/remould">改造</router-link>
                  <router-link tag="span" to="">核销</router-link>
                  <br />
                  <br />
                  <el-dropdown class="zi">其他资产</el-dropdown>
                  <router-link tag="span" to="/qi/storage">入库</router-link>
                  <router-link tag="span" to="/qi/reportthelossof">挂失</router-link>
                  <router-link tag="span" to="/qi/warranty">保修</router-link>
                  <router-link tag="span" to="/qi/scrap">报废</router-link>
                  <br />
                  <br />
                  <el-dropdown class="zi">项目</el-dropdown>
                  <router-link tag="span" to="/xiang/luru">录入</router-link>
                </el-dropdown-menu>
              </el-dropdown>
            </div></el-col
          >
          <el-col :span="3">
            <el-dropdown placement="top-start">
              <span class="el-dropdown-link baizi"> 申请&审批 </span>
              <el-dropdown-menu slot="dropdown" class="shenlvse">
                <el-dropdown class="zi">申请</el-dropdown>
                <router-link tag="span" to="">教学设备借入申请</router-link>
                <router-link tag="span" to="">易耗品领用申请</router-link>
                <router-link tag="span" to="">采购申请</router-link>
                <br />
                <br />

                <el-dropdown class="zi">审批</el-dropdown>
                <router-link tag="span" to="">教学设备借入申请</router-link>
                <router-link tag="span" to="">易耗品领用申请</router-link>
                <router-link tag="span" to="">采购申请</router-link>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="2">
            <el-dropdown placement="top-start">
              <span class="el-dropdown-link baizi"> 统计 </span>
              <el-dropdown-menu slot="dropdown" class="shenlvse">
                <el-dropdown class="zi">申请</el-dropdown>
                <router-link tag="span" to="">教学设备借入申请</router-link>
                <router-link tag="span" to="">易耗品领用申请</router-link>
                <router-link tag="span" to="">采购申请</router-link>
                <br />
                <br />
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="2">
            <el-dropdown placement="top-start">
              <span class="el-dropdown-link baizi"> 设置 </span>
              <el-dropdown-menu slot="dropdown" class="shenlvse">
                <el-dropdown class="zi">基础设置</el-dropdown>
                <router-link tag="span" to="">审批流程设置</router-link>
                <router-link tag="span" to="">资产存放地点设置</router-link>
                <router-link tag="span" to="">资产分类设置</router-link>
                <br />
                <br />
                <el-dropdown class="zi">系统设置</el-dropdown>
                <router-link tag="span" to="">组织结构管理</router-link>
                <router-link tag="span" to="">用户管理</router-link>
                <router-link tag="span" to="">角色管理</router-link>
                <br />
                <br />
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="3"
            ><div class="grid-content bg-purple baizi">操作日志</div></el-col
          >
          <el-col :span="2"
            ><div class="grid-content bg-purple baizi">帮助</div></el-col
          >
          <el-col :span="2"
            ><div class="grid-content bg-purple">
              <span><img src="../../assets/img/u9.png" id="rentu" /></span
              >&nbsp;张小丰
            </div></el-col
          >
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>
<style scoped>
::v-deep.el-popper[x-placement^=bottom] .popper__arrow{
  display: none;
}
::v-deep::v-deep{
  border: none;
}
.bg-purple-dark {
  background: #283643;
  width: 100%;
}
.grid-content {
  /* border-radius: 4px; */
  min-height: 36px;
}
#row {
  font-size: 16px;
  color: white;
  line-height: 50px;
}
#rentu {
  width: 40px;
  vertical-align: middle;
}
.leftzuo {
  margin-left: 20px;
  font-size: 20px;
  font-weight: bolder;
  position: relative;
}
.lvzuobian {
  width: 5px;
  height: 25px;
  background: #00b597;
  display: inline-block;
  position: absolute;
  top: 12px;
  left: -10px;
}
.el-dropdown-link {
  cursor: pointer;
  color: white;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.shenlvse {
  background: #2f4351;
}
.el-dropdown-link {
  cursor: pointer;
  color: white;
  font-size: 18px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.shenlvse .zi {
  color: white;
  display: inline-block;
  font-weight: bolder;
  font-size: 15px;
  width: 80px;
  margin-left: 30px;
  margin-top: 10px;
}
.shenlvse span {
  margin-right: 30px;
  color: white;
  font-size: 14px;
}
.baizi{
  font-size: 16px;
}
</style>