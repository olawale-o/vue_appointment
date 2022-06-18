<template>
  <router-link :to="href" class="btn btn__large" v-if="href">{{ text }}</router-link>
  <button type="button" class="btn btn__large" v-else @click="$emit('callBack')">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  emits: ['callBack'],
  props: {
    text: {
      type: String,
      required: true
    },
    href: {
      type: String,
    },
  },
  setup() { },
};
</script>
