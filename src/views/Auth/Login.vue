<template>
  <div className="login__container">
    <div className="auth__form">
      <form>
        <h3>Book an appointment</h3>
        <div className="field">
          <input
            type="text"
            placeholder="Email"
            className="input"
            required
         />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            className="input"
            required
          />
        </div>
        <div className="actions">
          <input type="submit" value="Login" className="btn auth-btn" />}
        </div>
        <a to="/register" className=link>
          Don't have an account?
        </a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<style scoped src="../../assets/styles/Auth.css"></style>
