<template>
  <div>
    <div id="myChartsas" :style="{ width: '250px', height: '250px' }"></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChartsas'))
        // 绘制图表
        myChart.setOption({
           tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['书桌', '乒乓球']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                {value: 335, name: '书桌',itemStyle: { color: '#fbab63' }},
                {value: 310, name: '乒乓球',itemStyle: { color: '#f15760' }},
                {value: 334, name: '联盟广告',itemStyle: { color: '#0085c2' }},
                {value: 135, name: '视频广告',itemStyle: { color: '#3ce4c7' }}
            ]
        }
    ]
        });
    }
  }
}
</script>
    