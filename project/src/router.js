import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/pages/HomePage.vue'
import TopologiesPage from '@/components/pages/TopologiesPage.vue'
import Gallery from '@/components/views/Gallery.vue'
import Contacts from '@/components/views/Contacts.vue'

const routes = [
  { path: '/', component: HomePage, meta: { title: 'Главная - Сетевые топологии' } },
  { path: '/topologies', component: TopologiesPage, meta: { title: 'Топологии' } },
  { path: '/gallery', component: Gallery, meta: { title: 'Галерея топологий' } },
  { path: '/contacts', component: Contacts, meta: { title: 'Контакты' } }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Сетевые топологии'
})

export default router