<template>
  <div className="login__container">
    <div className="auth__form">
      <form @submit.prevent="onSubmit">
        <h3>Book an appointment</h3>
        <div className="field">
          <input
            type="text"
            placeholder="Full name"
            className="input"
            v-model="user.name"
            required
          />
        </div>
        <div className="field">
          <input
            type="text"
            placeholder="Email"
            className="input"
            v-model="user.email"
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            className="input"
            v-model="user.password"
            required
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            v-model="user.password_confirmation"
            required
          />
        </div>
        <div className="actions">
          <div v-if="loading" className="form__submission-indicator" />
          <input v-else type="submit" value="Login" className="btn auth-btn" />
        </div>
        <router-link to="/login" className="link">Already have an account?</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { actionRegister } from '../../redux/auth/action_creators';
export default {
  name: 'Signup',
  setup() {
    const user = reactive({name: '', email: '', password: '', password_confirmation: '',});
    const store = useStore();
    const onSubmit = () => {
      console.log(user);
      store.dispatch(actionRegister({user,}));
    };

    return {
      user, onSubmit,
      loading: computed(() => store.getters.loading),
    }
  }
}
</script>

<style scoped src="../../assets/styles/Auth.css"></style>