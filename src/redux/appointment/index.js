import { mutateAppointmentAdd, mutateAppointmentDelete, mutateAppointments } from './mutation_creators';
import { setLoading, setError } from '../root';
import { getAppointmentsService, createAppointmentService, deleteAppointmentService } from '../../services';

const intialState = () => ({
  appointments: [],
  appointment: null,
});

const appointmentModule = {
  namespaced: true,
  state: intialState,
  getters: {
    appointments: (state) => state.appointments,
  },
  actions: {
    async all({commit, dispatch}) {
      dispatch(setLoading(), { root: true });
      try {
          const response = await getAppointmentsService();
          commit(mutateAppointments(response.data.appointments));
          dispatch(setLoading(), { root: true });
        } catch (error) {
        dispatch(setError(error.message), { root: true });
        dispatch(setLoading(), { root: true });
      }
    },
    async add({commit, dispatch}, {credentials}) {
      dispatch(setLoading(), { root: true });
      try {
          const response = await createAppointmentService(credentials);
          const appointment = response.data.appointment;
          commit(mutateAppointmentAdd(appointment));
          dispatch(setLoading(), { root: true });
        } catch (error) {
        dispatch(setError(error.message), { root: true });
        dispatch(setLoading(), { root: true });
      }
    },
    async delete({commit, dispatch}, {credentials}) {
      dispatch(setLoading(), { root: true });
      try {
          await deleteAppointmentService(credentials);
          commit(mutateAppointmentDelete(credentials));
          dispatch(setLoading(), { root: true });
        } catch (error) {
        dispatch(setError(error.message), { root: true });
        dispatch(setLoading(), { root: true });
      }
    },
  },
  mutations: {
    all: (state, {credentials}) => state.appointments = credentials,
    add: (state, {credentials}) => {
      state.appointment = credentials;
      state.appointments = state.appointments.concat(credentials);
      return state;
    },
    delete: (state, {credentials}) => {
      const { appointment, appointments } = state;
      if (appointment && appointment.id === credentials.id) {
        state.appointment = null;
      }
      state.appointments = appointments.filter(appointment => appointment.id !== credentials);
      return state;
    },
  },
};

export default appointmentModule;
