import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './routes';
import store from './redux';
import api from './api';
import { getStorage } from './scripts/storage';

api.interceptors.request.use((config) =>{
  const token = getStorage('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  throw error;
});

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
