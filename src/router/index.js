import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home')
  },
  {
    path: '/live',
    name: 'live',
    component: () => import('../views/Live')
  },
  {
    path: '/teacher',
    name: 'teacher',
    component: () => import('../views/Teacher')
  }
]

const router = new VueRouter({
  routes
})

export default router
