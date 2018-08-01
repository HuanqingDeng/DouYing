<template>
<div>
    <div class="tabbar">
      <router-link to="/index" class="link">首页</router-link>
      <router-link to="/notice" class="link">关注</router-link>
      <div class="add link">+</div>
      <router-link to="/message" class="link">消息</router-link>
      <router-link to="/my" class="link">我</router-link>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      hidd: true
    }   
  },
  methods: {}
}   
</script>

<style lang="stylus" scoped>
.tabbar 
  position: fixed   
  bottom: 0   
  height: 3rem   
  width: 100%   
  background: #000   
  display: flex   
  justify-content: center   
  align-items: center   

  .link 
    display: inline-block   
    width: 3rem   
    height: 2rem   
    margin-left: 2.2rem   
    margin-right: 2rem   
    font-size: 14px   
    line-height: 2rem   
    font-weight: bolder   
    text-align: center   
    text-decoration: none   
    color: #fff   
  

  .add 
    font-size: 25px   
    background: #fff   
    color: #000   
    width: 4rem   
    border-radius: 12px   
  

</style>
