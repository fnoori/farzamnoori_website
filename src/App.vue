<template>
  <div id="app">
    <b-navbar toggleable="md" class="my-navbar" sticky="true">
      <b-navbar-brand href="#">Farzam N.</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <b-button type="button">About</b-button>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
   @import url('https://fonts.googleapis.com/css?family=Quicksand');

    #app {
      font-family: 'Quicksand', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #2c3e50;
    }

  .my-navbar {
    background-color: #F44336;
    color: white !important; 
  }
</style>
