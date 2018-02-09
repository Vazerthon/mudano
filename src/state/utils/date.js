import {
  isFriday,
  addDays,
  subDays,
  isEqual,
  format,
  isWithinRange,
} from 'date-fns';

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

export const prettyDate = date => format(date, 'D MMM YY');

export const areEqual = (d1, d2) => prettyDate(d1) === prettyDate(d2);

export const adjacentTo = (d1, d2) =>
  isWithinRange(d1, subDays(d2, 1), addDays(d2, 1));

export const closeTo = (d1, d2) =>
  isWithinRange(d1, subDays(d2, 4), subDays(d2, 2)) ||
  isWithinRange(d1, addDays(d2, 2), addDays(d2, 4));
