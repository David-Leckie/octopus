import Vue from 'vue'
import VueRouter from 'vue-router'
import frontPage from '../pages/front-page.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'home',
      component: frontPage
    },
    {
      path: '/:passedText',//:passedCat',
      name: 'front-page',
      component: frontPage,
    },
    //{
      //path: '/about',
      //name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    //}
  ]

const router = new VueRouter({
  routes
})

export default router
