import { createRouter, createWebHistory } from 'vue-router';

import {requiresAuth, requiresDoctors, requiresDoctor} from '../guards/private';
const Login = () => import('../views/Auth/Login.vue');
const Register = () => import('../views/Auth/Signup.vue');
const NotFound = () => import('../views/NotFound');
const Private = () => import('../views/Private');
const RemoveDoctor = () => import('../views/Doctor/All.vue');
const NewDoctor = () => import('../views/Doctor/New.vue');
const DoctorIndex = () => import('../views/Doctor/Index.vue');
const DoctorDetail = () => import('../views/Doctor/Detail.vue');


const routes = [
  {
    path: '/',
    name: 'Prviate',
    component: Private,
    meta: { requiresAuth: true },
    redirect: { name: 'DoctorIndex' },
    beforeEnter: requiresAuth,
    children: [
      {
        path: '',
        name: 'DoctorIndex',
        component: DoctorIndex,
        beforeEnter: requiresDoctors,
      },
      {
        path: 'doctor/all',
        name: 'RemoveDoctor',
        component: RemoveDoctor,
        beforeEnter: requiresDoctors,
      },
      {
        path: 'doctor/new',
        name: 'NewDoctor',
        component: NewDoctor,
      },
      {
        path: 'doctor/:id',
        name: 'DoctorDetail',
        props: true,
        beforeEnter: requiresDoctor,
        component: DoctorDetail,
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

// router.beforeEach((to, from,) => {
//   if (to.meta.requiresAuth) {
//     console.log(to);
//   } else {
//     console.log(from);
//   }
// });
export default router;
