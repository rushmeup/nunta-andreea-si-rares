import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/soon',
      name: 'commingSoon',
      component: () => import('../views/CommingSoonView.vue')
    }
  ]
})

export default router
