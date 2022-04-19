import { defineStore } from 'pinia';

const useRootStore = defineStore('root', {
  state: () => ({
    token: null,
  }),
  getters: {
    currentToken: (state) => state.token,
  },
  actions: {
    setToken(payload) {
      this.token = payload;
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'root',
        storage: localStorage,
      }
    ]
  },
});

export default useRootStore;
