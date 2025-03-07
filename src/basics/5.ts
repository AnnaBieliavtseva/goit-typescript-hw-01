enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}



const isWeekend = (day:DayOfWeek) => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday
      ? `${DayOfWeek[day]} is Weekend 😊`
      : `${DayOfWeek[day]} is not Weekend 😒`;
};

console.log(isWeekend(DayOfWeek.Friday));
console.log(isWeekend(DayOfWeek.Saturday));
