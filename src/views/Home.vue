<template>
  <div class="home">
    <InitialContent/>
  </div>
</template>

<script>
// @ is an alias to /src
import InitialContent from '@/components/InitialContent.vue'

export default {
  name: 'home',
  components: {
    InitialContent
  }
}
</script>

<style>
  .home {
    margin: 0.5rem 1rem;
  }
</style>

