import store from '../redux';
import { actionDoctors, actionDoctorSingle } from '../redux/doctor/action_creators';
import { actionAppointments } from '../redux/appointment/action_creators';
import { reset } from '../redux/root';
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

export const requiresGuest = (to, from, next) => {
  store.dispatch(reset());
  next();
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

export const requiresAppointment = (to, from, next) => {
  store.dispatch(actionAppointments());
  next();
};
