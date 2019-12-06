<template>
  <div class="ProfileList">
    <ul class="list-wrapper">
      <router-link
        class="list-item"
        v-for="item of List"
        :key="item.id"
        :to="item.url"
      >
        <div class="icon-left iconfont">{{item.icon}}</div>
        <div class="item-title">{{item.label}}</div>
        <div class="icon-right">
          <p class="icon-red">{{item.iconRed}}</p>
          <i class="iconfont">&#xe688;</i>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProfileList',
  data () {
    return {
      List: [
        { id: 1, icon: '\ue75d', label: '我的红包', iconRed: '10个', url: '' },
        { id: 2, icon: '\ue8ae', label: '我的津贴', iconRed: '￥20', url: '' },
        { id: 3, icon: '\ue604', label: '我的地址', iconRed: '', url: '' },
        { id: 4, icon: '\ue7b8', label: '我的收藏', iconRed: '', url: '' },
        { id: 5, icon: '\ue605', label: '我的客服', iconRed: '', url: '' },
        { id: 6, icon: '\ue613', label: '规则中心', iconRed: '', url: '' }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.ProfileList
  .list-wrapper
    margin-top: .3rem
    .list-item
      color: #333
      font-size: .32rem
      display: flex
      padding: .45rem 0
      border-bottom: .01rem solid #f8f8f8
      align-items: center
      .icon-left
        color: #8a8a8a
        font-size: .46rem
        margin-right: .18rem
      .item-title
        flex-grow: 1
      .icon-right
        display: contents
        .icon-red
          color: #ff4c34
          font-size: .24rem
          margin-right: .1rem
        .iconfont
          font-size: .36rem
</style>
