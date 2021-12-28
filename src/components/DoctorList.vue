<template>
  <div className="table">
    <div v-for="doctor in doctors" :key="doctor.id">
      <DoctorItemCard :doctor="doctor" />
    </div>
  </div>
</template>

<script>
  import DoctorItemCard from '@/components/DoctorItemCard';
  export default {
    name: 'DoctorList',
    props: {
      doctors: {
        type: Array,
        required: true,
      },
    },
    components: {
      DoctorItemCard,
    },
    setup() {

    },
  }
</script>

<style scoped>

</style>