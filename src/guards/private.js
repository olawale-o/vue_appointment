import store from '../redux';

const requiresAuth = (to, from, next) => {
  const currentUser = store.getters['auth/currentUser'];
  if (!currentUser) {
    next({
      path: '/login',
      query: { redirect: to.fullPath },
    });
  } else {
    next();
  }
};

export default requiresAuth;
