<template>
  <div>
    <Header></Header>
    <div id="content">
      <div id="baikuang">
        <p>
          代办事项
          <el-badge :value="9" class="item xiadian"></el-badge>
        </p>
        <div id="zuo">
          <p>
            <span class="hongyuan"></span>&nbsp;<span class="qiantiao"
              >1条教学设备借入申请</span
            ><span>最近一条时间：2017-11-03 09:00</span>
          </p>
          <p>
            <span class="hongyuan"></span>&nbsp;<span class="qiantiao"
              >1条易耗品领用申请</span
            ><span>最近一条时间：2017-11-03 09:00</span>
          </p>
          <p>
            <span class="hongyuan"></span>&nbsp;<span class="qiantiao"
              >1条教学设备保修申请</span
            ><span>最近一条时间：2017-11-03 09:00</span>
          </p>
        </div>
        <div id="you">
          <p>
            <span class="hongyuan"></span>&nbsp;<span class="qiantiao"
              >1条教学设备借入申请</span
            ><span>最近一条时间：2017-11-03 09:00</span>
          </p>
          <p>
            <span class="hongyuan"></span>&nbsp;<span class="qiantiao"
              >1条易耗品领用申请</span
            ><span>最近一条时间：2017-11-03 09:00</span>
          </p>
          <p>
            <span class="hongyuan"></span>&nbsp;<span class="qiantiao"
              >1条教学设备保修申请</span
            ><span>最近一条时间：2017-11-03 09:00</span>
          </p>
        </div>
      </div>

      <div id="baikuang2">
        <p>资产监控</p>
        <div class="sixiaokuang">
          <div class="fang">
            <span class="redbox">
              <i class="el-icon-s-order white"></i>
            </span>
            <span class="redboxs">
              <span class="testone">资产总量</span>
              <span class="testtwo">138,000</span>
            </span>
          </div>
          <div class="fang">
            <span class="yellowbox">
              <i class="el-icon-s-order white"></i>
            </span>
            <span class="yellowboxs">
              <span class="testone">资产总额</span>
              <span class="testtwo">10,138,000</span>
            </span>
          </div>
          <div class="fang">
            <span class="bluebox">
              <i class="el-icon-s-order white"></i>
            </span>
            <span class="blueboxs">
              <span class="testone">房产面积</span>
              <span class="testtwo">7,738,000</span>
            </span>
          </div>
          <div class="fang">
            <span class="greenbox">
              <i class="el-icon-s-order white"></i>
            </span>
            <span class="greenboxs">
              <span class="testone">地产面积</span>
              <span class="testtwo">638,000</span>
            </span>
          </div>
        </div>
        <div class="sixiaokuangs">
          <Biaoone></Biaoone>
        </div>
        <div class="sixiaokuangs">
          <Biaotwo></Biaotwo>
        </div>
        <div class="sixiaokuangs">
          <Biaothree></Biaothree>
        </div>
        <div class="sixiaokuangs">
          <Biaofour></Biaofour>
        </div>
      </div>
      <div id="baikuang3">
        <p>资产统计</p>
        <p>
          <span class="xiaof xiaolv">设备分类数量统计 </span>
          <span class="xiaof">设备分类金额统计</span>
          <span class="xiaof">易耗品分类数量统计</span>
          <span class="xiaof">易耗品分类金额统计</span>
        </p>
        <div class="zhutong">
          <Biaofive></Biaofive>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.xiadian{
  margin-top: 10px;
}
#content {
  background: #f5f5f7;
  padding: 30px;
}
#baikuang {
  background: white;
  padding: 3px;
  height: 200px;
  padding-left: 30px;
}
#zuo {
  float: left;
  font-size: 15px;
}
#you {
  float: right;
  margin-right: 200px;
  border-left: 1px dashed #dadada;
  padding-left: 20px;
}
.qiantiao {
  width: 200px;
  display: inline-block;
}
.hongyuan {
  display: inline-block;
  width: 2px;
  height: 2px;
  background: red;
  border-radius: 50%;
  border: 1px solid red;
  vertical-align: middle;
}
#baikuang2 {
  width: 1255px;
  background: white;
  padding: 3px;
  height: 400px;
  padding-left: 30px;
  margin-top: 20px;
  /* border: 1px solid red; */
}
.fang {
  width: 280px;
  height: 90px;
  display: inline-block;
  margin-right: 25px;
}

.redbox {
  display: inline-block;
  width: 70px;
  height: 90px;
  background: #d1525e;
  float: left;
}
.white {
  color: white;
  font-size: 40px;
  line-height: 90px;
  padding-left: 15px;
}
.redboxs {
  display: inline-block;
  width: 210px;
  height: 90px;
  background: #ff4a5b;
  /* float: right; */
  position: relative;
}
.testone {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 18px;
  color: white;
}
.testtwo {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  font-size: 30px;
  font-weight: bolder;
}
.yellowbox {
  display: inline-block;
  width: 70px;
  height: 90px;
  background: #d18e51;
  float: left;
}
.yellowboxs {
  display: inline-block;
  width: 210px;
  height: 90px;
  background: #ffa048;
  float: right;
  position: relative;
}
.bluebox {
  display: inline-block;
  width: 70px;
  height: 90px;
  background: #1e7caa;
  float: left;
}
.blueboxs {
  display: inline-block;
  width: 210px;
  height: 90px;
  background: #0086c7;
  float: right;
  position: relative;
}
.greenbox {
  display: inline-block;
  width: 70px;
  height: 90px;
  background: #1e9d88;
  float: left;
}
.greenboxs {
  display: inline-block;
  width: 210px;
  height: 90px;
  background: #00b597;
  float: right;
  position: relative;
}
.sixiaokuangs {
  margin-top: 10px;
  height: 200px;
  display: inline-block;
  margin-left: 40px;
}
#baikuang3 {
  width: 1255px;
  background: white;
  padding: 3px;
  height: 400px;
  padding-left: 30px;
  margin-top: 20px;
  /* border: 1px solid red; */
}
.xiaof{
  width: 140px;
  height: 40px;
  background: #e4e4e4;
  font-size: 13px;
  display: inline-block;
  text-align: center;
  line-height: 40px;
  color: #666666;
  margin-right: 30px;
}
.xiaolv{
  background: #00b698;
  color: white;
}
</style>

<script>
import Header from "../../components/Header/Index";
import Biaoone from "../../components/echar/biaoone";
import Biaotwo from "../../components/echar/biaotwo";
import Biaothree from "../../components/echar/biaothree";
import Biaofour from "../../components/echar/biaofour";
import Biaofive from "../../components/echar/biaofive";
export default {
  components: {
    Header,
    Biaoone,
    Biaotwo,
    Biaothree,
    Biaofour,
    Biaofive
  },
};
</script>