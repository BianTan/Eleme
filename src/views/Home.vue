<template>
  <div class="home">
    <div class="bg"></div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-more></home-more>
    <home-swiper class="swiper-two"></home-swiper>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/Header.vue'
import HomeSwiper from '@/pages/home/Swiper.vue'
import HomeIcons from '@/pages/home/Icons.vue'
import HomeMore from '@/pages/home/More.vue'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeMore
  }
}
</script>

<style lang="stylus" scoped>
.home
  padding-bottom: 1.1rem
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
  .swiper-two
    margin: .32rem 0
</style>
