import { mutateDoctorAdd, mutateDoctors, mutateDoctorDelete } from './mutation_creators';
import { setLoading, setError } from '../root';
import { addDoctorService, getDoctorsService, deleteDoctorService } from '../../services';

const intialState = () => ({
  doctors: [],
  doctor: null,
});

const doctorModule = {
  namespaced: true,
  state: intialState,
  getters: {
    doctors(state) {
      return state.doctors;
    },
    doctor(state) {
      return state.doctor;
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
    async add({commit, dispatch}, {credentials, cb}) {
      dispatch(setLoading(), { root: true });
      try {
          const response = await addDoctorService(credentials);
          const doctor = response.data.doctor;
          commit(mutateDoctorAdd(doctor));
          dispatch(setLoading(), { root: true });
          cb(`/doctor/${doctor.id}`)
        } catch (error) {
        dispatch(setError(error.message), { root: true });
        dispatch(setLoading(), { root: true });
      }
    },
    async delete({commit, dispatch}, {credentials}) {
      dispatch(setLoading(), { root: true });
      try {
          await deleteDoctorService(credentials);
          commit(mutateDoctorDelete(credentials));
          dispatch(setLoading(), { root: true });
        } catch (error) {
        dispatch(setError(error.message), { root: true });
        dispatch(setLoading(), { root: true });
      }
    },
  },
  mutations: {
    all: (state, {credentials}) => state.doctors = credentials,
    add: (state, {credentials}) => {
      state.doctor = credentials;
      state.doctors = state.doctors.concat(credentials);
      return state;
    },
    delete: (state, {credentials}) => {
      const { doctor, doctors } = state;
      if (doctor && doctor.id === credentials.id) {
        state.doctor = null;
      }
      state.doctors = doctors.filter(doctor => doctor.id !== credentials);
      return state;
    },
  },
};

export default doctorModule;
