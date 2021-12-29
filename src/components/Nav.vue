<template>
  <button
    type="button"
    class="menu"
    @click="toggleNav"
  >
    <i class="bx bx-x" v-if="isOpen" />
    <i class="bx bx-menu" v-else />
  </button>
  <div class="navigation" :class="{'show__header': isOpen}">
    <nav class="nav" :class="{'show__nav': isOpen}">
      <div class="logo">
        <router-link to="/" class="logo__link">Book A Doctor</router-link>
      </div>
      <ul className="nav__list">
        <li className="nav__item">
          <router-link to="/" class="nav__link">MEET OUR DOCTORS</router-link>
        </li>
        <li className="nav__item">
          <router-link to="/doctor/new" class="nav__link">ADD A DOCTOR</router-link>
        </li>
        <li className="nav__item">
          <router-link to="/appointment/new" class="nav__link">BOOK APPOINTMENT</router-link>
        </li>
        <li className="nav__item">
          <router-link to="/appointment/all" class="nav__link">MY APPOINTMENTS</router-link>
        </li>
        <li className="nav__item">
          <router-link to="/doctor/all" class="nav__link">DELETE A DOCTOR</router-link>
        </li>
        <li className="nav__item">
          <button type="button" class="logout-btn" @click="open = !open">LOG OUT</button>
        </li>
      </ul>
      <div class="footer__nav">
        <ul class="socials">
          <li class="social__item">
            <a href="/#" class="social__link">
              <i class="bx bxl-facebook" />
            </a>
          </li>
          <li class="social__item">
            <a href="/#" class="social__link">
              <i class="bx bxl-twitter" />
            </a>
          </li>
          <li class="social__item">
            <a href="/#" class="social__link">
              <i class="bx bxl-pinterest-alt" />
            </a>
          </li>
          <li class="social__item">
            <a href="/#" class="social__link">
              <i class="bx bxl-google-plus" />
            </a>
          </li>
          <li class="social__item">
            <a href="/#" class="social__link">
              <i class="bx bxl-vimeo" />
            </a>
          </li>
        </ul>
        <p class="copyright">
          &copy; 2021 Microverse
        </p>
      </div>
    </nav>
    <teleport to="#modals">
      <LogoutModal v-if="open" @close="onClose" />
    </teleport>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import LogoutModal from '@/components/LogoutModal.vue';
  export default {
    name: 'Nav',
    components: {
      LogoutModal,
    },
    setup() {
      const isOpen = ref(false);
      const open = ref(false);

      const toggleNav = () => {
        isOpen.value = !isOpen.value;
      };

      const onClose = () => {
        open.value = false;
      };

      return { isOpen, toggleNav, open, onClose };
    },
  }
</script>

<style scoped src="../assets/styles/Nav.css"></style>