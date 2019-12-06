<template>
  <div class="profile-wrapper">
    <div class="user">
      <img class="user-img" src="@/assets/user.jpeg">
      <div class="user-info">
        <div class="user-title">我是笨蛋小扁担</div>
        <div class="user-phone">123****2333</div>
      </div>
    </div>
    <div class="vip-card">
      <div class="card-left">
        <div class="card-title">饿了么超级会员</div>
        <div class="card-reward"><span class="big">1</span>.0个<span class="little">奖励金</span></div>
      </div>
      <div class="card-right">
        立即使用 <span class="iconfont">&#xe615;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileComment'
}
</script>

<style lang="stylus" scoped>
.profile-wrapper
  .user
    display: flex
    padding: .1rem 0 .4rem 0
    .user-img
      width: 1.5rem
      height: 1.5rem
      border-radius: 50%
      margin-right: .26rem
    .user-info
      display: flex
      justify-content: center
      flex-direction: column
      flex-grow: 1
      .user-title
        color: #333333
        font-size: .56rem
        font-weight: 800
        width: 2.8rem;
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
      .user-phone
        color: #7f7f7f
        margin-top: .16rem
        font-size: .3rem
  .vip-card
    height: 1.86rem
    display: flex
    padding: 0 .42rem
    align-items: center
    border-radius: .2rem
    background: linear-gradient(90deg, #f7e4bf, #eec986)
    .card-left
      flex-grow: 1
      .card-title
        corlo: #64482e
        font-size: .32rem
        font-weight: 600
      .card-reward
        margin-top: .3rem
        font-size: .27rem
        font-weight: 600
        corlo: #64482e
        .big
          font-size: .5rem
        .little
          margin-left: .1rem
          font-weight: 400
          font-size: .24rem
    .card-right
      display: contents
      color: #65472d
      font-size: .26rem
      .iconfont
        font-size: .3rem
</style>
