import { createRouter, createWebHistory } from 'vue-router';

const Login = () => import('../views/Auth/Login.vue');
const Register = () => import('../views/Auth/Signup.vue');
const NotFound = () => import('../views/NotFound');
const HelloWorld = () => import('../views/HelloWorld.vue');


const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Signup',
    component: Register,
  },
  {
    path: '/:pathMatch(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
