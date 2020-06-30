<template>
  <div class="d-flex justify-content-center align-content-center pt-3">
    <video-player :options="options"></video-player>
  </div>
</template>

<script>
import videoPlayer from '../components/videoPlayer'
export default {
  name: 'Video',
  computed: {
    options () {
      return {
        autoplay: true,
        controls: true,
        sources: [
          {
            src: '/meclass-0.0.1-SNAPSHOT/video/get?videoTitle=testvideo',
            type: 'video/mp4'
          }
        ]
      }
    }
  },
  mounted () {
  },
  components: {
    videoPlayer
  }
}
</script>

<style scoped>
</style>
