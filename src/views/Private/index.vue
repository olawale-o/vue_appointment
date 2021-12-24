<template>
  <div className="home">
    <Nav />
    <div className="child">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Nav from '@/components/Nav.vue';
  export default {
    name: 'Private',
    components: { Nav },
    setup() {
  
    },
  }
</script>

<style scoped>
  .home {
    min-height: 90vh;
    width: 100%;
    display: flex;
  }

  .child {
    position: relative;
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    .child {
      margin-left: auto;
      width: 75vw;
    }
  }

</style>
