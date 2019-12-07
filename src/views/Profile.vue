<template>
  <div class="profile">
    <profile-header></profile-header>
    <profile-comment></profile-comment>
    <profile-list></profile-list>
  </div>
</template>

<script>
import ProfileHeader from '@/pages/Header.vue'
import ProfileComment from '@/pages/profile/Comment.vue'
import ProfileList from '@/pages/profile/List.vue'
export default {
  name: 'Profile',
  components: {
    ProfileHeader,
    ProfileComment,
    ProfileList
  }
}
</script>

<style lang="stylus" scoped>
.profile
  padding: .96rem .25rem 1.12rem .25rem
</style>
