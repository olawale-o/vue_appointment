<template>
  <div class="table__row">
    <div class="info">
      <img
        :src="`${BASE_URI}${doctor.picture}`"
        class="avatar"
        alt="appointment"
      />
      <span class="fs-3">{{doctor.fullname}}</span>
    </div>
    <div class="city">
      <span class="fs-3 bold xs">City: </span>
      <span class="fs-3">{{doctor.city}}</span>
    </div>
    <div class="specialty">
      <span class="fs-3 bold xs">Specialty: </span>
      <span class="fs-3">{{doctor.specialty}}</span>
    </div>
    <span class="fs-6">
      <button
        type="button"
        class="btn"
      >
        <i class="bx bx-trash-alt" />
      </button>
    </span>
  </div>
  <div class="divider" />
</template>

<script>
  import BASE_URI from '@/constants/url';
  export default {
    name: 'DoctorItemCard',
    props: {
      doctor: {
        type: Object,
        required: true,
      },
    },
    setup() {
      return { BASE_URI };
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