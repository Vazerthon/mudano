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

  it('Stages a new entry correctly', () => {
    const payload = { date: new Date(2020, 1, 1), unit: 'x', value: 'y' };

    const { stagedEntry } = reducer(
      { stagedEntry: {} },
      actions.stageNewEntry(payload),
    );

    expect(stagedEntry).toEqual({ ...payload, warnings: [] });
  });

  it('Submits a new entry correctly', () => {
    const entry = { date: new Date(1, 1, 1), unit: 'x', value: 'y' };

    const state = { stagedEntry: {}, users: [{ userId: 'abc', entries: [] }] };

    const result = reducer(state, actions.submitEntry('abc', entry));

    expect(result.stagedEntry).toEqual({});
    expect(result.users[0].entries[0]).toEqual(entry);
  });

  it('Overwrittes an entry if date and unit match', () => {
    const entryA = { date: new Date(1, 1, 1), unit: 'x', value: 'y' };
    const entryB = { date: new Date(1, 1, 1), unit: 'x', value: 'z' };

    const state = { stagedEntry: {}, users: [{ userId: 'abc', entries: [] }] };

    const resultA = reducer(state, actions.submitEntry('abc', entryA));
    const resultB = reducer(resultA, actions.submitEntry('abc', entryB));

    expect(resultB.users[0].entries.length).toBe(1);
  });

  it('Warns if staged entry is in the past', () => {
    const entry = { date: new Date(2017, 0, 1) };

    const state = { stagedEntry: {}, users: [{ userId: 'abc', entries: [] }] };

    const { stagedEntry } = reducer(state, actions.stageNewEntry(entry));

    expect(stagedEntry.warnings).toEqual([
      { id: 'past', msg: 'This entry is in the past' },
    ]);
  });
});
