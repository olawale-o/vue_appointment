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
  import { reactive, computed } from 'vue';
  import { useStore } from 'vuex';
  import { actionAppointmentAdd } from '@/redux/appointment/action_creators';
  export default {
    setup() {
      const store = useStore();
      const appointment = reactive({
        book_for: '',
        doctor_id: '',
      });
      const handleSubmit = () => {
        store.dispatch(actionAppointmentAdd({appointment,}));
      };

      return {
        appointment, handleSubmit,
        doctors: computed(() => store.getters['doctor/doctors']),
        loading: computed(() => store.getters.loading),
      }
    },
  }
</script>

<style scoped>

</style>