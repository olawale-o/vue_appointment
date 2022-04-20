<template>
  <div class="appointments">
    <div class="table__container">
      <div class="loading__indicator" v-if="loading" />
      <template v-if="appointments.length > 0">
        <h1 class="heading1">My Appointments</h1>
        <AppointmentList :appointments="appointments" />
      </template>
      <div v-if="appointments.length === 0" class="empty">No appointments yet</div>
    </div>
  </div>
</template>

<script>
  import { storeToRefs } from 'pinia';
  import useAppointmentStore from '@/store/appointment';
  import AppointmentList from '@/components/AppointmentList.vue';
  export default {
    name: 'AllAppointments',
    components: {
      AppointmentList,
    },
    setup() {
      const { loading, appointments } = storeToRefs(useAppointmentStore());
      return {
        appointments,
        loading,
      }
    },
  }
</script>

<style scoped>
</style>