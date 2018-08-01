<template>
  <div class="page" >
    <home/>
    <div class="page_header">
      <div class="pagetitle">消息</div>
      <div class="contact">联系人></div>
      <div class="headNav">
        <div >
          <div class="nav" style="background:#6c85f2"><img src="./../assets/fans.png" alt=""></div>
          <span>粉丝</span>
        </div>
        <div >
          <div class="nav" style="background:#red"><img src="./../assets/like.png" alt=""></div>
          <span>喜欢</span>
        </div>
        <div >
          <div class="nav" style="background:#1bf264"><img src="./../assets/linkme.jpg" alt=""></div>
          <span>@我</span>
        </div>
        <div >
          <div class="nav" style="background:#a242f7"><img src="./../assets/comment.png" alt=""></div>
          <span>评论</span>
        </div>  
      </div>
    </div>
    <div class="page_body">
      <div class="list">
        <div class="img" style="background:#000">
          <img src="./../assets/douyin.png" alt="">
        </div>
        <div class="right">
          <div class="title">抖音小助手</div>
          <div class="desc">撅嘴都是爱你的形状</div>
        </div>
      </div>
      <div class="list">
        <div class="img" style="background:#6c85f2">
          <img src="./../assets/recommend.png" alt="">
        </div>
        <div class="right">
          <div class="title">精彩推荐</div>
          <div class="desc">注意 一大波小姐姐正在靠近</div>
        </div>
      </div>
      <div class="list">
        <div class="img" style="background:red">
          <img src="./../assets/msg.png" alt="">
        </div>
        <div class="right">
          <div class="title">系统消息</div>
          <div class="desc">参与新人调查</div>
        </div>
      </div>
    </div>
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
  // width 100%
  height 100vh
  background 	rgb(9, 6, 53);
  .page_header
    color #fff
    position relative
    background 	rgb(23, 17, 73)
    padding-bottom 10px
    .pagetitle
      width 4rem
      height 1rem
      margin-left auto 
      margin-right auto
      font-size 19px
      font-weight bold
      padding-top 10px
      margin-bottom 3rem
    .contact
      position absolute
      right 10px
      top 15px
    .headNav
      display flex
      justify-content space-around
      .nav
        margin-left 2.5rem
        margin-right 2.5rem
        display inline-block
        width 4rem
        height 4rem
        background red
        color #fff
        text-align center
        display flex
        justify-content center
        align-items center
        border-radius 5px
        margin-bottom 0.5rem
        img
          width 3rem
          height 3rem
      span 
        margin-left 3.1rem
  .page_body
    margin-top 10px
    .list
      width 100%
      height 7rem
      margin-top 3px
      background 	rgb(23, 17, 73)
      padding-top 15px
      position relative
      .img
        height 5rem
        width 5rem
        display flex
        justify-content center
        align-items center
        border-radius 50%
        margin-left 10px
        img 
          height 3rem
          width 3rem
      .right
        position absolute
        left 7rem
        top 2rem
        .title
          color #fff
          font-style 20px
          margin-bottom 10px
        .desc
          color #696969
          font-style 17px
</style>
