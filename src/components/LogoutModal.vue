<template>
  <div class="modal">
    <div class="modal__body">
      <h6 class="modal__header">Are you sure</h6>
      <div class="modal__actions">
        <button type="button" @click="close" class="cancel">
          Cancel
        </button>
        <div class="form__submission-indicator" v-if="loading" />
        <button type="button" class="confirm" @click="confirm" v-else>Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  export default {
    name: 'LogoutModal',
    props: {
      open: {
        type: Boolean,
        default: false,
      }
    },
    emits: ['close', 'confirm'],
    setup(props, { emit }) {
      const store = useStore();
      return {
        loading: computed(() => store.getters.loading),
        close: () => {
          emit('close');
        },
        confirm: () => {
          emit('confirm');
        },
      }
    },
  }
</script>

<style scoped>
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1500;
    background: grey;
    opacity: 0.9;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: all;
  }

 .modal__body {
   background: #071609;
   text-align: center;
   border-radius: 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   min-width: 500px;
   height: 200px;
 }

 .modal__header {
   font-size: 2rem;
   font-weight: bold;
   margin-bottom: 1rem;
   color: #fff;
 }

 .modal__actions {
   display: flex;
   justify-content: center;
   align-items: center;
 }

.cancel {
   margin-right: 2rem;
   width: 50%;
   border-radius: 20px;
   padding-top: 0.8rem;
   padding-bottom: 0.8rem;
   padding-left: 2rem;
   padding-right: 2rem;
   outline: none;
   border: none;
   cursor: pointer;
}

.confirm {
   background: #c51742;
   color: #fff;
   width: 50%;
   border-radius: 20px;
   padding-top: 0.8rem;
   padding-bottom: 0.8rem;
   padding-left: 2rem;
   padding-right: 2rem;
   outline: none;
   border: none;
   cursor: pointer;
}
</style>
