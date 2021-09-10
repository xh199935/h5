import { createStore } from 'vuex'

const store = createStore({
  state: {
    userinfo: {

    }
  },
  mutations: {
    setUserInfo (state, content) {
      console.log(state, content);
      const { token, userInfo } = content
      // console.log(token, userInfo);
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
