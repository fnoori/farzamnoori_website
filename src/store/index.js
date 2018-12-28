import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  idToken: localStorage.getItem("idToken"),
  accessToken: localStorage.getItem("accessToken"),
  tokensExpiry: localStorage.getItem("tokensExpiry"),
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
