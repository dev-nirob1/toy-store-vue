import AboutPage from '@/zems/front/pages/AboutPage.vue'
import ContactPage from '@/zems/front/pages/ContactPage.vue'
import HomePage from '@/zems/front/pages/HomePage.vue'
import LoginPage from '@/zems/front/pages/LoginPage.vue'
import RegisterPage from '@/zems/front/pages/RegisterPage.vue'
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
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage
    }
  ],
})

export default router
