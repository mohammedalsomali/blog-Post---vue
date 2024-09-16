import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Blog from '../views/Blog.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Login',
      name: 'login',
      component: Login
    },
    {
      path: '/Blog',
      name: 'Blog',
      component: Blog
    }
  ]
})

export default router
