<template>
  <div class="d-flex pt-0 pt-md-3 flex-wrap p-0 p-md-2">
    <div class="d-flex flex-wrap w-100">
      <div class="d-flex justify-content-center col-12 col-md-8 p-0 mb-2">
        <video-player :options="options" class="player">
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
        <div class="mb-3">
          <h4>其他视频</h4>
          <div>
            <div class="card rounded-0 m-1"
                 style="max-width: 150px;border-color: #f1da32;cursor: pointer"
                 v-for="(item, idx) in videoList"
                 :key="idx"
                 @click="$router.push(`/video?title=${item.videoTitle}`)">
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
        <div class="d-flex w-100 flex-wrap">
          <h4 class="w-100">留言</h4>
          <form @submit="submitMessage">
            <div class="input-group">
              <input type="text" class="form-control" placeholder="...">
              <div class="input-group-append">
                <button class="btn btn-outline-dark" type="submit">提交</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../utils/api'
import videoPlayer from '../components/videoPlayer'

export default {
  name: 'Video',
  data () {
    return {
      title: this.$route.query.title,
      videoList: []
    }
  },
  computed: {
    options () {
      return {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: `/meclass-0.0.1-SNAPSHOT/video/get?videoTitle=${this.title}`,
            type: 'video/mp4'
          }
        ]
      }
    }
  },
  methods: {
    async submitMessage () {
      return false
    }
  },
  async mounted () {
    if (!this.title) {
      await this.$router.push({ name: '404' })
    }
    this.videoList = (await api.video.findVideoAll()).data
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
