import { createStore } from 'vuex';
import authModule from './auth';
import rootStore from './root';

const store = createStore({
  ...rootStore,
  modules: {
   auth: authModule,
  },
});
export default store;