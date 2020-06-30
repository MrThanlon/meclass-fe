<template>
  <div class="d-flex pt-3 flex-wrap">
    <div class="d-flex justify-content-start w-100 ">
      <button class="btn btn-outline-primary m-3" @click="$router.push('/')">
        <i class="fas fa-arrow-left m-1"></i>
        <span>返回首页</span>
      </button>
    </div>
    <div class="d-flex justify-content-center w-100">
      <video-player :options="options"></video-player>
    </div>
  </div>
</template>

<script>
import videoPlayer from '../components/videoPlayer'
export default {
  name: 'Video',
  data () {
    return {
      title: this.$route.query.title
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
  mounted () {
    if (!this.title) {
      this.$router.push({ name: '404' })
    }
  },
  components: {
    videoPlayer
  }
}
</script>

<style scoped>
</style>
