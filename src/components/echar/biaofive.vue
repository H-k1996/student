<template>
  <div>
    <div id="myChartsa" :style="{ width: '1200px', height: '300px' }"></div>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChartsa"));
      // 绘制图表
      myChart.setOption({
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['2012年']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
    },
    yAxis: {
        type: 'category',
        data: ['后勤设备', '文体设备', '教学设备', '行政办公设备']
    },
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [82003, 29489, 7034, 104970]
        }
    ]
      });
    },
  },
};
</script>
    