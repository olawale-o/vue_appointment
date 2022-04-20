<template>
  <div class="login__container">
    <div class="auth__form">
      <form @submit.prevent="onSubmit">
        <h3>Book an appointment</h3>
        <p class="server-error">{{error}}</p>
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
        <div class="actions">
          <div v-if="loading" class="form__submission-indicator" />
          <input v-else type="submit" value="Login" class="btn auth-btn" />
        </div>
        <router-link to="/register" class="link">Don't have an account?</router-link>
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
    name: 'Login',
    setup() {
      const router = useRouter();
      const user = useReactive({email: '', password: '',});
      const { login } = useAuthUserStore();
      const { loading, error } = storeToRefs(useAuthUserStore());
      const onSubmit = () => {
        login({user}, router.push);
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
