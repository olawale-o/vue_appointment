import useAuthUserStore from '@/store/auth';
// import useRootStore from '../store/root';
import useDoctorStore from '@/store/doctor';
// import { actionDoctors, actionDoctorSingle } from '../redux/doctor/action_creators';
// import { actionAppointments } from '../redux/appointment/action_creators';

export const requiresAuth = (to, from, next) => {
  const store = useAuthUserStore();
  const currentUser = store.currentUser;
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
  const store = useAuthUserStore();
  const currentUser = store.currentUser;
  if (currentUser) {
    next({
      path: '/',
    });
  } else {
    next();
  }
};

export const requiresDoctors = (to, from, next) => {
  const store = useDoctorStore();
  store.fetchDoctors();
  next();
};

export const requiresDoctor = (to, from, next) => {
  next();
  // store.dispatch(actionDoctorSingle(to.params.id))
  //   .then(doctor => {
  //     to.params.doctor = doctor;
  //     next();
  //   });
};

export const requiresAppointment = (to, from, next) => {
  // store.dispatch(actionAppointments());
  next();
};
