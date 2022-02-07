export const currentYear = new Date().getFullYear();
export const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();
export const currentDate = `${currentYear}-${currentMonth + 1}-${currentDay}`;

const regExp = (date: string, year: number, month: number, day: number) => {
  const regex1 = /^\d{4}-\d{1}-\d{2}$/;
  const regex2 = /^\d{4}-\d{2}-\d{1}$/;
  const regex3 = /^\d{4}-\d{1}-\d{1}$/;

  if (regex1.test(date)) {
    return date = `${year}-0${month + 1}-${day}`;
  } else if (regex2.test(date)) {
    return date = `${year}-${month + 1}-0${day}`;
  } else if (regex3.test(date)) {
    return date = `${year}-0${month + 1}-0${day}`;
  } else {
    return date;
  }
};

export const setDefaultDate = (num: number) => {
  const setDate = new Date(currentYear, currentMonth, currentDay + num);
  const setYear = setDate.getFullYear();
  const setMonth = setDate.getMonth();
  const setDay = setDate.getDate();
  let newDate = `${setYear}-${setMonth + 1}-${setDay}`;
  newDate = regExp(newDate, setYear, setMonth, setDay);

  return newDate;
};

export const lastDayOfNextMonth = (currentYear: number, currentMonth: number) => {
  const date = new Date(currentYear, currentMonth + 2, 0);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  let lastDayOfNextMonth = `${year}-${month + 1}-${day}`;
  lastDayOfNextMonth = regExp(lastDayOfNextMonth, year, month, day);
  
  return lastDayOfNextMonth;
};