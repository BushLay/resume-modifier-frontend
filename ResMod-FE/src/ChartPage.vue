<template>
    <Head />
    <div style="width: 500px;height: 200px;">
        <!-- <apexchart 
            type="line" 
            :options="lineChartOptions" 
            :series="lineSeries" 
        /> -->
        <apexchart 
            type="bar" 
            height="350" 
            :options="salaryChartOptions" 
            :series="salarySeries"
        />
        <!-- <apexchart 
            type="bar" 
            height="350" 
            :options="salaryChartOptions" 
            :series="salarySeries"
        /> -->
    </div>
</template>

<script setup>
import Head from './components/head.vue'
import { ref } from 'vue'

// 企业薪资排行柱状图
// 柱状图配置
const salaryChartOptions = ref({
  chart: {
    id: 'salary-chart'
  },
  xaxis: {
    categories: ['city1', 'city2', 'city3', 'city4', 'city5', 'city6', 'city7', 'city8', 'city9', 'city10']
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      borderRadiusApplication: 'end',
      horizontal: true,
    }
  },
  dataLabels: {
    enabled: false
  },
})
// 柱状图数据
const salarySeries = ref([{
  name: 'Salary Data',
  data: [300, 450, 380, 560, 200, 100, 200, 300, 400, 500]
}])


</script>

<style>
.chart-container {
    width: 500px;
    height: 200px;
    overflow-y: auto;
    position: relative;
}

.chart-container .apexcharts-xaxis {
    position: sticky !important;
    bottom: 0;
    background-color: white;
    z-index: 10;
}
</style>