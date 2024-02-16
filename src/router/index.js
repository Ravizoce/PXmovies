import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      props: route => ({ key: route.query.key || Date.now() }),
      meta: { transition: 'slide-left'},
      children: [
        {
          path: '/',
          name: 'defaultlist',
          component: () => import('../components/HomeCard.vue'),
          props: route => ({ key: route.query.key || Date.now() }),
        },
        {
          path: '/:screen/:type/:page',
          name: 'Type_page_list',
          component: () => import('../components/HomeCard.vue'),
          props: true,
        },
        {
          path: '/:screen/:type/:page',
          name: 'list',
          component: () => import('../components/HomeCard.vue'),
          props: true,
        },
      ]
    },
    {
      path: '/about/:screen/:type/:id*',
      name: 'about',
      props: true,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { transition: 'slide-left' },
    }
  ]
})

export default router
