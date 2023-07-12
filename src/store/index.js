import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    SlidersItem: [
      { id: 1, name: 'img1', img: 'bedroom_1.png' },
      { id: 2, name: 'img2', img: 'bedroom_2.png' },
      { id: 3, name: 'img3', img: 'bedroom_3.png' },
      { id: 4, name: 'img4', img: 'bedroom_4.png' }
    ],
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
