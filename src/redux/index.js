import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import appointmentModule from './appointment';
import authModule from './auth';
import doctorModule from './doctor';
import rootStore from './root';

const store = createStore({
  ...rootStore,
  modules: {
   auth: authModule,
   doctor: doctorModule,
   appointment: appointmentModule,
  },
  plugins: [createPersistedState()],
});
export default store;