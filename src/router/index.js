import MainLayout from '@/zems/front/Layout/MainLayout.vue'
import AboutPage from '@/zems/front/pages/AboutPage.vue'
import ContactPage from '@/zems/front/pages/ContactPage.vue'
import HomePage from '@/zems/front/pages/HomePage.vue'
import LoginPage from '@/zems/front/pages/LoginPage.vue'
import RegisterPage from '@/zems/front/pages/RegisterPage.vue'
import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

const loggedUser = ref(false)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/about/:page',
          name: 'about',
          component: AboutPage,
          // component: () => import('../views/AboutView.vue'),
        },

        {
          path: '/contact',
          name: 'contact',
          meta: { auth: 'LoggedIn' },
          component: ContactPage,
        },
        {
          path: 'login',
          name: 'login',
          component: LoginPage,
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterPage,
        },
      ],
    },
  ],
})
router.beforeEach(async (to, from, next) => {
  console.log(to.meta.auth);
  if(to.meta.auth === 'LoggedIn' && !loggedUser.value) {
    alert('Please Login First')
    next({ name: 'login' })
  }
  next()
  console.log(to, from)
})

export default router
