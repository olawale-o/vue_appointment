<template>
  <div className="login__container">
    <div className="form">
      <form>
        <h3>Book an appointment</h3>
        <div className={style.field}>
          <input
            type="text"
            placeholder="Full name"
            className="input"
            required
          />
        </div>
        <div className={style.field}>
          <input
            type="text"
            placeholder="Email"
            className="input"
            required
          />
        </div>
        <div className={style.field}>
          <input
            type="password"
            placeholder="Password"
            className="input"
            required
          />
        </div>
        <div className={style.field}>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            required
          />
        </div>
        <div className="actions">
          <input type="submit" value="Create" className="btn auth__btn" />}
        </div>
        <a href="/login" className="link">Already have an account?</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>