<template>
  <div class="d-flex pt-0 pt-md-3 flex-wrap p-0 p-md-2">
    <div class="d-flex flex-wrap w-100 mb-3">
      <div class="d-flex justify-content-center col-12 col-md-8 p-0 mb-2">
        <video-player v-if="videoUpdated"
                      :options="options"
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
    <!--
    <div id="gitalk-container" class="w-100 pl-1 pr-1 pl-md-4 pr-md-4"></div>
    -->
    <comment :video-id="parseInt(videoId)"
             class="col-12 mb-2"
             @alert="$emit('alert', $event)"></comment>
  </div>
</template>

<script>
import videoPlayer from '../components/videoPlayer'
// import Gitalk from 'gitalk'
import comment from '../components/comment'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Video',
  props: {
    videoId: String
  },
  data () {
    return {
      videoUpdated: false
    }
  },
  beforeRouteUpdate (to, from, next) {
    next()
    location.reload()
  },
  computed: {
    ...mapState('video', ['videoList']),
    videoInfo () {
      return this.videoList.find(v => v.videoId + '' === this.videoId)
    },
    options () {
      if (!this.videoInfo) {
        return {}
      }
      return this.videoInfo.isFlash ? {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: `/meclass-0.0.1-SNAPSHOT/video/get?videoId=${this.videoId}`,
            type: 'video/mp4'
          }
        ]
      } : {
        autoplay: true,
        techOrder: ['flash', 'html5'],
        flash: {
          swf: `/meclass-0.0.1-SNAPSHOT/video/get?videoId=${this.videoId}`
        }
      }
    },
    title () {
      return this.videoInfo ? this.videoInfo.videoTitle : ''
    }
  },
  methods: {
    async submitMessage () {
      return false
    },
    async toAnotherVideo (id) {
      await this.$router.push(`/video/${id}`)
    },
    ...mapActions('video', ['updateVideoList'])
  },
  async mounted () {
    await this.updateVideoList()
    if (!this.videoId) {
      await this.$router.push({ name: '404' })
      return
    }
    if (this.videoList.find(v => v.videoId + '' === this.videoId) === undefined) {
      await this.$router.push({ name: '404' })
      return
    }
    if (this.videoInfo.isFlash === 0) {
      setTimeout(() => {
        this.videoUpdated = true
      }, 1000)
    } else {
      this.videoUpdated = true
    }
    /*
    const gitalk = new Gitalk({
      clientID: '202160413cdce481616c',
      clientSecret: 'e130aae731e921136ab262dad1f90fe13a2dfa46',
      repo: 'meclass-comment',
      owner: 'MrThanlon',
      admin: ['MrThanlon'],
      id: `video/${this.videoId}`, // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
      language: 'zh-CN'
    })
    gitalk.render('gitalk-container')
     */
  },
  components: {
    videoPlayer, comment
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
