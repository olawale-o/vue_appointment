<template>
  <div class="appointments">
    <div class="table__container">
      <div class="loading__indicator" v-if="loading" />
      <template v-if="doctors.length > 0">
        <h1 class="heading1">My Doctors</h1>
        <DoctorList :doctors="doctors" />
      </template>
      <div class="empty" v-if="doctors.length === 0">You dont have doctors</div>
    </div>
  </div>
</template>

<script>
  import { storeToRefs } from 'pinia';
  import useDoctorStore from '@/store/doctor';
  import DoctorList from '@/components/DoctorList';
  export default {
    name: 'RemoveDoctor',
    components: {
      DoctorList,
    },
    setup() {
      const { doctors, loading } = storeToRefs(useDoctorStore());
      return {
        doctors,
        loading,
      }
    },
  }
</script>

<style scoped>

</style>