import { mutateAuth } from './mutation_creators';
import { setLoading, setError } from '../root';
import { loginService, registerService } from '../../services';

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
  },
  mutations: {
    authenticate: (state, {credentials}) => state.user = credentials,
  },
};

export default authModule;
