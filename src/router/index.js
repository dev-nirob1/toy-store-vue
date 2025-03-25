import AboutPage from '@/zems/front/pages/AboutPage.vue'
import ContactPage from '@/zems/front/pages/ContactPage.vue'
import HomePage from '@/zems/front/pages/HomePage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
      // component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage
    },
  ],
})

export default router
