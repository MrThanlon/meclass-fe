<template>
  <div>
    <video id="vd" autoplay="autoplay"></video>
    <video id="vd2" autoplay="autoplay"></video>
    <img id="photo">
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
    <canvas id="cvs" width="320" height="240"></canvas>
  </div>
</template>

<script>
// import { RecordRTCPromisesHandler } from 'recordrtc'
export default {
  name: 'Test',
  data () {
    return {
      intervalNum: 0,
      recorder: null,
      stream: null,
      allData: [],
      video: null,
      video2: null,
      ws: null,
      source: null,
      sourceBuffer: null
    }
  },
  mounted () {
    this.video = document.getElementById('vd')
    this.video2 = document.getElementById('vd2')
    this.ws = new WebSocket('ws://localhost:8090/')
    this.source = new MediaSource()
    this.sourceBuffer = this.source.addSourceBuffer('video/webm')
  },
  methods: {
    async start () {
      this.stream = await navigator.mediaDevices.getUserMedia({ video: { width: 320, height: 240 } })
      this.recorder = new MediaRecorder(this.stream)
      this.recorder.ondataavailable = e => {
        // console.debug(e.data)
        this.allData.push(e.data)
        this.ws.send(e.data)
        this.video.src = URL.createObjectURL(e.data)
        console.debug(this.video.src)
        // this.video.play()
        if (this.recorder.state === 'inactive') {
          console.debug(this.allData)
          this.video2.src = URL.createObjectURL(new Blob(this.allData))
        }
      }
      this.recorder.onstop = (e) => {
        console.debug(e)
      }
      this.recorder.start()
      // --
      this.intervalNum = setInterval(async () => {
        this.recorder.requestData()
      }, 3000)
    },
    async stop () {
      clearInterval(this.intervalNum)
      this.recorder.stop()
      this.stream.getTracks().forEach(track => track.stop())
    }
  }
}
</script>

<style scoped>
  video {
    border: black 1px solid;
    margin: 10px;
    width: 320px;
    height: 240px;
  }
  img {
    border: black 1px solid;
    margin: 10px;
    width: 320px;
    height: 240px;
  }
  canvas {
    display: none;
    border: black 1px solid;
    width: 320px;
    height: 240px;
  }
</style>
