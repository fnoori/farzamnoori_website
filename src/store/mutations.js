import AuthService from '../auth/AuthService'

export default {
  login: (state) => {
    AuthService.login()
    state.accessToken = localStorage.getItem('access_token')
    state.idToken = localStorage.getItem('id_token')
    state.expiresAt = localStorage.getItem('expires_at')
    state.isAuthenticated = true
  },

  logout: (state) => {
    AuthService.logout()
    state.accessToken = null
    state.idToken = null
    state.expiresAt = null
    state.isAuthenticated = false
  }
}
