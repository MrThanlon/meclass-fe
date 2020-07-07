import api from '../utils/api'
export default {
  namespaced: true,
  state: () => ({
    logged: false,
    username: '',
    flag: null
  }),
  mutations: {
    // 万金油用法
    update (state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    async updateUserInfo (context, force = false) {
      if ((!force) && context.state.logged) {
        return
      }
      try {
        const res = await api.user.get()
        context.commit('update', { logged: true, username: res.data.uname, flag: res.data.flag })
      } catch (e) {
        console.debug(e)
      }
    }
  }
}
