import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routeList = [
  {
    path: '/',
    component: () => import('@/views/home/home.vue'),
  },
  {
    path: '/page1',
    component: () => import('@/views/page1/home.vue'),
  },
  {
    path: '/page2',
    component: () => import('@/views/page2/home.vue'),
  }
]
const route = new VueRouter({
  routes: routeList
})

export default route