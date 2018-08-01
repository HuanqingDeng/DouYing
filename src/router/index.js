import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import notice from '@/components/notice'
import message from '@/components/message'
import my from '@/components/my'
import home from '@/pages/home'
import haha from '@/components/haha'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/index',
      name: 'index',
      component: index,
      children:[
        {
            path: '/index/haha',name: 'haha',component:haha
        },
      ]
    },
    {
      path: '/haha',name: 'haha',component:haha
    },
    {
      path: '/notice',
      name: 'notice',
      component: notice
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
