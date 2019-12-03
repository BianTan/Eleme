<template>
  <div class="header">
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
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 1.8rem
    background: #00a1ff
    .map
      display: inline-flex
      color: #fff
      height: .42rem
      margin: 0 .3rem
      cursor: pointer
      font-size: .32rem
      line-height: .42rem;
      padding-top: 0.18rem
      p
        width: 3.4rem;
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      span
        font-size: 0.42rem;
        margin: 0 .1rem;
    .search
      padding: 0.18rem 0
      height: .84rem
      .serch-input
        color: #abb1b6
        height: 100%
        display: flex
        cursor: pointer
        margin: 0 .3rem
        background: #fff
        user-select: none
        align-items: center;
        border-radius: .84rem
        justify-content: center;
        span
          margin-right: .12rem
</style>
