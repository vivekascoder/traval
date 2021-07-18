import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://bd358a90ecee.ngrok.io/api/',
})

createApp(App).use(store).use(router).mount('#app')
