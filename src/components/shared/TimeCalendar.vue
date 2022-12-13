<template>
  <div class="calendar">
    <div class="month">
      <button type="button" class="btn-direction prev" @click="$emit('updateDate', 'prev')">
        <i class="bx bx-chevron-left icon" />
      </button>
      <div class="date">
        <h1 class="month__name">{{MONTHS[fullDate.getMonth()]}}</h1>
        <p class="month__full">{{fullDate.toDateString()}}</p>
      </div>
      <button type="button" class="btn-direction next" @click="$emit('updateDate', 'next')">
        <i class="bx bxs-chevron-right icon" />
      </button>
    </div>
    <div class="weekdays">
      <div class="weekday">Sun</div>
      <div class="weekday">Mon</div>
      <div class="weekday">Tue</div>
      <div class="weekday">Wed</div>
      <div class="weekday">Thu</div>
      <div class="weekday">Fri</div>
      <div class="weekday">Sat</div>
    </div>
    <div class="days">
      <ButtonDate
        :key="day.key"
        :date="day.date"
        :prevDate="day.prevDate"
        :nextDate="day.nextDate"
        :oldDate="day.oldDate"
        :fullDate="fullDate"
        @set-date="(date) => $emit('setDate', date)"
        v-for="day in days"
      />
    </div>
  </div>
</template>

<script>
import ButtonDate from './ButtonDate.vue';
import showDays from '@/scripts/showDays.js';
import MONTHS from '@/scripts/months.js';
export default {
  name: "TimeCalendar",
  components: {
    ButtonDate,
  },
  props: {
    fullDate: {
      type: Object,
    },
  },
  setup(props) {
    const currentMonthDetails = new Date(props.fullDate.getFullYear(), props.fullDate.getMonth() + 1, 0);
    const previousMonthDetails = new Date(props.fullDate.getFullYear(), props.fullDate.getMonth(), 0);
    const lastDateOfCurrentMonth = currentMonthDetails.getDate();
    const lastDateOfPreviousMonth = previousMonthDetails.getDate();
    const lastDayIndexOfPreviousMonth = previousMonthDetails.getDay();
    const days = showDays(
        lastDayIndexOfPreviousMonth,
        lastDateOfCurrentMonth,
        lastDateOfPreviousMonth,
        currentMonthDetails,
    );
    return {
      days,
      MONTHS,
      // updateDate: (newDate) => ctx.emit('update', newDate),
    }
  }
}
</script>

<style>

</style>