<template>
  <div class="login__container">
    <div class="auth__form">
      <form @submit.prevent="onSubmit">
        <h3>Book an appointment</h3>
        <ul v-for="(value, name) in error" :key="name">
          <li class="server-error">{{name}} {{value[0]}}</li>
        </ul>
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
  import { useReactive } from '@/composables/useReactive';
  import { storeToRefs } from 'pinia';
  import useAuthUserStore from '@/store/auth';
  import { useRouter } from 'vue-router';
  export default {
    name: 'Signup',
    setup() {
      const router = useRouter();
      const user = useReactive({name: '', email: '', password: '', password_confirmation: '',});
      const { register } = useAuthUserStore();
      const { loading, error } = storeToRefs(useAuthUserStore());
      const onSubmit = () => {
        register({user}, router.push);
      };
      return {
        user,
        onSubmit,
        loading,
        error,
      }
    }
  }
</script>

<style scoped src="@/assets/styles/Auth.css"></style>