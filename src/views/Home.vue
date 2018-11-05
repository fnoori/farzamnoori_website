<template>
  <div class="main-area container">
    <!--<PageTitle title="Home"/>-->
    <WelcomeBanner/>

    <div class="time-line">
      <b-card>
        <div class="text-center">Started university at</div>
        <div class="uofc">University of Calgary</div>
        <img src="@/assets/uofc_logo.png" alt="" class="uofc-logo">
        <div class="year">2013</div>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'
import WelcomeBanner from '@/components/WelcomeBanner.vue'

export default {
  name: 'home',
  components: {
    PageTitle,
    WelcomeBanner
  }
}
</script>

<style scoped>
  /* bootstrap overrides */
  .card {
    width: 15rem;
    height: 17rem;
    border: none;
    box-shadow: 0px 0px 3px rgba(0,0,0,0.2);
  }
  .uofc-logo {
    width: 8rem;
    display: block;
    margin: auto;
    margin-top: 1rem;
  }
  .uofc {
    text-align: center;
    color: rgba(0,0,0,0.5);
  }
  .year {
    margin-top: 0.5rem;
    font-size: 1.5rem;
    text-align: center;
    color: rgba(0,0,0,0.8);
  }

  .time-line {

  }

  @media (max-width: 575px) {
    .card {
      width: 100%;
    }
  }
</style>
