import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import redaxios from 'redaxios'

const app = createApp(App)

// Configurar redaxios

app.config.globalProperties.$http = redaxios

app.use(router)

app.mount('#app')
