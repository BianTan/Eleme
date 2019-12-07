<template>
  <div class="order">
    <order-header></order-header>
    <order-list></order-list>
  </div>
</template>

<script>
import OrderHeader from '@/pages/Header'
import OrderList from '@/pages/order/List.vue'
export default {
  name: 'Order',
  components: {
    OrderHeader,
    OrderList
  }
}
</script>

<style lang="stylus" scoped>
.order
  padding: .7rem .4rem 1.12rem .4rem
</style>
