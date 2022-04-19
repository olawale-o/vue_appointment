import { defineStore } from "pinia";
import { all, add, deleteDoctor, singleDoctor } from './async_action';

const useDoctorStore = defineStore('doctor', {
  state: () => ({
    doctor: null,
    doctors: [], 
  }),
  getters: {
    allDoctors: (state) => state.doctors,
    doctor: (state) => state.doctors,
    getDoctorById: (state) => (id) => state.doctors.find(doctor => doctor.id === id), 
  },
  actions: {
    async fetchDoctors() {
      await all(this.updateDoctors)
    },

    async addDoctor(credentials, cb) {
      await add(credentials, cb, this.updateDoctor, this.addNewDoctor)
    },

    async delete(credentials){
      await deleteDoctor(credentials, deleteDoc)
    },

    async single(credentials) {
      const doctor = this.getDoctorById(credentials);
      if (doctor) {
        this.doctor = doctor
        return doctor;
      }
      return singleDoctor(credentials, this.updateDoctor)
    },

    updateDoctors(payload) {
      this.doctors = payload;
    },

    updateDoctor(payload) {
      this.doctor = payload;
    },

    addNewDoctor(payload) {
      this.doctors.concat(payload);
    },

    deleteDoc(payload){
      const { doctor, doctors } = this.$state;
      if (doctor && doctor.id === payload.id) {
        this.doctor = null;
      }
      this.doctors = doctors.filter(doctor => doctor.id !== payload);
    }
  }
});

export default useDoctorStore;
