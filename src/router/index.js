import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/home.vue'
import aboutPageVue from '@/views/aboutPage.vue'
import projectsVue from '@/views/projects.vue'
import missing from "@/views/missing.vue"
import originalPortfolio from "@/views/originalPortfolio.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/about',
    name: 'about',
    component: aboutPageVue
  },
  {
    path: '/projects',
    name: 'projects',
    component: projectsVue
  },
  {
    path: '/original-portfolio',
    name: 'original-portfolio',
    component: originalPortfolio
  },
  {
    path: "/:patchMatch(.*)*",
    name: "Not Found",
    component: missing
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
