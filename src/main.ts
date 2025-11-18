import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { MotionPlugin } from '@vueuse/motion'
import './index.css'
const app = createApp(App)

app.use(MotionPlugin)
app.use(router)
app.mount('#app')

// NOTE: MotionPlugin is temporarily disabled for GitHub Pages debugging.
// If motion animations cause content to remain in their `initial` state
// (opacity: 0) in production, uncomment the line below after fixing.
// app.use(MotionPlugin)
