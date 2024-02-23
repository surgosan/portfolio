import { createRouter, createWebHistory } from 'vue-router';
import homePage from '../views/home.vue';
import projectsVue from '@/views/projects.vue';
import missing from "@/views/missing.vue";
import originalPortfolio from "@/views/originalPortfolio.vue";
import aboutPage from '@/views/aboutPage.vue';
import suggestionsPageVue from '@/views/suggestionsPage.vue';
import adminPage from '@/views/adminPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/about',
    name: 'about',
    component: aboutPage
  },
  {
    path: '/suggestions',
    name: 'suggestions Page',
    component: suggestionsPageVue
  },
  {
    path: '/admin/surgosan',
    name: 'Admin Page',
    component: adminPage
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
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
