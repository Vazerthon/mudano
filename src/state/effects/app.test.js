/* eslint-env jest */

import { put, call } from 'redux-saga/effects';
import { loadDataSaga, parseCsvData } from './app';
import { actions } from '../actions/app';

describe('app effects', () => {
  it('load csv data correctly', () => {
    const saga = loadDataSaga();

    // import data from csv
    expect(saga.next().value);

    const mockData = `1,Matthew Webb,Thu 2016-12-29,PM,P
    1,Matthew Webb,Fri 2016-12-30,AM,P`;

    expect(saga.next(mockData).value).toEqual(call(parseCsvData, mockData));

    const parsed = [
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
        parsedDate: new Date('Fri 2016-12-30'),
        unit: 'AM',
        value: 'P',
      },
    ];

    expect(saga.next(parsed).value).toEqual(put(actions.dataLoaded(parsed)));

    expect(saga.next().done).toBeTruthy();
  });
});
