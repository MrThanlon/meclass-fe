<template>
  <div class="d-flex justify-content-start m-5 p-5 border">
    <comment></comment>
  </div>
</template>

<script>
// import comment from '../components/comment'
// import videojs from 'video.js'
// require('videojs-flash')

import Comment from '../components/comment'
export default {
  name: 'Test',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    Comment
    // comment
  }
}
</script>

<style scoped>
</style>
