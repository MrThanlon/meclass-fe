<template>
  <video ref="videoPlayer" class="video-js vjs-fluid vjs-16-9"></video>
</template>

<script>
import videojs from 'video.js'
require('videojs-flash')
export default {
  name: 'videoPlayer',
  props: {
    options: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      player: null
    }
  },
  mounted () {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      console.debug('onPlayerReady', this.options, this.player)
    })
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>

<style scoped>

</style>
