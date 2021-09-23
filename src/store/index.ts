import { createStore } from 'vuex'

const store = createStore({
  state: {
    userInfo: {

    },
    token:''
  },
  mutations: {
    setUserInfo (state, content) {
      const { token, userInfo } = content
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
      localStorage.setItem('token', token)
      state.userInfo = userInfo
      state.token = token
    },
    clearUserInfo (state) {
      localStorage.removeItem('userInfo')
      localStorage.removeItem('token')
      state.userInfo = ''
      state.token = ''
    },
  },
  actions: {
    SET_USERINFO ({ commit }, payload) {
      commit('setUserInfo', payload)
    },
    CLEAR_USERINFO ({ commit }) {
      commit('clearUserInfo')
    },
  }
})
export default store
