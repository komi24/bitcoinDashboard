import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/test',
      // name: 'HelloWorld',
      // component: HelloWorld
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
