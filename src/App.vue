<template>
  <div id="app">
    <b-navbar toggleable class="my-navbar" fixed>
      <b-navbar-brand to="/" class="mr-auto">Farzam Noori</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse" ></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/full_stack">Full Stack</b-nav-item>
          <b-nav-item to="/computer_graphics">Computer Graphics</b-nav-item>
          <b-nav-item to="/databases">Databases</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'home',

  data () {
    return {
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Quicksand');

  #app {
    font-family: 'Quicksand', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .navbar-brand {
    color: white !important;
  }
  .nav-link {
    color: rgba(255,255,255,1) !important;
  }
  .nav-link:hover {
    color: rgba(255,255,255,0.9) !important;
  }
  .navbar-toggler {
    border-color: rgba(0,0,0,0) !important;
  }
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-width='1' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E") !important;
  }
  .navbar-brand {
    margin-left: 0 !important;
  }
  .navbar-toggler {
    padding-right: 0 !important;
  }

  .my-navbar {
    background-color: #F44336;
  }
</style>
