<template>
  <div class="eleme">
    <img src="@/assets/logoBlack.png">
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
.eleme
  position: fixed
  z-index: 998
  top: 0
  left: 0
  width: 100%
  height: .96rem
  display: flex
  padding: 0 0.43rem
  align-items: center
  background: #fff
  img
    width: auto
    height: .3rem
</style>
