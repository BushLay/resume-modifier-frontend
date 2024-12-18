import { createRouter, createWebHistory } from 'vue-router'
import Index from '../Index.vue'
import ChartPage from '../ChartPage.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/chart',
    name: 'Chart',
    component: ChartPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 