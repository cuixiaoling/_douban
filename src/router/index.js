import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '@/pages/PagesView'
import HomeView from '@/pages/HomeView'
import BookView from '@/pages/BookView'
import test from '@/pages/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/pages/'
    },
    {
      path:'/test',
      component: test
    },
    /*嵌套路由*/
    {
      path:'/pages',
      component: PagesView,
      children:[
        {
          path: '',
          redirect: '/pages/home'
        },
        {
          path: 'home',
          name: 'HomeView',
          component: HomeView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
      ]
    },
    
    
  ]
})
