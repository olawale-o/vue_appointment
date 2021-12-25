import { mutateDoctors } from './mutation_creators';
import { setLoading, setError } from '../root';
import { getDoctorsService } from '../../services';

const intialState = () => ({
  doctors: [],
});

const doctorModule = {
  namespaced: true,
  state: intialState,
  getters: {
    doctors(state) {
      return state.doctors;
    },
  },
  actions: {
    async all({commit, dispatch}) {
      dispatch(setLoading(), { root: true });
      try {
          const response = await getDoctorsService();
          commit(mutateDoctors(response.data.doctors));
          dispatch(setLoading(), { root: true });
        } catch (error) {
        dispatch(setError(error.message), { root: true });
        dispatch(setLoading(), { root: true });
      }
    },
  },
  mutations: {
    all: (state, {credentials}) => state.doctors = credentials,
  },
};

export default doctorModule;
