<template>
  <div class="table">
    <div v-for="appointment in appointments" :key="appointment.id">
      <AppointmentCard :appointment="appointment" />
    </div>
  </div>
</template>

<script>
  import AppointmentCard from '@/components/AppointmentCard.vue';
  export default {
    name: 'AppointmentList',
    components: {
      AppointmentCard,
    },
    props: {
      appointments: {
        type: Array,
        required: true,
      },
    },
    setup() {
        
    },
  }
</script>

<style scoped>

</style>