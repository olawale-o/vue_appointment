import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './routes';
import pinia from './store';
import api from './api';
import useRootStore from './store/root';

api.interceptors.request.use((config) =>{
  const rootStore = useRootStore();
  const token = rootStore.currentToken;
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
app.use(pinia)
app.mount('#app');
