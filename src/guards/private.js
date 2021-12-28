import store from '../redux';
import { actionDoctors, actionDoctorSingle } from '../redux/doctor/action_creators';
const CURRENT_USER = 'auth/currentUser';

export const requiresAuth = (to, from, next) => {
  const currentUser = store.getters[CURRENT_USER];
  if (!currentUser) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
};

export const requiresDoctors = (to, from, next) => {
  store.dispatch(actionDoctors());
  next();
};

export const requiresDoctor = (to, from, next) => {
  store.dispatch(actionDoctorSingle(to.params.id))
    .then(doctor => {
      to.params.doctor = doctor;
      next();
    });
};