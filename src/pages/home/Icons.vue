<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide class="icons-swiper" v-for="(page, index) of pages" :key="index">
        <li class="icons-li">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl">
            </div>
            <div class="icon-desc">{{item.desc}}</div>
          </div>
        </li>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      },
      iconsList: [
        { id: '01', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '美食' },
        { id: '02', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png', desc: '午餐' },
        { id: '03', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png', desc: '卖场便利' },
        { id: '04', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png', desc: '水果' },
        { id: '05', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png', desc: '送药上门' },
        { id: '06', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png', desc: '星选好店' },
        { id: '07', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png', desc: '买菜' },
        { id: '08', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png', desc: '跑腿代购' },
        { id: '09', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png', desc: '甜品饮品' },
        { id: '10', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png', desc: '签到赢饭钱' },
        { id: '11', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '地方美食' },
        { id: '12', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png', desc: '麻辣烫' }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 10)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  .swiper-pagination >>> .swiper-pagination-bullet
    width: .17rem
    height: .03rem
    margin: 0 2px!important
    margin-top: 2px
    border-radius: 0
    background: #b0b0b0
  .swiper-pagination >>> .swiper-pagination-bullet-active
    background: #3abaff
  .icons
    overflow: hidden
    height: 0
    margin: 0.25rem 0
    padding-bottom: 40%
    .icons-swiper
      height: 0
      padding-bottom: 40%
      .icons-li
        list-style: none
        margin: 0 0.24rem
        .icon
          position: relative
          overflow: hidden
          float: left
          width: 20%
          height: 0
          padding-bottom: 20%
          .icon-img
            position: absolute
            top: 0
            left: 0
            right: 0
            bottom: .44rem
            .icon-img-content
              height: 100%
              display: block
              margin: 0 auto
          .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            text-align: center
            color: #686868
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
    .swiper-pagination
      left: 50%
      margin-bottom: -.2rem
      transform: translateX(-50%)
</style>
