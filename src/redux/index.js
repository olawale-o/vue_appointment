import { createStore } from 'vuex';
import authModule from './auth';
import doctorModule from './doctor';
import rootStore from './root';

const store = createStore({
  ...rootStore,
  modules: {
   auth: authModule,
   doctor: doctorModule,
  },
});
export default store;