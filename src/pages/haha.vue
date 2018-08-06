<template>
<div class="page">
    <div class="k" @click="$router.go(-1)">返回</div>
    <div>哈哈哈</div>
</div>
    
</template>

<script>
export default {
//获取屏幕高度
    mounted: function () {
    //原生获取屏幕高度
    var orderHight = document.body.clientHeight
    console.log(orderHight)
    // document.getElementById('order-list').style.height = orderHight + 'px'
  }
}
</script>

<style lang="stylus" scoped>
.page
    display inline-block
    height 15rem
    background red
    overflow hidden
    z-index 1000
</style>

