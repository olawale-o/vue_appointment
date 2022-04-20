<template>
  <div class="details" style="padding-top: '6rem'">
    <div class="loadding__indicator" v-if="loading" />
    <div class="details__container" v-else>
      <router-link to="/" class="back__btn"><i class="bx bx-arrow-back" /></router-link>
      <div class="large__picture">
        <img :src="`${BASE_URI}${currentDoctor.picture}`" alt="doc" />
      </div>
      <div class="details__info">
        <h2 class="detail__info-name">{{`Dr. ${currentDoctor.fullname}`}}</h2>
        <div class="specialty__div">
          <p class="speciality__banner">Specialty</p>
          <h6 class="specialty__title">{{currentDoctor.specialty}}</h6>
        </div>
        <div class="city__div">
          <p class="city__banner">City</p>
          <h6 class="city__title">{{currentDoctor.city}}</h6>
        </div>
        <div class="fee__container">
          <span class="fee">$10</span>
            per hour
        </div>
        <div class="note">
          <p class="note__description">
            All of our docs have an hourly rate of $10 according to the
            regulations imposed by our platform. To read more about it,
            please contact our staff.
          </p>
        </div>
        <div class="btn__container">
          <router-link to="/appointment" class="btn btn__large">Book an appointment</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BASE_URI from '@/constants/url';
  import { storeToRefs } from 'pinia';
  import useDoctorStore from '@/store/doctor';
  export default {
    name: 'docDetail',
    props: {
      doctor: {
        type: Object,
        required: true
      }
    },
    setup() {
      const { loading, currentDoctor } = storeToRefs(useDoctorStore());
      return {
        BASE_URI,
        loading,
        currentDoctor
      };
    },
  }
</script>

<style scoped>
  .details__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
  }

  .back__btn {
    position: absolute;
    bottom: 900px;
    left: -50px;
    background: #97bf0f;
    color: #fff;
    font-size: 5rem;
    cursor: pointer;
    height: 70px;
    width: 150px;
    border-radius: 100px;
    display: grid;
    place-items: center;
  }

  .large__picture {
    margin-bottom: 2rem;
    display: grid;
    place-items: center;
  }

  .large__picture img {
    width: 45rem;
    height: 45rem;
    border-radius: 50%;
    object-fit: cover;
  }

  .details__info {
    width: 60%;
    margin: 0 auto;
  }

  .detail__info-name {
    font-size: 4rem;
    font-weight: bold;
    color: #000;
    margin-bottom: 2rem;
    text-align: right;
  }

  .speciality__banner,
  .city__banner {
    background: #ccc;
    padding: 0.5rem;
    width: 100%;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
  }

  .specialty__title,
  .city__title {
    font-size: 1.5rem;
    font-weight: lighter;
    text-align: right;
    margin-bottom: 2rem;
  }

  .fee__container {
    font-size: 2.5rem;
    font-weight: lighter;
    margin-bottom: 3rem;
  }

  .fee {
    font-weight: bold;
  }

  .note {
    margin-bottom: 3rem;
    text-align: right;
  }

  .note__description {
    font-size: 1.5rem;
    font-weight: lighter;
  }

  .btn__container {
    text-align: right;
  }

  .btn__large {
    background: #97bf0f;
    border-color: #97bf0f;
    border-radius: 30px;
    padding: 2rem 3rem;
    color: #fff;
  }

  @media screen and (min-width: 991px) {
    .details__container {
      width: 95%;
      margin: 0 auto;
      flex-direction: row;
    }

    .back__btn {
      position: absolute;
      bottom: -10px;
    }

    .large__picture {
      width: 60%;
    }

    .details__info {
      width: 40%;
      padding-left: 4rem;
    }
  }

  @media screen and (min-width: 1024px) {
    .large__picture img {
      width: 50rem;
      height: 50rem;
    }
  }

  @media screen and (min-width: 1200px) {
    .large__picture img {
      width: 60rem;
      height: 60rem;
    }

    .details__info {
      padding-left: 6rem;
    }
  }
</style>
