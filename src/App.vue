<template>
  <div id="app">
    <b-navbar toggleable="md" class="my-navbar" fixed>
      <b-navbar-brand to="/">Farzam Noori</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/full_stack">Full Stack</b-nav-item>
        <b-nav-item to="/computer_graphics">Computer Graphics</b-nav-item>
        <b-nav-item to="/databases">Databases</b-nav-item>
      </b-navbar-nav>
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

  .my-navbar {
    background-color: #F44336;
  }
</style>
