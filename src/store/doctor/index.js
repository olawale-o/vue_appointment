import { defineStore } from "pinia";
import {
  getDoctorsService,
  addDoctorService,
  deleteDoctorService,
  getDoctorService,
} from "@/services";

const useDoctorStore = defineStore('doctor', {
  state: () => ({
    doctor: null,
    doctors: [],
    loading: false,
    error: null,
  }),
  getters: {
    allDoctors: (state) => state.doctors,
    currentDoctor: (state) => state.doctor,
    getDoctorById: (state) => (id) => state.doctors.find((doctor) => doctor.id === id),
  },
  actions: {
    async fetchDoctors() {
      this.loading = !this.loading;
      try {
        const { data: { doctors } } = await getDoctorsService();
        this.updateDoctors(doctors);
      } catch(e) {
        this.error = e.message;
      } finally {
        this.loading = !this.loading;
      }
    },

    async addDoctor(credentials, cb) {
      this.loading = !this.loading;
      try {
        const { data: { doctor } } = await addDoctorService(credentials);
        this.updateDoctor(doctor)
        this.addNewDoctor(doctor)
        cb(`/doctor/${doctor.id}`);
      } catch (e) {
        this.error = e.message;
      } finally {
        this.loading = !this.loading;
      }
    },

    async delete(credentials){
      this.loading = !this.loading;
      try {
        await deleteDoctorService(credentials)
        this.deleteDoc(credentials);
      } catch(e) {
        this.error = e.message;
      } finally {
        this.loading = !this.loading;
      }
    },

    async single(credentials) {
      const doctor = this.doctors.find((doctor) => doctor.id === parseInt(credentials));
      if (doctor) {
        this.doctor = doctor
        return doctor;
      }
      try {
        return getDoctorService(credentials)
        .then(({ data: { doctor } }) => {
          this.updateDoctor(doctor);
          return doctor;
        })
      } catch(e) {
        this.error = e.message;
      } finally {
        this.loading = !this.loading;
      }
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
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'doctor',
        storage: localStorage,
      }
    ]
  },
});

export default useDoctorStore;
