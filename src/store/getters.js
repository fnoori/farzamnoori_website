export default {
  userTokenInfoGetter: state => {
    var userData = {
      'access_token': state.idToken,
      'id_token': state.accessToken,
      'expires_at': state.tokensExpiry
    }

    return userData
  }
}
