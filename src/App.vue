<template>
  <div id="app" class="">
    <div class="position-fixed d-flex justify-content-center flex-wrap w-100 pt-3"
         style="z-index: 999">
      <alert :type="item.type||'danger'"
             :dismiss="item.dismiss"
             :close="item.close"
             v-for="(item, idx) in alerts" :key="idx">{{item.text}}
      </alert>
    </div>
    <router-view @alert="trigAlert($event)"/>
  </div>
</template>

<script>
import alert from './components/alert'

export default {
  name: 'App',
  data () {
    return {
      alerts: []
    }
  },
  mounted () {
    this.$on('alert', (event) => {
      this.trigAlert(event)
    })
  },
  methods: {
    trigAlert (event) {
      console.debug(event)
      if (typeof event === 'string') {
        // only text
        event = { text: event }
      }
      this.alerts.push(event)
    }
  },
  components: { alert }
}
</script>

<style>
  .pointer {
    cursor: pointer;
  }
</style>
