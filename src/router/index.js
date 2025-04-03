import MainLayout from '@/zems/front/Layout/MainLayout.vue'
import AboutPage from '@/zems/front/pages/AboutPage.vue'
import AddToy from '@/zems/front/pages/AddToy.vue'
import AllToys from '@/zems/front/pages/AllToys.vue'
import ContactPage from '@/zems/front/pages/ContactPage.vue'
import HomePage from '@/zems/front/pages/HomePage.vue'
import LoginPage from '@/zems/front/pages/LoginPage.vue'
import MyToys from '@/zems/front/pages/MyToys.vue'
import RegisterPage from '@/zems/front/pages/RegisterPage.vue'
import ToyDetails from '@/zems/front/pages/ToyDetails.vue'
// import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

// const loggedUser = ref(false)

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
          path: '/about',
          name: 'about',
          component: AboutPage,
          // component: () => import('../views/AboutView.vue'),
        },

        {
          path: '/contact',
          name: 'contact',
          component: ContactPage,
        },
        {
          path: '/all-toys',
          name: 'all-toys',
          // meta: { auth: 'LoggedIn' },
          component: AllToys,
        },
        {
          path: '/toy-details',
          name: 'toy-details',
          // meta: { auth: 'LoggedIn' },
          component: ToyDetails,
        },
        {
          path: '/add-toy',
          name: 'add-toy',
          // meta: { auth: 'LoggedIn' },
          component: AddToy,
        },
        {
          path: '/my-toys',
          name: 'my-toy',
          // meta: { auth: 'LoggedIn' },
          component: MyToys,
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
// router.beforeEach(async (to, from, next) => {
//   console.log(to.meta.auth);
//   if(to.meta.auth === 'LoggedIn' && !loggedUser.value) {
//     alert('Please Login First')
//     next({ name: 'login' })
//   }
//   next()
//   console.log(to, from)
// })

export default router
