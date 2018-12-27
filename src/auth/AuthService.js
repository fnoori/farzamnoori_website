import auth0 from 'auth0-js'
import EventEmitter from 'eventemitter3'
import router from './../router'

class AuthService {
  accessToken
  idToken
  expiresAt
  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  auth0 = new auth0.WebAuth({
    domain: 'farzamn-noori.auth0.com',
    clientID: 'RBUd0Jc0WaEz0lHRj6h8x3KORK6U4Hyt',
    redirectUri: 'http://localhost:8080/login',
    responseType: 'token id_token',
    audience: 'https://farzamnoori_users',
    scope: 'openid'
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
        // eslint-disable-next-line
        console.log(err)
        alert(`Error: ${err.error}. Check the console for further details.`)
      }
    })
  }

  setSession (authResult) {
    this.accessToken = authResult.accessToken
    this.idToken = authResult.idToken
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime()

    this.authNotifier.emit('authChange', { authenticated: true })

    localStorage.setItem('loggedIn', true)
  }

  renewSession () {
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
      } else if (err) {
        this.logout()
        // eslint-disable-next-line
        console.log(err)
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
