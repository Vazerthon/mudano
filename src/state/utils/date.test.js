/* eslint-env jest */
import { getWeekDaysFrom, assignPublicHolidayStatus } from './date';

describe('date utils', () => {
  it('generates a collection of week days correctly', () => {
    const start = new Date(2018, 2, 8); // a Thursday
    const result = getWeekDaysFrom(start, 5);

    const expected = [
      { date: new Date(2018, 2, 8) }, // Thursday
      { date: new Date(2018, 2, 9) }, // Friday
      { date: new Date(2018, 2, 12) }, // Monday
      { date: new Date(2018, 2, 13) }, // Tuesday
      { date: new Date(2018, 2, 14) }, // Wednesday
    ];

    expect(result).toEqual(expected);
  });

  it('assigns public holiday status correctly', () => {
    const dates = [
      { date: new Date(2018, 2, 9) },
      { date: new Date(2018, 2, 12) },
      { date: new Date(2018, 2, 13) },
    ];

    const hols = [{ date: new Date(2018, 2, 12) }];

    const result = assignPublicHolidayStatus(dates, hols);

    const expected = [
      { date: new Date(2018, 2, 9), isPublicHoliday: false },
      { date: new Date(2018, 2, 12), isPublicHoliday: true },
      { date: new Date(2018, 2, 13), isPublicHoliday: false },
    ];

    expect(result).toEqual(expected);
  });
});
