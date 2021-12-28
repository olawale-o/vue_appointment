<template>
  <div class="appointments">
    <div class="table__container">
      <div class="loading__indicator" v-if="loading" />
      <template v-if="bookings.length > 0">
        <h1 class="heading1">My Appointments</h1>
        <AppointmentList :appointments="bookings" />
      </template>
      <div v-if="bookings.length === 0" class="empty">No appointments yet</div>
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import AppointmentList from '@/components/AppointmentList.vue';
  export default {
    name: 'AllAppointments',
    components: {
      AppointmentList,
    },
    setup() {
      const store = useStore();
      return {
        bookings: computed(() => store.getters['appointment/appointments']),
        loading: computed(() => store.getters.loading),
      }
    },
  }
</script>

<style scoped>
</style>