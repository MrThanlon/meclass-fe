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
  }
]

const router = new VueRouter({
  routes
})

export default router
