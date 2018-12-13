<template>
  <div class="title-page">
    {{ title }}
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
    font-size: 2rem;
    color: rgba(0,0,0,0.5);
  }
</style>
