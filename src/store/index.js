import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 存储token
    // Authorization: localStorage.getItem('token') ? localStorage.getItem('token') : ''
  },
  mutations: {
    // 修改token，并将token存入localStorage
    /* changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('token', user.Authorization);
      } */
  },
  
  actions: {
  },
  modules: {
  }
})
// export default store;
