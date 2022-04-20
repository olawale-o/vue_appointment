import { defineStore } from 'pinia';
import { loginService, registerService, logoutService } from '@/services';

const useAuthUserStore = defineStore('auth/user',  {
  state: () => ({
    user: null,
    loading: false,
    error: null,
  }),
  getters: {
    currentUser: (state) => state.user,
  },
  actions: {
    updateUser(payload) {
      this.user = { ...this.user, ...payload };
    },

    async login(credentials, cb) {
      try {
        this.loading = !this.loading;
        const response = await loginService(credentials);
        this.updateUser(response);
        cb('/');
      } catch (error) {
        this.error = error.response.data.error;
      } finally {
        this.loading = !this.loading;
      }
    },

    async register(credentials, cb) {
      this.loading = !this.loading;
      try {
        const response = await registerService(credentials);
        this.updateUser(response);
        cb('/');
      } catch (error) {
        this.error = error.response.data.error;
      } finally {
        this.loading = !this.loading;
      }
    },

    async logOut() {
      this.loading = !this.loading;
      try {
        return logoutService()
        .then(() => {
          this.$reset();
        }).catch((error) => {
          this.error = error.message;
        });
      } catch(e) {
        this.error = e.message;
      } finally {
        this.loading = !this.loading;
      }

    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'auth',
        storage: localStorage,
      }
    ]
  },
});

export default useAuthUserStore;
