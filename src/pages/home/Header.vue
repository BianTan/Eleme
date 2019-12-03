<template>
  <div :class="['header', {ophead: isOp}]">
    <div class="eleme">
      <img src="../../assets/logo.png">
    </div>
    <div class="map">
      <span class="iconfont">&#xe61e;</span>
      <p>广东岭南职业技术学院</p>
      <span class="iconfont">&#xe6b9;</span>
    </div>
    <div class="search">
      <div class="serch-input">
        <span class="iconfont">&#xe62f;</span>
        <p>输入商家、商品名称</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      isOp: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop > 56) {
        this.isOp = true
      } else {
        this.isOp = false
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .header
    position: fixed
    top: 0
    left: 0
    width: 100%
    z-index: 999
    height: 2.62rem
    background: linear-gradient(90deg, #00a5ff, #0087ff)
    .eleme
      width: 100%
      height: 1rem
      display: flex
      margin: 0 0.43rem
      align-items: center
      img
        width: auto
        height: .42rem
    .map
      display: inline-flex
      color: #fff
      height: .34rem
      margin: 0 .3rem
      cursor: pointer
      font-size: .34rem
      line-height: .34rem
      padding-top: 0.18rem
      p
        width: 2.8rem
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      span
        font-size: 0.42rem
        margin: 0 .1rem
    .search
      padding: 0.19rem 0
      height: .72rem
      .serch-input
        color: #abb1b6
        height: 100%
        display: flex
        cursor: pointer
        margin: 0 .3rem
        user-select: none
        background: #f4fbff
        align-items: center
        border-radius: .84rem
        justify-content: center
        span
          margin-right: .12rem
        p
          font-size: .26rem
  .ophead
    height: 2.04rem
    .map
      display: none
</style>
