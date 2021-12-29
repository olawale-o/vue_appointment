import { mutateAuth, mutateLogout } from './mutation_creators';
import { setLoading, setError } from '../root';
import { loginService, registerService, logoutService } from '../../services';
import { actionDoctorReset } from '../doctor/action_creators';
import { actionAppointmentReset } from '../appointment/action_creators';

const intialState = () => ({
  user: null,
});

const authModule = {
  namespaced: true,
  state: intialState,
  getters: {
    currentUser(state) {
      return state.user;
    },
  },
  actions: {
    async login({commit, dispatch}, {credentials, cb}) {
      dispatch(setLoading(), { root: true });
      try {
          const response = await loginService(credentials);
          commit(mutateAuth(response));
          dispatch(setLoading(), { root: true });
          cb('/');
        } catch (error) {
        dispatch(setError(error.message), { root: true });
        dispatch(setLoading(), { root: true });
      }
    },
    async register({commit, dispatch}, {credentials, cb}) {
      dispatch(setLoading(), { root: true });
      try {
          const response = await registerService(credentials);
          commit(mutateAuth(response));
          dispatch(setLoading(), { root: true });
          cb('/');
        } catch (error) {
        dispatch(setError(error.message), { root: true });
        dispatch(setLoading(), { root: true });
      }
    },
    logout({commit, dispatch}) {
      dispatch(setLoading(), { root: true });
      return logoutService()
      .then(() => {
        dispatch(actionDoctorReset(), { root: true });
        dispatch(actionAppointmentReset(), { root: true });
        commit(mutateLogout());
        dispatch(setLoading(), { root: true });
      })
      .catch((error) => {
        dispatch(setError(error.message), { root: true });
        dispatch(setLoading(), { root: true });
      });
    },
  },
  mutations: {
    authenticate: (state, {credentials}) => state.user = credentials,
    logout: (state) => state.user = null,
  },
};

export default authModule;
