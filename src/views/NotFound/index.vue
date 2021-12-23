<template>
  <div className="not__found">
    <h1>Not Found</h1>
    <p>This page could not be found.</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped>
  .not__found {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
    font-size: 2rem;
  }
</style>