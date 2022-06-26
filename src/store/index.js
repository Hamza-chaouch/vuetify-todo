import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "wake up",
        done: false
      },
      {
        id: 2,
        title: " eating",
        done: false
      },
      {
        id: 3,
        title: "  sleep",
        done: false
      },
    ],
    selectedTask : {
      id: 1,
      title: "selected task up",
      done: false
    },
    oldTask : null ,
    updateDialog : false
  },
  getters: {
  },
  mutations: {
    selectTask (state, payload) {
      state.selectedTask = payload
    },
    updateTaskTitle (state , payload) {
      let task = state.tasks.filter(item => {
        return item.id === payload.id
      })[0]
      task.title = payload.title
    }
  },
  actions: {
  },
  modules: {
  }
})
