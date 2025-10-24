import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about/index.vue'),
    },
    {
      path: '/scientific',
      name: 'scientific',
      component: () => import('../views/scientific/index.vue'),
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/news/index.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/product/index.vue'),
    },
    {
      path: '/global',
      name: 'global',
      component: () => import('../views/global/index.vue'),
    },
  ],
})

export default router
