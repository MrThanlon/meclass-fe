<template>
  <div class="d-flex pt-0 pt-md-3 flex-wrap p-0 p-md-2">
    <div class="d-flex flex-wrap w-100 mb-3">
      <div class="d-flex justify-content-center col-12 col-md-8 p-0 mb-2">
        <video-player :options="options"
                      class="player">
        </video-player>
      </div>
      <div class="d-flex flex-wrap col-12 col-md-4">
        <div class="w-100 mb-3">
          <h4>{{title}}</h4>
        </div>
        <div class="w-100 mb-3">
          <button class="btn btn-outline-primary m-1" @click="$router.push('/')">
            <i class="fas fa-arrow-left m-1"></i>
            <span>返回首页</span>
          </button>
          <button class="btn btn-outline-success m-1">
            <i class="fas fa-thumbs-up m-1"></i>
            <span>点赞</span>
          </button>
          <button class="btn btn-outline-danger m-1">
            <i class="fas fa-heart m-1"></i>
            <span>收藏</span>
          </button>
        </div>
        <div class="">
          <h4>其他视频</h4>
          <div class="d-flex flex-wrap border justify-content-around rounded p-1"
               style="overflow-y: scroll; height: 300px">
            <div class="card rounded-0 m-1"
                 style="max-width: 150px;border-color: #f1da32;cursor: pointer"
                 v-for="(item, idx) in videoList"
                 :key="idx"
                 @click="toAnotherVideo(item.videoId)">
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
        </div>
      </div>
    </div>
    <div id="gitalk-container" class="w-100 pl-1 pr-1 pl-md-4 pr-md-4"></div>
  </div>
</template>

<script>
import api from '../utils/api'
import videoPlayer from '../components/videoPlayer'
import Gitalk from 'gitalk'

export default {
  name: 'Video',
  props: {
    videoId: String
  },
  data () {
    return {
      videoList: []
    }
  },
  beforeRouteUpdate (to, from, next) {
    next()
    location.reload()
  },
  computed: {
    options () {
      return {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: `/meclass-0.0.1-SNAPSHOT/video/get?videoId=${this.videoId}`,
            type: 'video/mp4'
          }
        ]
      }
    },
    title () {
      return this.videoList.reduce((pre, cur) => pre || cur.videoId + '' === this.videoId ? cur.videoTitle : pre, null)
    }
  },
  methods: {
    async submitMessage () {
      return false
    },
    async toAnotherVideo (id) {
      await this.$router.push(`/video/${id}`)
    }
  },
  async mounted () {
    if (!this.videoId) {
      await this.$router.push({ name: '404' })
    }
    this.videoUpdate = true
    this.videoList = (await api.video.findVideoAll()).data
    const gitalk = new Gitalk({
      clientID: 'Iv1.bb67f06a865d387a',
      clientSecret: '1b81e3e9a9df8321335029ff74c84397a8ecef79',
      repo: 'meclass-comment',
      owner: 'MrThanlon',
      admin: ['MrThanlon'],
      id: location.toLocaleString(), // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
      language: 'zh-CN'
    })
    gitalk.render('gitalk-container')
  },
  components: {
    videoPlayer
  }
}
</script>

<style scoped>
  .player {
    width: 100%;
    height: 240px;
  }

  @media (min-width: 768px) {
    .player {
      height: 480px;
    }
  }
</style>
