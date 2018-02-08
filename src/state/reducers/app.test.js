/* eslint-env jest */

import reducer from './app';
import { actions } from '../actions/app';

describe('app reducer', () => {
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

    const result = reducer({ users: [] }, actions.dataLoaded(mockData));

    const expected = [
      {
        userId: 1,
        name: 'Matthew Webb',
        entries: [
          {
            date: new Date('Thu 2016-12-29'),
            unit: 'PM',
            value: 'P',
          },
          {
            date: new Date('Thu 2016-12-28'),
            unit: 'PM',
            value: 'P',
          },
        ],
      },

      {
        userId: 2,
        name: 'Marilyn Bell',
        entries: [
          {
            date: new Date('Thu 2016-12-27'),
            unit: 'PM',
            value: 'P',
          },
        ],
      },
      {
        userId: 3,
        name: 'Jon Erikson',
        entries: [
          {
            date: new Date('Thu 2016-12-26'),
            unit: 'PM',
            value: 'P',
          },
          {
            date: new Date('Thu 2016-12-25'),
            unit: 'PM',
            value: 'P',
          },
        ],
      },
    ];

    expect(result.users).toEqual(expected);
  });

  it('logs a user in correctly', () => {
    const result = reducer({ users: [] }, actions.login('test', 2));

    const expected = {
      name: 'test',
      userId: 2,
    };

    expect(result.user).toEqual(expected);
  });

  it('Adds a user record on log in', () => {
    const result = reducer({ users: [] }, actions.login('test', 2));

    const expected = [
      {
        name: 'test',
        userId: 2,
        entries: [],
      },
    ];

    expect(result.users).toEqual(expected);
  });
});
