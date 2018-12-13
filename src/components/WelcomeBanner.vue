<template>
  <div class="welcome-banner">
    <h2>Welcome</h2>
    <div>
      This is a place where I will highlight moments of
      both my personal and professinal life.
    </div>
    <img src="@/assets/welcome_banner.svg" alt="" class="banner-img"/>
  </div>
</template>

<script>
export default {
  name: 'WelcomeBanner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h2 {
    font-weight: bold;
  }

  .welcome-banner {
    color: rgba(0,0,0,0.7);
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: rgba(0,0,0,0.05);
    padding: 1rem;
    position: relative;
    height: 15rem;
  }
  .banner-img {
    width: 20rem;
    position: absolute;
    right: 0;
    bottom: 0;
  }

  @media (max-width: 991px) {
    .welcome-banner {
      height: 18rem;
    }
    .banner-img {
      width: 20rem;
    }
  }

  @media (max-width: 350px) {
    .welcome-banner {
      height: 21rem;
    }
    .banner-img {
      width: 20rem;
    }
  }
</style>ƒ
