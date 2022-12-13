const DATE = new Date();
const date = DATE.getDate();
export default function showDays(
  lastDayIndexOfPreviousMonth,
  lastDateOfCurrentMonth,
  lastDateOfPreviousMonth,
  currentMonthDetails,
  nextDays = 14,
) {
  const days = [];
  // const blurDates = [];

  // for (let j = 0; j < appointmentDates.length; j += 1) {
  //   blurDates.push(new Date(appointmentDates[j].book_for).toLocaleDateString());
  // }

  for (let x = lastDayIndexOfPreviousMonth; x >= 0; x -= 1) {
    days.push({
      date: lastDateOfPreviousMonth - x, prevDate: true, nextDate: false, oldDate: false, key: `prevDate-${x}`, appointmentDate: false,
    });
  }

  for (let i = 1; i <= lastDateOfCurrentMonth; i += 1) {
    // const currentDate = new Date(
    //   currentMonthDetails.getFullYear(),
    //   currentMonthDetails.getMonth(),
    //   i,
    // ).toLocaleDateString();
    // else if (blurDates.includes(currentDate)) {
    //   days.push({
    //     date: i, prevDate: false, nextDate: false, oldDate: true, key: `date-${i}`, appointmentDate: true,
    //   });
    // }
    if (i < date) {
      days.push({
        date: i, prevDate: false, nextDate: false, oldDate: true, key: `old-date-${i}`, appointmentDate: false,
      });
    } else {
      days.push({
        date: i, prevDate: false, nextDate: false, oldDate: false, key: `date-${i}`, appointmentDate: false,
      });
    }
  }

  for (let j = 1; j <= nextDays; j += 1) {
    days.push({
      date: j, prevDate: false, nextDate: true, oldDate: false, key: `nextDate-${j}`, appointmentDate: false,
    });
  }
  return days;
}
