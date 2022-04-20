<template>
  <div class="table__row">
    <div class="info">
      <img
        :src="`${BASE_URI}${appointment.picture}`"
        class="avatar"
        alt="appointment"
      />
      <span class="fs-3">{{appointment.fullname}}</span>
    </div>
    <div class="city">
      <span class="fs-3 bold xs">City: </span>
      <span class="fs-3">{{appointment.city}}</span>
    </div>
    <div class="specialty">
      <span class="fs-3 bold xs">Specialty: </span>
      <span class="fs-3">{{appointment.specialty}}</span>
    </div>
    <div class="date">
      <span class="fs-3 bold xs">Appointment Date: </span>
      <span class="fs-3">Date</span>
    </div>
    <span class="fs-6">
      <button
        type="button"
        class="btn"
        @click="cancelAppointment(appointment.id)"
      >
       <i class="bx bx-x" />
     </button>
    </span>
  </div>
  <div class="divider" /> 
</template>

<script>
  import useAppointmentStore from '@/store/appointment';
  import BASE_URI from '@/constants/url';
  export default {
    props: {
      appointment: {
        type: Object,
        required: true,
      },
    },
    name: 'AppointmentCard',
    setup() {
      const { removeAppointment } = useAppointmentStore();
      const cancelAppointment = (id) => {
        removeAppointment(id);
      };
      return { BASE_URI, cancelAppointment };
    },
  }
</script>

<style scoped>
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: 'cover';
  }
</style>