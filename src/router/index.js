import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import notice from '@/pages/notice'
import message from '@/pages/message'
import my from '@/pages/my'
import home from '@/pages/home'
import haha from '@/pages/haha'

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
      // children:[
      //   {
      //       path: 'haha',name: 'haha',component:haha
      //   },
      // ]
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
      component: my,
      children:[
        {
            path: 'haha',name: 'haha',component:haha,hidden: true
        },
      ]
    }
  ]
})
