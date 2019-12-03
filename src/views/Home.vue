<template>
  <div class="home">
    <home-header></home-header>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/pages/home/Header.vue'

export default {
  name: 'home',
  components: {
    HomeHeader
  }
}
</script>

<style lang="stylus" scoped>
</style>
