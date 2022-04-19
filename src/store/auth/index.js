import { defineStore } from 'pinia';
import { onLogin, onRegister } from './async_action';

const useAuthUserStore = defineStore('auth/user',  {
  state: () => ({
    user: {},
  }),
  getters: {
    currentUser: (state) => state.user,
  },
  actions: {
    async login(credentials, cb) {
      await onLogin(credentials, cb, this.updateUser);
    },

    async register(credentials, cb) {
      await onRegister(credentials, cb, this.updateUser);
    },

    updateUser(payload) {
      this.user = { ...this.user, ...payload }
    }
  },
});

export default useAuthUserStore;
