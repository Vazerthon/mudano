import { isFriday, addDays, isEqual, format } from 'date-fns';

const getNextWeekDay = day =>
  isFriday(day) ? addDays(day, 3) : addDays(day, 1);

export const getWeekDaysFrom = (start, count) => {
  const days = [{ date: start }];
  while (days.length < count) {
    const last = days[days.length - 1];
    days.push({ date: getNextWeekDay(last.date) });
  }

  return days;
};

const isPublicHoliday = (date, publicHolidays) =>
  publicHolidays.some(ph => isEqual(ph.date, date));

export const assignPublicHolidayStatus = (dates, publicHolidays) =>
  dates.map(d => ({
    ...d,
    isPublicHoliday: isPublicHoliday(d.date, publicHolidays),
  }));

export const prettyDate = date => format(date, 'Do MMM YY');
