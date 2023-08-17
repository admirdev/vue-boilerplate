import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LoremIpsum1 from '../views/LoremIpsum1.vue'
import LoremIpsum2 from '../views/LoremIpsum2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/lorem-ipsum-1',
      name: 'lorem-ipsum-1',
      component: LoremIpsum1
    },
    {
      path: '/lorem-ipsum-2',
      name: 'lorem-ipsum-2',
      component: LoremIpsum2
    }
  ]
})

export default router
