import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import './style.css'
import App from './App.vue'
import VueApexCharts from "vue3-apexcharts"

// 确保导入组件
import Index from './Index.vue'
import ChartPage from './ChartPage.vue'

const app = createApp(App)

app.use(Antd)
app.use(VueApexCharts)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/index', component: Index },
    { path: '/chart', component: ChartPage },
  ],
})

app.use(router)
app.mount('#app')