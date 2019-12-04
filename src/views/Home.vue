<template>
  <div class="home">
    <div class="bg"></div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/Header.vue'
import HomeSwiper from '@/pages/home/Swiper.vue'
import HomeIcons from '@/pages/home/Icons.vue'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style lang="stylus" scoped>
  .bg
    height: 16em
    width: 160%
    background: #0087ff
    border-radius: 0 0 90% 90%
    position: absolute
    top: -0.6rem
    left: 50%
    -webkit-transform: translate(-50%, 0)
    transform: translate(-50%, 0)
</style>
