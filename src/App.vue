<template>
  <Login />
</template>

<script>
import Login from './components/Auth/Login.vue'

export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
  #app {
    width: 100%;
  }

  a.active {
    background: #97bf0f;
    color: #fff;
  }
</style>
