import { createRouter, createWebHistory } from 'vue-router'
import Works from '../views/Works.vue'
import Skills from '../views/Skills.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Works',
    component: Works
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
