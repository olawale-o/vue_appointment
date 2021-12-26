<template>
  <div className="Appointments" style="background: 'whitesmoke', min-height: '700px', padding-top: '10rem'">
    <div className="table__container">
      <div className="loading__indicator" v-if="loading" />
      <template v-if="doctors.length > 0">
        <h1 className="heading1">My Doctors</h1>
        <DoctorList :doctors="doctors" />
      </template>
      <div style="font-size: '3rem', text-align: 'center'" v-if="doctors.length === 0">You dont have doctors</div>
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import DoctorList from '@/components/DoctorList';
  export default {
    name: 'RemoveDoctor',
    components: {
      DoctorList,
    },
    setup() {
      const store = useStore();
      return {
        doctors: computed(() => store.getters['doctor/doctors']),
        loading: computed(() => store.getters.loading),
      }
    },
  }
</script>

<style scoped>

</style>