<template>
  <div class="home" style="min-width: 720px">
    <header class="d-flex align-items-center
      justify-content-between flex-nowrap
      border m-1 pl-2 pr-2 shadow-sm"
            style="height: 4rem">
      <div class="d-flex align-items-center">
        <img src="../assets/logo.jpg" class="m-1"
             style="width: 2rem;height: 2rem">
        <span style="font-size: 1.5rem">觅课堂</span>
      </div>
      <div class="d-flex align-items-center">
        <i class="fas fa-list m-1" style="font-size: 1.5rem;color: #f1da32"></i>
        <span style="font-size: 1rem">分类</span>
      </div>
      <div>
        <span class="badge badge-pill"
              style="background: #f1da32;font-size: 1rem">
          悬赏区
        </span>
      </div>
      <div>
        <div class="input-group">
          <input class="form-control"
                 style="border-radius: 2rem">
          <div class="input-group-append">
            <button class="input-group-text"
                  style="border-radius: 2rem;background: #f1da32;position: relative;right: 2rem">
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <div>
        <span class="m-1">分享</span>
        <span class="m-1">主题</span>
      </div>
      <div class="d-flex flex-nowrap align-items-center mr-2">
        <div v-if="logged"
             class="border d-flex justify-content-center align-items-center m-1"
             style="width: 40px;height: 40px">
          <i class="fas fa-user" style="font-size: 30px"></i>
        </div>
        <span v-if="logged">{{username}}</span>
        <router-link v-else to="/login">登录</router-link>
      </div>
    </header>
    <main class="d-flex justify-content-between">
      <aside class="col-3 m-1 d-flex justify-content-center align-items-center"
             style="background: #f5e46e">
        <ul class="list-group list-group-flush">
          <li class="list-group-item d-flex justify-content-center"
              style="background: #f5e46e">
            热门课程分类1
          </li>
          <li class="list-group-item d-flex justify-content-center"
              style="background: #f5e46e">
            热门课程分类2
          </li>
          <li class="list-group-item d-flex justify-content-center"
              style="background: #f5e46e">
            热门课程分类3
          </li>
          <li class="list-group-item d-flex justify-content-center"
              style="background: #f5e46e">
            热门课程分类4
          </li>
          <li class="list-group-item d-flex justify-content-center"
              style="background: #f5e46e">
            热门课程分类5
          </li>
        </ul>
      </aside>
      <aside class="col-5 d-flex justify-content-center align-items-center border m-1">
        广告位
      </aside>
      <aside class="col-3 m-1 border d-flex flex-wrap align-items-center justify-content-center"
             style="background: #c9c9c9">
        <div class="border d-flex justify-content-center align-items-center m-3"
             style="width: 70px;height: 70px">
          <i class="fas fa-question" style="font-size: 50px"></i>
        </div>
        <ul class="list-group list-group-flush w-100">
          <li class="list-group-item d-flex justify-content-center"
              style="background: #c9c9c9">
            最近课程1
          </li>
          <li class="list-group-item d-flex justify-content-center"
              style="background: #c9c9c9">
            最近课程2
          </li>
          <li class="list-group-item d-flex justify-content-center"
              style="background: #c9c9c9">
            最近课程3
          </li>
          <li class="list-group-item d-flex justify-content-center"
              style="background: #c9c9c9">
            <span class="badge badge-pill"
                  style="background: #f1da32;font-size: 16px;line-height: 30px;width: 100px">
              我的课程
            </span>
          </li>
        </ul>
      </aside>
    </main>
    <footer>
      <span class="m-1" style="font-size: 1.5rem">热门课程</span>
      <div class="d-flex flex-wrap">
        <div class="card rounded-0 m-1"
             style="max-width: 150px;border-color: #f1da32;cursor: pointer"
             v-for="(item, idx) in videoList"
             :key="idx"
             @click="$router.push(`/video/${item.videoTitle}`)">
          <img class="card-img-top rounded-0 p-1"
               src="../assets/logo.jpg">
          <div class="card-body p-1">
            <h6 class="card-title">{{item.videoTitle}}</h6>
            <p class="card-text">
              播放量：<span>{{item.playCount}}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import api from '../utils/api'
// 首页
export default {
  name: 'Home',
  data () {
    return {
      logged: false,
      username: '',
      videoList: []
    }
  },
  async mounted () {
    try {
      this.videoList = (await api.video.findVideoAll()).data
      this.username = await api.user.get()
      this.logged = true
    } catch (e) {
      console.debug(e)
    }
  }
}
</script>

<style scoped>
</style>
