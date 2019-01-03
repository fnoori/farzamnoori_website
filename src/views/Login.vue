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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      auth,
      authenticated: auth.authenticated
    }
  },

  mounted () {
    auth.authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })

    auth.renewSession()
  },

  methods: {
    ...mapActions([
      'loginAction',
      'logoutAction'
    ]),
    ...mapGetters([
      'userTokenInfoGetter'
    ]),

    login: function() {
      this.loginAction()
    },

    logout: function() {
      this.logoutAction()
    }
  }
}
</script>

<style scoped>
  .login {
    height: 500px;
  }
</style>
