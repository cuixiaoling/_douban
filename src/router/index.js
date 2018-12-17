import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '@/pages/PagesView'
import HomeView from '@/pages/HomeView'
import MovieView from '@/pages/MovieView'
import BookView from '@/pages/BookView'
import StatusView from '@/pages/StatusView'
import GroupView from '@/pages/GroupView'
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
          path: 'movie',
          name: 'MovieView',
          component: MovieView
        },
        {
          path: 'book',
          name: 'BookView',
          component: BookView
        },
        {
          path: 'status',
          name: 'StatusView',
          component: StatusView
        },
        {
          path: 'group',
          name: 'GroupView',
          component: GroupView
        },
       
      ]
    },
    
    
  ]
})
