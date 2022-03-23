import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Importacion de bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";

createApp(App).use(store).use(router).mount('#app')
