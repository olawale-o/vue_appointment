import { createApp } from 'vue'
import './assets/index.css'
import App from './App.vue'
import router from './routes';
import store from './redux';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
