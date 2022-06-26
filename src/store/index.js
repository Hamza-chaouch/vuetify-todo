import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "store up",
        done: false
      },
      {
        id: 2,
        title: "store eating",
        done: false
      },
      {
        id: 3,
        title: " store sleep",
        done: false
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
