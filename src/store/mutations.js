export default {
  updateAuthToken(state, tokenData) {
    localStorage.setItem('access_token', tokenData.accessToken)
    state.accessToken = tokenData.accessToken

    localStorage.setItem('id_token', tokenData.idToken)
    state.idToken = tokenData.idToken

    localStorage.setItem('expires_at', tokenData.expiresAt)
    state.expiresAt = tokenData.expiresAt

    console.log('in updateAuthToken')
  }
}
