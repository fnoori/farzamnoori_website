export default {
  updateAuthTokenAction: (context) => {
    context.commit('updateAuthToken')
  },

  loginAction: (context) => {
    context.commit('login')
  },

  logoutAction: (context) => {
    context.commit('logout')
  }
}
