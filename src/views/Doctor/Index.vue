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
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import CarouselSlider from '@/components/CarouselSlider';
  export default {
    name: 'DoctorIndex',
    components: {
      CarouselSlider,
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