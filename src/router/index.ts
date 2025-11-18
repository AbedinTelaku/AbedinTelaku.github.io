import { createRouter, createWebHistory } from 'vue-router'

// Use Vite's base (import.meta.env.BASE_URL) so the router works when the app
// is served from a subpath (like /portfolio/ on GitHub Pages).
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    }
  ],
})

export default router
