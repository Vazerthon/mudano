/* eslint-env jest */
import getWeekDaysFrom from './date';

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
});
