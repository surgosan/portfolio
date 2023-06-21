import { createRouter, createWebHistory } from 'vue-router';
import homePage from '../views/home.vue';
import aboutPageVue from '@/views/aboutPage.vue';
import projectsVue from '@/views/projects.vue';
import missing from "@/views/missing.vue";
import originalPortfolio from "@/views/originalPortfolio.vue";
import newAboutPageVue from '@/views/newAboutPage.vue';
import testView from "@/views/secondaryViews/test.vue";
import suggestionsPageVue from '@/views/suggestionsPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: newAboutPageVue,
      topicView: testView
    }
  },
  {
    path: '/aboutb',
    name: 'aboutb',
    component: aboutPageVue
  },
  {
    path: '/suggestions',
    name: 'suggestions Page',
    component: suggestionsPageVue
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
