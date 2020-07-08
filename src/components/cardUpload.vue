<template>
  <div class="card">
    <div class="card-header">上传视频</div>
    <div class="card-body">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="视频名称" v-model="videoTitle">
      </div>
      <button class="btn btn-outline-primary m-1" @click="chooseFile">
        <i class="fas fa-upload m-1"></i>
        <span>选择文件上传...</span>
      </button>
      <div class="progress mt-3" v-if="progress && progress<100">
        <div class="progress-bar progress-bar-striped bg-success progress-bar-animated"
             role="progressbar" :style="{width: `${progress}%`}"></div>
      </div>
    </div>
    <input type="file" v-show="false" ref="inFile" @change="upload">
  </div>
</template>

<script>
import api from '../utils/api'
import { mapActions } from 'vuex'

export default {
  name: 'cardUpload',
  data () {
    return {
      videoTitle: '',
      progress: 0
    }
  },
  methods: {
    ...mapActions('video', ['updateVideoList']),
    chooseFile () {
      this.$refs.inFile.click()
    },
    async upload () {
      if (!this.videoTitle) {
        this.$emit('alert', '视频名称不能为空。')
        return
      }
      const file = this.$refs.inFile.files[0]
      const data = new FormData()
      data.append('file', file)
      data.append('videoTitle', this.videoTitle)
      try {
        await api.video.add(data, e => {
          // console.debug(e)
          this.progress = e.loaded / e.total * 100
        })
        this.$emit('alert', { type: 'success', text: '视频上传成功。' })
        await this.updateVideoList(true)
      } catch (e) {
        this.$emit('alert', '视频上传失败。')
        console.debug(e)
      }
    }
  }
}
</script>

<style scoped>
</style>
