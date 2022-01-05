const LOADING = 'loading';
const ERROR = 'error';
const RESET = 'reset';
export const setLoading = () => ({type: LOADING});
export const setError = (credentials) => ({type: ERROR, credentials});
export const reset = () => ({type: RESET});

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
    },
    reset({commit}) {
      commit(reset());
    },
  },
  mutations: {
    loading: (state) => {
      const { loading } = state;
      state.loading = !loading;
      return state;
    },
    error: (state, {credentials}) => state.error = credentials,
    reset: (state) => {
      state.loading = false;
      state.error = null;
      return state;
    },
  },
};

export default rootStore;
