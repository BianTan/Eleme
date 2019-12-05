<template>
  <div :class="['home-recommend', {recommendActive: isRecommend}]">
    <div class="title">
      猜你喜欢
    </div>
    <div class="menu">
      <div class="menu-select">
        <li>综合排序<span class="iconfont">&#xe6b9;</span></li>
        <li>距离最近</li>
        <li>销量最高</li>
        <li>筛选<span class="iconfont">&#xe60b;</span></li>
      </div>
      <div class="menu-hb">
        <li>双12外卖节</li>
        <li>津贴联盟</li>
        <li>会员领红包</li>
        <li>满减优惠</li>
      </div>
    </div>
    <div class="wrapper">
      <div class="item" v-for="item of items" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">
            <div class="info-top">
              <div class="info-one"><span class="star iconfont">&#xe624;{{item.star}}</span>月售{{item.mom}}</div>
              <div class="song">宇宙专送</div>
            </div>
            <div class="info-bottom">
              <div class="song">起送￥998 配送￥20 <span class="del">￥3.5</span></div>
              <div class="leng">34分钟 99km</div>
            </div>
          </div>
          <div class="item-bottom">
            <span>100减2</span>
            <span>200减3</span>
            <span>300减3.5</span>
          </div>
        </div>
      </div>
    </div>
    <div class="recommend-load">
      <p>正在加载...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      items: [
        { id: '0001', imgUrl: 'https://cube.elemecdn.com/8/ed/f6be3e780022a27eeb93f047c491epng.png', title: '至尊比萨(太阳系店)', star: '4.5', mom: '665' },
        { id: '0002', imgUrl: 'https://cube.elemecdn.com/1/53/0f73fd159d8615d0f15311ac0bfeapng.png', title: '爺門串串(银河系店)', star: '4.1', mom: '288' },
        { id: '0003', imgUrl: 'https://cube.elemecdn.com/0/79/9f2c9cfdc2dfbd05aadc54b6836c3jpeg.jpeg', title: '华莱士(谈笑店)', star: '4.4', mom: '2494' },
        { id: '0004', imgUrl: 'http://attachment.jmw.com.cn/comp_uploadfile/slt/2018/05/10/s1_15361525924922.jpg', title: '啃不起', star: '2', mom: '666' },
        { id: '0005', imgUrl: 'http://attachment.jmw.com.cn/comp_uploadfile/slt/2018/05/10/s1_15361525924922.jpg', title: '啃不啃得起', star: '3', mom: '888' },
        { id: '0006', imgUrl: 'http://attachment.jmw.com.cn/comp_uploadfile/slt/2018/05/10/s1_15361525924922.jpg', title: '你管我啃不啃得起', star: '4', mom: '998' }
      ]
    }
  },
  props: {
    isRecommend: Boolean
  }
}
</script>

<style lang="stylus" scoped>
.home-recommend
  user-select: none
  margin: 0 .25rem
  .title
    color: #333
    font-size: .4rem
    font-weight: 600
    margin-top: .38rem
  .menu
    width: 100%
    padding-bottom: .1rem
    background: #fff
    .menu-select
      display: flex
      li
        cursor: pointer
        color: #333
        flex: 1 1 auto
        font-size: .3rem
        text-align: center
        margin: .32rem 0 .36rem 0
        .iconfont
          font-size: .3rem
      li:nth-child(1)
        font-weight: 600
    .menu-hb
      display: flex
      li
        cursor: pointer
        color: #333
        flex: 1 1 auto
        font-size: .26rem
        text-align: center
        background: #f3f3f3
        margin: .05rem
        padding: .2rem
        border-radius: .1rem
  .wrapper
    padding: .1rem
    .item
      cursor: pointer
      display: flex
      margin: .3rem 0
      border-bottom: .133333vw solid #eee
      padding-bottom: 0.2rem
      .item-img
        width: 2rem
        height: 2rem
        object-fit: cover
        border-radius: .06rem
      .item-info
        width: 100%
        margin-left: .25rem
        .item-title
          font-size: .38rem
          font-weight: 600
        .item-desc
          display: flex
          flex-direction: column
          color: #858585
          margin-top: .28rem
          .info-top
            display: flex
            margin-bottom: .18rem
            .info-one
              flex-grow: 1
              height: .43rem
              line-height: .43rem
              .star
                font-size: .28rem
                color: #ff6300
                margin-right: 0.16rem
            .song
              color: #fff
              font-size: .22rem
              background: #00a6ff
              padding: .1rem .12rem
              display: inline-block
              border-radius: 0 3px 3px 0
          .info-bottom
            display: flex
            margin-bottom: 0.22rem
            .song
              flex-grow: 1
              .del
                color: #b9b9b9
                font-size: .24rem
                text-decoration:line-through
        .item-bottom
          color: #ff4b33
          height: .4rem
          line-height: .4rem
          font-size: .2rem
          margin-left: -.05rem
          span
            padding: .04rem
            margin: 0 .05rem
            border: 1px solid #ffc9c1
            border-radius: 2px
  .recommend-load
    display: flex
    height: .76rem
    justify-content: center
.recommendActive
  .title
    margin-bottom: 1.84rem
  .menu
    position: fixed
    top: 2.04rem
    left: 0
    z-index: 998
    .menu-select
      margin: 0 .25rem
    .menu-hb
      margin: 0 .25rem
</style>
