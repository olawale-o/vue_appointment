import { createRouter, createWebHistory } from 'vue-router';

const Login = () => import('../views/Auth/Login.vue');
const Register = () => import('../views/Auth/Signup.vue');
const NotFound = () => import('../views/NotFound');
const Private = () => import('../views/Private');
const RemoveDoctor = () => import('../views/Doctor/All.vue');
const NewDoctor = () => import('../views/Doctor/New.vue');


const routes = [
  {
    path: '/',
    name: 'Prviate',
    component: Private,
    children: [
      {
        path: '/doctor/all',
        name: 'RemoveDoctor',
        component: RemoveDoctor,
      },
      {
        path: '/doctor/new',
        name: 'NewDoctor',
        component: NewDoctor,
      },
    ],
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
  linkExactActiveClass: 'exact-active',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
