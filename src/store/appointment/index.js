import { defineStore } from 'pinia';
import {
  getAppointmentsService,
  createAppointmentService,
  deleteAppointmentService,
} from "@/services";
import useDoctorStore from '../doctor';

const useAppointmentStore = defineStore({
  id: 'appointment',
  state: () => ({
    appointment: null,
    appointments: [],
    loading: false,
    error: null,
  }),
  getters: {
    allAppointments: (state) => state.appointments,
    selectedAppointment: (state) => state.appointment,
    getAppointmentById: (state) => (id) => state.appointments.find((appointment) => appointment.id === id),
  },
  actions: {
    async fetchAppointments() {
      this.loading = !this.loading;
      try {
        const { data: { appointments } } = await getAppointmentsService();
        this.updateAppointments(appointments);
      } catch(e) {
        this.error = e.message;
      } finally {
        this.loading = !this.loading;
      }
    },

    async addAppointment(credentials) {
      const doctorStore = useDoctorStore();
      this.loading = !this.loading;
      try {
        const { data: { appointment } } = await createAppointmentService(credentials);
        this.updateAppointment(appointment);
        this.addNewAppointment(appointment);
        doctorStore.onDoctorToBook('');
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = !this.loading;
      }
    },

    async removeAppointment(credentials){
      this.loading = !this.loading;
      try {
        await deleteAppointmentService(credentials)
        this.deleteAppointment(credentials);
      } catch(e) {
        this.error = e.message;
      } finally {
        this.loading = !this.loading;
      }
    },

    updateAppointments(payload) {
      this.appointments = payload;
    },

    updateAppointment(payload) {
      this.appointment = payload;
    },

    addNewAppointment(payload) {
      this.appointments.concat(payload);
    },

    deleteAppointment(payload){
      const { appointment, appointments } = this.$state;
      if (appointment && appointment.id === payload.id) {
        this.appointment = null;
      }
      this.appointments = appointments.filter((appointment) => appointment.id !== payload);
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'appointment',
        storage: localStorage,
      }
    ]
  },
});

export default useAppointmentStore;
