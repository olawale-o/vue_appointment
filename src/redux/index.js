import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import authModule from './auth';
import doctorModule from './doctor';
import rootStore from './root';

const store = createStore({
  ...rootStore,
  modules: {
   auth: authModule,
   doctor: doctorModule,
  },
  plugins: [createPersistedState()],
});
export default store;