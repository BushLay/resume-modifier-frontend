<template>

  <Head />
  <div class="container">
    <a-table 
      :columns="columns" 
      :data-source="data" 
      @resizeColumn="handleResizeColumn"
      :row-key="record => record.key"
      bordered
  >
   
    <template #bodyCell="{ column, record }">

      <template v-if="column.key === 'type'">
        <a-tag v-for="tag in record.type" :key="tag"
          :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'">
          {{ tag.toUpperCase() }}
        </a-tag>
      </template>
      <!-- 薪资 -->
      <template v-if="column.key === 'salary'">
        <span>{{ record.minSalary }}$ - {{ record.maxSalary }}</span>
      </template>

      <!-- 申请按钮 -->
      <template v-else-if="column.key === 'apply'">
        <a-button type="primary" @click="openApplyLink(record.applyLink)">Apply</a-button>
      </template>
    </template>
  </a-table>
  </div>
  <button @click="handleMockData">Mock Data</button>
</template>
<script setup>
import Head from './components/head.vue'
import { ref } from 'vue';
import Mock from 'mockjs'

var mockData = Mock.mock({
    'list|10': [{  // 固定生成10条数据
        'key|+1': 1,  // 使用key替代id作为唯一标识
        'jobPublisher': '@cname',
        'jobTitle': '@cname',
        'releaseTime': '@date',
        'type|1-3': ['Full-time', 'Part-time', 'Remote'],  // 随机选择1-3个工作类型
        'location': '@city',
        'minSalary': '@integer(1000, 10000)',
        'maxSalary': '@integer(10000, 100000)',
        'applyLink': '@url'
    }]
})
const data = mockData.list
// 输出结果
function handleMockData() {
  console.log(JSON.stringify(mockData, null, 4))
}

// const data = [
  // {
  //   key: '1',
  //   jobPublisher: 'John Brown',
  //   jobTitle: 'New York No. 1 Lake Park',
  //   releaseTime: '2024-01-01',
  //   type: ['Full-time', 'Part'],
  //   location: 'New York',
  //   minSalary: '8000',
  //   maxSalary: '12000',
  //   //申请链接
  //   applyLink: 'https://www.baidu.com',
  // },
  // {
  //   key: '2',
  //   jobPublisher: 'Jim Green',
  //   jobTitle: 'London No. 1 Lake Park',
  //   releaseTime: '2024-01-01',
  //   type: ['Full-time', 'Part-time'],
  //   location: 'London',
  //   minSalary: '9000',
  //   maxSalary: '12000',
  //   //申请链接
  //   applyLink: 'https://www.google.com',
  // },
  // {
  //   key: '3',
  //   jobPublisher: 'Joe Black',
  //   jobTitle: 'Sidney No. 1 Lake Park',
  //   releaseTime: '2024-01-01',
  //   type: ['Full-time', 'Part-time'],
  //   location: 'Sidney',
  //   minSalary: '8000',
  //   maxSalary: '12000',
  //   //申请链接
  //   applyLink: 'https://www.bilibili.com',
  // },
// ];
const columns = ref([
  {
    title: 'Job Publisher',
    dataIndex: 'jobPublisher',
    key: 'jobPublisher',
  },
  {
    title: 'Job Title',
    dataIndex: 'jobTitle',
    key: 'jobTitle',
  },
  {
    title: 'Release Time',
    dataIndex: 'releaseTime',
    key: 'releaseTime',
  },
  {
    title: 'Type',
    key: 'type',
    dataIndex: 'type',
  },
  {
    title: 'Location',
    key: 'location',
    dataIndex: 'location',
  },
  {
    title: 'Salary',
    key: 'salary',
    dataIndex: 'salary',
  },
  {
    title: 'apply',
    key: 'apply',
    dataIndex: 'apply',
  }
]);
function handleResizeColumn(w, col) {
  col.width = w;
}

function openApplyLink(link) {
  window.open(link, '_blank');
}
</script>

<style scoped>
.container {
  width: 80%;
  height: 100%;
}
</style>
