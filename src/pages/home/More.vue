<template>
  <div class="home-more">
    <div class="more-wrapper">
      <div class="more-one">
        <div class="card-wrapper">
          <div class="more-card">
            <div class="card-title">超级会员</div>
            <div class="card-info">下单可获得奖励金</div>
          </div>
        </div>
        <div class="card-wrapper">
          <div class="more-card">
            <div class="card-title">津贴联盟</div>
            <div class="card-info"><span class="card-span">20元</span>专属补贴</div>
          </div>
        </div>
      </div>
      <div class="card-wrapper">
        <div class="more-card">
          <div class="card-title">我的专属红包</div>
          <div class="card-info">今日已领<span class="card-span">2</span>个</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMore'
}
</script>

<style lang="stylus" scoped>
.more-wrapper > .card-wrapper
  width: 100%
  height: .9rem
  margin: .1rem 0
  .more-card
    background: linear-gradient(90deg, #ffeeee, #ffeaea)
    border-radius: .06rem
    user-select: none
    cursor: pointer
    .card-title
      padding-left: .22rem
      font-weight: 800
      font-size: 0.3rem
      display: inline-block
      height: .9rem
      line-height: .9rem
    .card-info
      float: right
      padding-right: .22rem
      display: inline-block
      height: .9rem
      font-size: .24rem
      line-height: .9rem
      .card-span
        font-size: .36rem
        margin: 0 .06rem
        color: #ff535d
.more-wrapper
  margin: 0 .25rem
  .more-one
    width: 100%
    height:0
    padding-bottom: 1.2rem
    .card-wrapper
      float: left
      width: 50%
      .more-card
        cursor: pointer
        height: 1.2rem
        background: linear-gradient(90deg, #fdf5e5, #fbeccd)
        border-radius: .06rem
        padding-left: .22rem
        margin-right: .05rem
        user-select: none
        .card-title
          color: #624a34
          font-weight: 600
          font-size: .3rem
          padding: .26rem 0 .17rem 0
        .card-info
          color: #9d876e
          font-size: .22rem
          height: .26rem
          line-height: .26rem
    .card-wrapper:nth-child(2)
      float: right
      .more-card
        margin-right: 0
        margin-left: .05rem
        background: linear-gradient(90deg, #fdeeea, #fde9e7)
        .card-title
          color: #7d3939
        .card-info
          color: #b09798
          .card-span
            color: #ff4b33
            font-weight: 600
            font-size: .26rem
</style>
