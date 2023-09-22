/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDays {
  Monday,
  Thuesday,
  Wednesday,
  Thirsday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (weekDay: WeekDays): boolean => {
  if (weekDay === WeekDays.Sunday || weekDay === WeekDays.Saturday) {
    return true;
  }
  return false;
};
