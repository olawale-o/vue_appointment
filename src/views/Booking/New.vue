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
              <option value="">Choose a doctor...</option>
              <option
                v-for="doctor in doctors"
                :key="doctor.id"
                :value="doctor.id"
                :selected="Number(doctor.id) == Number(appointment.doctor_id)"
              >
                {{ doctor.fullname }}
              </option>
            </select>
          </div>
          <!-- <div class="field">
            <input
              type="datetime-local"
              class="input"
              v-model="appointment.book_for"
              required
            />
          </div> -->
          <TimeCalendar
            :fullDate="calendarDate"
            @update-date="updateDate"
            @set-date="setDate"
          />
          <div class="actions">
            <div class="form__submission-indicator" v-if="loading" />
            <input type="submit" value="Book" class="btn addBtn" aria-label="Book" v-else />}
          </div>
        </form>
      </div>
    </div>
</template>

<script>
  import TimeCalendar from '@/components/shared/TimeCalendar';
  import { ref } from 'vue';
  import { storeToRefs } from 'pinia';
  import { useReactive } from '@/composables/useReactive';
  import useAppointmentStore from '@/store/appointment';
  import useDoctorStore from '@/store/doctor';
  export default {
    components: {
      TimeCalendar,
    },
    setup() {
      const calendarDate = ref(new Date());
      const { addAppointment } = useAppointmentStore();
      const { loading } = storeToRefs(useAppointmentStore());
      const { doctors, bookDoctorId } = storeToRefs(useDoctorStore());
      let appointment = useReactive({
        book_for: '',
        doctor_id: bookDoctorId.value,
      });
      const handleSubmit = () => {
        const { book_for, doctor_id } = appointment;
        addAppointment({appointment: { book_for, doctor_id },});
        appointment.book_for = '';
        appointment.doctor_id = '';
      };

      return {
        appointment,
        handleSubmit,
        doctors,
        loading,
        calendarDate,
        updateDate: (direction) => {
          const newDate = new Date(calendarDate.value);
          if (direction === 'next') {
            newDate.setMonth(calendarDate.value.getMonth() + 1);
          } else {
            newDate.setMonth(calendarDate.value.getMonth() - 1);
          }
          calendarDate.value = newDate;
        },
        setDate: (selectedDate) => {
          console.log(selectedDate)
          appointment.book_for = selectedDate;
        },
      }
    },
  }
</script>

<style scoped>

</style>