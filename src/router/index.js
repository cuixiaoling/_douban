import Vue from 'vue'
import Router from 'vue-router'
import PagesView from '@/pages/PagesView'
import HomeView from '@/pages/HomeView'
import BookView from '@/pages/BookView'

Vue.use(Router)
/**
 * this.$route.params
 * this.$router.push 
 */

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/pages/'
    },
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
