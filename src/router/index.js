import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

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
    path: '/login',
    name: 'login',
    component: () => import('../views/Login')
  },
  {
    path: '/video/:videoId',
    name: 'video',
    component: () => import('../views/Video'),
    props: true
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/Test')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404')
  }
]

const router = new VueRouter({
  routes
})

export default router
