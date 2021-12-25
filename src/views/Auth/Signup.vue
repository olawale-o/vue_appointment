<template>
  <div class="login__container">
    <div class="auth__form">
      <form @submit.prevent="onSubmit">
        <h3>Book an appointment</h3>
        <div class="field">
          <input
            type="text"
            placeholder="Full name"
            class="input"
            v-model="user.name"
            required
          />
        </div>
        <div class="field">
          <input
            type="text"
            placeholder="Email"
            class="input"
            v-model="user.email"
            required
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="Password"
            class="input"
            v-model="user.password"
            required
          />
        </div>
        <div class="field">
          <input
            type="password"
            placeholder="Confirm Password"
            class="input"
            v-model="user.password_confirmation"
            required
          />
        </div>
        <div class="actions">
          <div v-if="loading" class="form__submission-indicator" />
          <input v-else type="submit" value="Login" class="btn auth-btn" />
        </div>
        <router-link to="/login" class="link">Already have an account?</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { actionRegister } from '../../redux/auth/action_creators';
export default {
  name: 'Signup',
  setup() {
    const router = useRouter();
    const user = reactive({name: '', email: '', password: '', password_confirmation: '',});
    const store = useStore();
    const onSubmit = () => {
      store.dispatch(actionRegister({user,}, router.push));
    };

    return {
      user, onSubmit,
      loading: computed(() => store.getters.loading),
    }
  }
}
</script>

<style scoped src="../../assets/styles/Auth.css"></style>