<template>
  <div class="login main-area container">
    <button
      id="qsLoginBtn"
      class="btn btn-primary btn-margin"
      @click="login">
        Log In
    </button>
    <button
      id="qsLogoutBtn"
      class="btn btn-primary btn-margin"
      v-if="authenticated"
      @click="logout">
      Log Out
    </button>
    <div v-if="!authenticated">
      you are not authenticated !
    </div>
  </div>
</template>

<script>
import auth from '../auth/AuthService'
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      auth,
      authenticated: auth.authenticated
    }
  },

  created () {
    // eslint-disable-next-line
    console.log(this.authenticated)

    auth.authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })

    auth.renewSession()
  },

  methods: {
    ...mapActions([
      'login'
    ]),
    logout () {
      auth.logout()
    }
  }
}
</script>

<style scoped>
  .login {
    height: 500px;
  }
</style>
