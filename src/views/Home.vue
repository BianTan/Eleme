<template>
  <div class="home">
    <div class="bg"></div>
    <home-header :isClass="isClass"></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-more></home-more>
    <home-swiper class="swiper-two"></home-swiper>
    <home-recommend :isRecommend="isRecommend"></home-recommend>
  </div>
</template>

<script>
import HomeHeader from '@/pages/home/Header.vue'
import HomeSwiper from '@/pages/home/Swiper.vue'
import HomeIcons from '@/pages/home/Icons.vue'
import HomeMore from '@/pages/home/More.vue'
import HomeRecommend from '@/pages/home/Recommend.vue'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeMore,
    HomeRecommend
  },
  data () {
    return {
      isClass: false,
      isRecommend: false,
      menuTop: 0
    }
  },
  mounted () {
    let menu = document.querySelector('.menu')
    this.menuTop = menu.offsetTop
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let headerHeight = document.querySelector('.header').offsetHeight
      this.isClass = scrollTop > 56
      this.isRecommend = scrollTop >= (this.menuTop - headerHeight)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
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
