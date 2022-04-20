<template>
    <div class="booking__new">
      <div class="form">
        <form @submit.prevent="handleSubmit">
          <h1 class="heading1 mb-2" style="color: '#fff'">BOOK AN APPOINTMENT</h1>
          <div class="field">
            <select
              v-model="appointment.doctor_id"
              required
            >
              <option>Select a doctor</option>
                <option v-for="doctor in doctors" :value="doctor.id" :key="doctor.id">
                    {{ doctor.fullname }}
                </option>
            </select>
          </div>
          <div class="field">
            <input
              type="datetime-local"
              class="input"
              v-model="appointment.book_for"
              required
            />
          </div>
          <div class="actions">
            <div class="form__submission-indicator" v-if="loading"/>
            <input type="submit" value="Book" class="btn addBtn" v-else />}
          </div>
        </form>
      </div>
    </div>
</template>

<script>
  import { storeToRefs } from 'pinia';
  import { useReactive } from '@/composables/useReactive';
  import useAppointmentStore from '@/store/appointment';
  import useDoctorStore from '@/store/doctor';
  export default {
    setup() {
      const { addAppointment } = useAppointmentStore();
      const { loading } = storeToRefs(useAppointmentStore());
      const { doctors } = storeToRefs(useDoctorStore());
      const appointment = useReactive({
        book_for: '',
        doctor_id: '',
      });
      const handleSubmit = () => {
        addAppointment({appointment,});
      };

      return {
        appointment,
        handleSubmit,
        doctors,
        loading,
      }
    },
  }
</script>

<style scoped>

</style>