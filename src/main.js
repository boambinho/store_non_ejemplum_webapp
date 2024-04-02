import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import redaxios from 'redaxios';
import './assets/fonts.css';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';

const app = createApp(App)

// Configurar redaxios

app.config.globalProperties.$http = redaxios

app.use(router)

app.mount('#app')
