import auth0 from 'auth0-js'
import EventEmitter from 'eventemitter3'
import router from './../router'
import store from '../store/index'

class AuthService {
  accessToken
  idToken
  expiresAt
  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  auth0 = new auth0.WebAuth({
    domain: process.env.VUE_APP_DOMAIN,
    clientID: process.env.VUE_APP_CLIENT_ID,
    redirectUri: process.env.VUE_APP_REDIRECT_URI,
    responseType: process.env.VUE_APP_RESPONSE_TYPE,
    audience: process.env.VUE_APP_AUDIENCE,
    scope: process.env.VUE_APP_SCOPE
  })

  login () {
    this.auth0.authorize()
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        router.replace('login')
      } else if (err) {
        router.replace('login')
        alert(`Error: ${err.error}. Check the console for further details.`)
      }
    })
  }

  setSession (authResult) {
    this.accessToken = authResult.accessToken
    this.idToken = authResult.idToken
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime()

    var authData = {}
    authData = {
      accessToken: this.accessToken,
      idToken: this.idToken,
      expiresAt: this.expiresAt
    }

    this.authNotifier.emit('authChange', { authenticated: true })
    //mutations.updateAuthToken(authData, authData)
    store.mutations.updateAuthToken(authData)

    localStorage.setItem('loggedIn', true)
  }

  renewSession () {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        this.logout()
        alert(`Could not get a new token (${err.error}: ${err.error_description}).`)
      }
    })
  }

  logout () {
    // Clear access token and ID token from local storage
    this.accessToken = null
    this.idToken = null
    this.expiresAt = null

    this.userProfile = null
    this.authNotifier.emit('authChange', false)

    localStorage.removeItem('loggedIn')

    // navigate to the home route
    router.replace('login')
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    return new Date().getTime() < this.expiresAt && localStorage.getItem('loggedIn') === 'true'
  }
}

export default new AuthService()
