<template>
  <div class="title-page">
    <h4>
      {{ title }}
    </h4>
    <div>
      This page is still under construction, check back later !
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnderConstruction',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title-page {

  }
  .title-page h4 {
    font-size: 2rem;
    color: rgba(0,0,0,0.5);
  }
</style>
