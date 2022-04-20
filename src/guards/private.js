import useAuthUserStore from '@/store/auth';
import useDoctorStore from '@/store/doctor';
import useAppointmentStore from '@/store/appointment';

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
  const store = useDoctorStore();
  store.single(to.params.id)
    .then(doctor => {
      to.params.doctor = doctor;
      next();
    });
};

export const requiresAppointment = (to, from, next) => {
  const store = useAppointmentStore();
  store.fetchAppointments();
  next();
};
