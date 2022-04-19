import { defineStore } from 'pinia';

const useRootStore = defineStore('root', {
  state: () => ({
    loading: false,
    error: null,
  }),
  getters: {
    isLoading: (state) => state.loading,
    error: (state) => state.error,
  },
  actions: {
    setLoading() {
      this.loading = !this.loading;
    },
    setError(payload) {
      this.error = payload;
    }
  }
});

export default useRootStore;
