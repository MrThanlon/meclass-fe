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
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('../views/Video')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/Test')
  }
]

const router = new VueRouter({
  routes
})

export default router
