<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
.tabbar
  position fixed
  bottom 0
  height 3rem
  width 100%
  background #000
  display flex
  justify-content center
  align-items center
  .link
    display inline-block
    width 3rem
    height 2rem
    margin-left 1.2rem
    margin-right 0.8rem
    font-size 19px
    line-height 2rem
    font-weight bolder
    text-align center
    text-decoration none
    color #fff
  .add
    font-size 25px
    background #fff
    color #000
    width 4rem
    border-radius 12px
</style>
