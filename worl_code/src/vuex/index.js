import Vue from 'vue'
import Vuex from 'vuex'
import projectId from './project/projectId'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    projectId
  }
})
