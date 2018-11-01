<template>
  <div class="page">
      <div >
        <div class="k" @click="$router.go(-1)">返回</div>
        <!-- <div class="add" @click="pus">点击进去全新的页面</div> -->
        <router-link to="/haha" >点击</router-link>
        <home/>
      </div>
  </div>

</template>

<script>
import Home from '@/pages/home'
export default {
  data(){
    return{
      h:true
    }
  },
  components:{
    home:Home
  },
  methods:{

  }
}
</script>

<style lang="stylus" scoped>
.page
  height 100vh
  background 	rgb(9, 6, 53)
  color #fff
</style>
