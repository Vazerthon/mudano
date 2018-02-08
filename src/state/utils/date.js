import { isFriday, addDays } from 'date-fns';

const getNextWeekDay = day =>
  isFriday(day) ? addDays(day, 3) : addDays(day, 1);

const getWeekDaysFrom = (start, count) => {
  const days = [{ date: start }];
  while (days.length < count) {
    const last = days[days.length - 1];
    days.push({ date: getNextWeekDay(last.date) });
  }
  return days;
};

export default getWeekDaysFrom;
