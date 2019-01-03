import auth0 from 'auth0-js'
import EventEmitter from 'eventemitter3'
import router from './../router'

class AuthService {
  accessToken
  idToken
  expiresAt
  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  constructor () {
    this.login = this.login.bind(this)
  }

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
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', authResult.expiresIn * 1000 + new Date().getTime())

    this.authNotifier.emit('authChange', { authenticated: true })
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
    localStorage.setItem('access_token', null)
    localStorage.setItem('id_token', null)
    localStorage.setItem('expires_at', null)

    this.authNotifier.emit('authChange', false)

    // navigate to the home route
    router.replace('login')
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // access token's expiry time
    return new Date().getTime() < this.expiresAt && localStorage.getItem('loggedIn') === 'true'
  }
}

export default new AuthService;
