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
        { id: '01', imgUrl: 'https://cube.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg', desc: '美食' },
        { id: '02', imgUrl: 'https://cube.elemecdn.com/9/21/60ac33f023d9074e13cd78f9b5964jpeg.jpeg', desc: '夜宵' },
        { id: '03', imgUrl: 'https://cube.elemecdn.com/c/7e/76a23eb90dada42528bc41499d6f8jpeg.jpeg', desc: '商超便利' },
        { id: '04', imgUrl: 'https://cube.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg', desc: '水果' },
        { id: '05', imgUrl: 'https://cube.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg', desc: '医药健康' },
        { id: '06', imgUrl: 'https://cube.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg', desc: '浪漫鲜花' },
        { id: '07', imgUrl: 'https://cube.elemecdn.com/e/58/bceb19258e3264e64fb856722c3c1jpeg.jpeg', desc: '跑腿代购' },
        { id: '08', imgUrl: 'https://cube.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg', desc: '汉堡披萨' },
        { id: '09', imgUrl: 'https://cube.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg', desc: '厨房生鲜' },
        { id: '10', imgUrl: 'https://cube.elemecdn.com/2/35/696aa5cf9820adada9b11a3d14bf5jpeg.jpeg', desc: '甜品饮品' },
        { id: '11', imgUrl: 'https://cube.elemecdn.com/0/1a/314b6da88ab6c7ae9828f91652d40jpeg.jpeg', desc: '速食简餐' },
        { id: '12', imgUrl: 'https://cube.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg', desc: '地方小吃' },
        { id: '13', imgUrl: 'https://cube.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg', desc: '大牌惠吃' },
        { id: '14', imgUrl: 'https://cube.elemecdn.com/d/38/7bddb07503aea4b711236348e2632jpeg.jpeg', desc: '速食简餐' }
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
    user-select: none
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
          cursor: pointer
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
