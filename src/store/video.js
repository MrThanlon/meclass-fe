import api from '../utils/api'
export default {
  namespaced: true,
  state: () => ({
    videoList: []
  }),
  mutations: {
    update (state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    async updateVideoList (context, force = false) {
      // FIXME: update management
      if ((!force) && context.state.videoList.length) {
        return
      }
      try {
        const res = await api.video.findVideoAll()
        context.commit('update', {
          videoList: res.data.sort((a, b) => a.videoTitle < b.videoTitle ? -1 : 1)
        })
      } catch (e) {
        console.debug(e)
      }
    }
  }
}
