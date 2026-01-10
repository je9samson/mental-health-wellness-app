import { createRouter, createWebHistory } from 'vue-router'
// 1. Import your new page files
import Home from '../views/Home.vue'
import Breathing from '../views/Breathing.vue'
import Wellness from '../views/Wellness.vue'
import AiSupport from '../views/AiSupport.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 2. Map the URLs to your components
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/breathing',
      name: 'breathing',
      component: Breathing
    },
    {
      path: '/wellness',
      name: 'wellness',
      component: Wellness
    },
    {
      path: '/ai-support',
      name: 'ai-support',
      component: AiSupport
    }
  ]
})

export default router