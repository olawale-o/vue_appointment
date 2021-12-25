<template>
  <div class="slider" style="width:100%">
  <Splide :options="options">
    <SplideSlide v-for="doctor in doctors" :key="doctor.id">
      <DoctorCard :doctor="doctor" />
    </SplideSlide>
  </Splide>
  </div>    
</template>

<script>
  import { ref } from 'vue';
  import '@splidejs/splide/dist/css/splide.min.css';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import DoctorCard from '@/components/DoctorCard';
  export default {
    name: 'CarouselSlider',
    components: {
      Splide,
      SplideSlide,
      DoctorCard
    },
    props: {
      doctors: {
        type: Array,
        required: true,
      },
    },
    setup() {
      const options = ref({
        rewind: false,
        perPage: 2,
        pagination: false,
      });

      return { options };
    },
  }
</script>

<style scoped>
</style>