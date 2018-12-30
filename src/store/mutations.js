import AuthService from '../auth/AuthService'

export default {
  login: (state, isAuthenticated) => {
    state.accessToken = localStorage.getItem('access_token')
    state.idToken = localStorage.getItem('id_token')
    state.expiresAt = localStorage.getItem('expires_at')
    state.isAuthenticated = isAuthenticated
    AuthService.login()
  },

  logout: (state, isAuthenticated) => {
    state.accessToken = null
    state.idToken = null
    state.expiresAt = null
    state.isAuthenticated = isAuthenticated
    AuthService.logout()
  }
}
