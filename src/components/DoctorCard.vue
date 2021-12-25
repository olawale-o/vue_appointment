<template>
  <div class="card">
    <div class="image">
      <img :src="`${BASE_URI}${doctor.picture}`" alt="doctor" />
    </div>
    <h6 class="card__name">{{`Dr. ${doctor.fullname}`}}</h6>
    <p class="card__description">{{doctor.specialty}}</p>
    <router-link to="/" class="card__link">See details</router-link>
  </div>
</template>

<script>
  import BASE_URI from '@/constants/url';
  export default {
    name: 'DoctorCard',
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
  .card {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    padding: 0 1rem;
  }

  .image {
    margin-bottom: 2rem;
  }

  .image img {
    width: 22.5rem;
    height: 22.5rem;
    object-fit: cover;
  }

  .card__name {
    margin-bottom: 3rem;
    font-size: 2rem;
  }

  .card__description {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .card__link {
    font-size: 1.5rem;
    text-decoration: underline;
    margin-bottom: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    .image img {
      width: 30rem;
      height: 30rem;
    }
  }

  @media screen and (min-width: 992px) {
    .card__name {
      font-size: 3rem;
      margin-bottom: 3rem;
    }

    .card__description {
      margin-bottom: 3rem;
    }

    .card__link {
      margin-bottom: 2rem;
    }
  }
</style>
