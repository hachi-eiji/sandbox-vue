import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('../views/ButtonView.vue')
    },
    {
      path: '/pokemon',
      name: 'pokemon',
      component: () => import('../views/PokemonView.vue')
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import('../views/ReactiveView.vue')
    }
  ]
})

export default router
