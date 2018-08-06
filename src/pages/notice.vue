<template>
  <div class="page" >
    关注关注关注
    <home/>
    <div class="add" @click="pus">点击进去全新的页面</div>
  </div>

</template>

<script>
import Home from '@/pages/home'
export default {
  data(){
    return{
    }
  },
  components:{
    home:Home
  },
  methods:{
    pus(){
      this.$router.push({
        path:'haha'
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.page
  height 100vh
  background 	rgb(9, 6, 53)
</style>
