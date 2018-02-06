/* eslint-env jest */

import reducer from './app';
import { actions } from '../actions/app';

describe('app reducer', () => {
  it('handles data load correctly', () => {
    const mockData = [
      {
        userId: 1,
        name: 'Matthew Webb',
        parsedDate: new Date('Thu 2016-12-29'),
        unit: 'PM',
        value: 'P',
      },
    ];

    const result = reducer({}, actions.dataLoaded(mockData));

    expect(result.entries).toEqual(mockData);
  });

  it('extracts users from entry data', () => {
    const mockData = [
      {
        userId: 1,
        name: 'Matthew Webb',
        parsedDate: new Date('Thu 2016-12-29'),
        unit: 'PM',
        value: 'P',
      },
      {
        userId: 1,
        name: 'Matthew Webb',
        parsedDate: new Date('Thu 2016-12-28'),
        unit: 'PM',
        value: 'P',
      },
      {
        userId: 2,
        name: 'Marilyn Bell',
        parsedDate: new Date('Thu 2016-12-27'),
        unit: 'PM',
        value: 'P',
      },
      {
        userId: 3,
        name: 'Jon Erikson',
        parsedDate: new Date('Thu 2016-12-26'),
        unit: 'PM',
        value: 'P',
      },
      {
        userId: 3,
        name: 'Jon Erikson',
        parsedDate: new Date('Thu 2016-12-25'),
        unit: 'PM',
        value: 'P',
      },
    ];

    const result = reducer({}, actions.dataLoaded(mockData));

    const expected = [
      {
        userId: 1,
        name: 'Matthew Webb',
      },

      {
        userId: 2,
        name: 'Marilyn Bell',
      },
      {
        userId: 3,
        name: 'Jon Erikson',
      },
    ];

    expect(result.users).toEqual(expected);
  });
});
