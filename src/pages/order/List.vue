<template>
  <div class="order-wrapper">
    <div class="list-header">
      <div class="list-title">订单</div>
      <div class="list-select">其它订单<span class="iconfont">&#xe6b9;</span></div>
    </div>
    <ul class="order-list">
      <li class="list-item" v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" class="item-img">
        <div class="item-wrapper">
          <div class="item-header">
            <div class="item-header-center">
              <div class="item-title"><p class="text">{{item.name}}</p><span class="iconfont">&#xe688;</span></div>
              <div class="item-datetime">{{item.datetime}}</div>
            </div>
            <div class="item-status">{{item.status}}</div>
          </div>
          <div class="item-center">
            <div class="item-detail">{{item.detail}}</div>
            <div class="item-price">{{item.price}}</div>
          </div>
          <div class="item-footer">
            <div class="item-button">删除订单</div>
            <div class="item-button">再来一单</div>
            <div class="item-button content">评价</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data () {
    return {
      list: [
        { id: '0001', name: '至尊比萨(太阳系店)', imgUrl: 'https://cube.elemecdn.com/8/ed/f6be3e780022a27eeb93f047c491epng.png', datetime: '9012-01-05 00:05', status: '订单已送达', detail: '998英寸金枕头榴莲比萨', price: '￥2998' },
        { id: '0002', name: '爺門串串(银河系店)', imgUrl: 'https://cube.elemecdn.com/1/53/0f73fd159d8615d0f15311ac0bfeapng.png', datetime: '9012-01-04 00:04', status: '订单已送达', detail: '外星人串串 * N份', price: '￥233' },
        { id: '0003', name: '华莱士(谈笑店)', imgUrl: 'https://cube.elemecdn.com/0/79/9f2c9cfdc2dfbd05aadc54b6836c3jpeg.jpeg', datetime: '9012-01-03 00:03', status: '订单已送达', detail: '白框眼镜 * 1', price: '￥1' },
        { id: '0004', name: '啃不起', imgUrl: 'https://attachment.jmw.com.cn/comp_uploadfile/slt/2018/05/10/s1_15361525924922.jpg', datetime: '9012-01-02 00:02', status: '订单已送达', detail: '铁🍔🍔 * 233', price: '￥250' },
        { id: '0005', name: '啃不啃得起', imgUrl: 'https://attachment.jmw.com.cn/comp_uploadfile/slt/2018/05/10/s1_15361525924922.jpg', datetime: '9012-01-01 00:01', status: '订单已送达', detail: '铁🍔🍔 * 1688', price: '￥251' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.order-wrapper
  .list-header
    display: flex
    height: 1.6rem
    align-items: center
    .list-title
      flex-grow: 1
      font-size: .56rem
      font-weight: 500
    .list-select
      font-size: .3rem
  .order-list
    .list-item
      display: flex
      padding-top: .24rem
      .item-img
        width: .8rem
        height: .8rem
        border-radius: 2px
        margin-right: .32rem
        object-fit: cover
      .item-wrapper
        flex-grow: 1
        display: flex
        padding-bottom: .42rem
        flex-direction: column
        border-bottom: 1px solid #f6f6f6
        .item-header
          display: flex
          .item-header-center
            flex-grow: 1
            .item-title
              display: flex
              font-size: .34rem
              font-weight: 400
              .text
                width: 4rem
                overflow: hidden
                white-space: nowrap
                text-overflow: ellipsis
            .item-datetime
              color: #878787
              margin-top: .12rem
              font-size: .25rem
        .item-center
          display: flex
          align-items: center
          margin: .52rem 0 .36rem 0
          .item-detail
            flex-grow: 1
            width: 4rem
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
          .item-price
            font-size: .27rem
            font-weight: 500
        .item-footer
          display: flex
          justify-content: flex-end
          .item-button
            margin: 0 .1rem
            padding: .16rem .26rem
            border: 1px solid #ccc
            border-radius: .1rem
          .content
            color: #2395ff
            border: 1px solid #7fd2ff
</style>
