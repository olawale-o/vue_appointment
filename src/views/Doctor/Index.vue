<template>
  <div className="doctor__list" style="overflow-x: 'hidden', padding-top: '6rem'">
    <div className="loading__indicator" v-if="loading" />
    <div v-if="doctors.length > 0">
      <div className="home__header">
        <h1 className="heading1">OUR RECENT DOCTORS</h1>
        <h5 className="heading5">Pick a Doctor for an Appointment!</h5>
      </div>
      <CarouselSlider :doctors="doctors" />
    </div>
    <div v-if="doctors.length === 0" style="font-size: '3rem', text-align: 'center'">No doctor on the list</div>
  </div>
</template>

<script>
  import { storeToRefs } from 'pinia';
  import useDoctorStore from '@/store/doctor';
  import CarouselSlider from '@/components/CarouselSlider';
  export default {
    name: 'DoctorIndex',
    components: {
      CarouselSlider,
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