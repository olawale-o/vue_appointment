import { mutateAuth } from './mutation_creators';
import { setLoading, setError } from '../root';
import { loginService } from '../../services';

const intialState = () => ({
  user: {},
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
    async authenticate({commit, dispatch}, {credentials}) {
      dispatch(setLoading(), { root: true });
      try {
          const response = await loginService(credentials);
          console.log(response);
          commit(mutateAuth(response.data));
          dispatch(setLoading(), { root: true });
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
