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
});
