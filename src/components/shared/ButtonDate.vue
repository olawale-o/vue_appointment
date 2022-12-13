<template>
  <button
    type="button"
    class="day prev-date"
    disabled
    v-if="prevDate || oldDate"
  >
    {{date}}
  </button>
  <button
    type="button"
    className="day next-date"
    disabled
    v-else-if="nextDate"
  >
    {{date}}
  </button>
  <button
    type="button"
    class="day"
    :class="[date === DATE.getDate() && currentMonth === DATE.getMonth() ? 'today' : 'new-date']"
    @click="$emit('setDate', new Date(fullDate.getFullYear(), fullDate.getMonth(), date))"
    v-else
  >
    {{date}}
  </button>
</template>

<script>
export default {
  name: 'ButtonDate',
  props: {
    date: {
      type: Number,
    },
    fullDate: {
      type: Object,
    },
    prevDate: {
      type: Boolean,
    },
    oldDate: {
      type: Boolean,
    },
    nextDate: {
      type: Boolean,
    },
  },
  setup() {
    const DATE = new Date();
    const currentMonth = DATE.getMonth();
    return {
      DATE,
      currentMonth,
    }
  }
}
</script>

<style>

</style>

