const LOADING = 'loading';
const ERROR = 'error';
export const setLoading = () => ({type: LOADING});
export const setError = (credentials) => ({type: ERROR, credentials});

const initialState = () => ({
  loading: false,
  error: null,
});


const rootStore = {
  state: initialState,
  getters: {
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    }
  },
  actions: {
    loading({commit}) {
      commit(setLoading());
    },
    error({commit}, {credentials}) {
      commit(setError(credentials));
    }
  },
  mutations: {
    loading: (state) => {
      const { loading } = state;
      state.loading = !loading;
      console.log('loading', state);
      return state;
    },
    error: (state, {credentials}) => state.error = credentials,
  },
};

export default rootStore;
