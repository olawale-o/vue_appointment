import { mutateAuth } from './mutation_creators';
import { setLoading } from '../root';

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
    authenticate({commit, dispatch}, {credentials}) {
      commit(mutateAuth(credentials));
    },
  },
  mutations: {
    authenticate: (state, {credentials}) => state.user = credentials,
  },
};

export default authModule;
