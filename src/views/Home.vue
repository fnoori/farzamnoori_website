<template>
  <div class="main-area container">
    <!--<PageTitle title="Home"/>-->
    <WelcomeBanner/>
    <!--
    <b-card>
      Welcome to my website, here I will try and highlight important parts both my personal and professional life.
    </b-card>
    -->
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
  }

  .home {
  }
</style>
