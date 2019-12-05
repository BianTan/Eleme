<template>
  <div class="header-swiper-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id" class="swiper-slide">
        <li class="swiper-li">
          <img class="swiper-img" :src="item.imgUrl">
        </li>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: 5000
      },
      swiperList: [
        { id: 1, imgUrl: 'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png' },
        { id: 2, imgUrl: 'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg' },
        { id: 3, imgUrl: 'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header-swiper-wrapper >>> .swiper-pagination-bullet
    width: .17rem
    height: .03rem
    margin: 0 2px!important
    margin-top: 2px
    border-radius: 0
    background: rgba(255, 255, 255, 0.9)
  .header-swiper-wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .header-swiper-wrapper
    user-select: none
    overflow: hidden
    height: 0
    background: #fff
    padding-bottom: 2rem
    .swiper-slide
      .swiper-li
        margin: 0 0.24rem
        overflow: hidden
        position: relative
        height: 2rem
        .swiper-img
          height: 2rem
          width: 100%
          position: absolute
          left: 0
          object-fit: cover
          border-radius: 0.12rem
</style>
