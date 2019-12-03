<template>
  <div id="app">
    <div class="main">
      <router-view/>
    </div>
    <div class="menu">
      <router-link
        :key="item.id"
        :class="{'active':activeIndex == index}"
        :to="item.url"
        v-for="(item, index) of items">
        <i class="iconfont">{{item.icon}}</i>
        <p>{{item.label}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        { id: 1, icon: '\ue606', label: '首页', url: '/' },
        { id: 2, icon: '\ue613', label: '订单', url: '/list' },
        { id: 3, icon: '\ue633', label: '我的', url: '/user' }
      ],
      activeIndex: 0
    }
  }
}
</script>

<style lang="stylus" scoped>
  .menu
    left: 0
    bottom: 0
    width: 100%
    display: flex
    position: fixed
    height: 1.18rem
    background: #fff
    border-top: 1px solid #eee;
    a
      color: #7f7f7f
      height: 100%
      flex-grow: 1
      display: flex
      align-items: center
      justify-content: center
      flex-direction: column
      .iconfont
        font-size: .42rem
        margin-bottom: 0.04rem
    .router-link-exact-active
      color: #1886ff
  .main .home
    margin-top: 1.8rem
</style>
