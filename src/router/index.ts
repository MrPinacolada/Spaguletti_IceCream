import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: () => import('@/App.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import('@/App.vue')
    }
  ]
})

export default router
