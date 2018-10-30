<template>
  <div class="title-page">
    <!--{{ title }}-->
  </div>
</template>

<script>
export default {
  name: 'TitlePage',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title-page {
    font-weight: 700;
    font-size: 2.5rem;
    color: rgba(0,0,0,0.7);
    background-color: rgba(0,0,0,0.1);
    margin: -8px -15px;
  }
</style>
