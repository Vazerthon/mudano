import * as R from 'ramda';
import { constants } from '../actions/app';
import { getWeekDaysFrom } from '../utils/date';

// TODO - ideally load this as a side effect
const publicHolidays = [
  { date: new Date(2018, 3, 30), label: 'Good Friday' },
  { date: new Date(2018, 4, 2), label: 'Easter Monday' },
  { date: new Date(2018, 5, 7), label: 'Early May bank holiday' },
  { date: new Date(2018, 5, 28), label: 'Spring bank holiday' },
  { date: new Date(2018, 8, 27), label: 'Summer bank holiday' },
  { date: new Date(2018, 12, 25), label: 'Christmas Day' },
  { date: new Date(2018, 12, 26), label: 'Boxing Day' },
  { date: new Date(2019, 1, 1), label: 'New Year’s Day' },
  { date: new Date(2019, 4, 19), label: 'Good Friday' },
  { date: new Date(2019, 4, 22), label: 'Easter Monday' },
  { date: new Date(2019, 5, 6), label: 'Early May bank holiday' },
  { date: new Date(2019, 5, 27), label: 'Spring bank holiday' },
  { date: new Date(2019, 8, 26), label: 'Summer bank holiday' },
  { date: new Date(2019, 12, 25), label: 'Christmas Day' },
  { date: new Date(2019, 12, 26), label: 'Boxing Day' },
];

const defaultTimeline = getWeekDaysFrom(new Date(), 100);

const defaultAppState = {
  entries: [],
  users: [],
  publicHolidays,
  timeline: defaultTimeline,
};

const extractUsersFromEntries = R.pipe(R.uniqBy(x => x.userId), entries =>
  entries.map(u => ({ userId: u.userId, name: u.name })),
);

const appReducer = (state = defaultAppState, action) => {
  switch (action.type) {
    case constants.dataLoaded:
      return {
        ...state,
        entries: action.payload.entries,
        users: extractUsersFromEntries(action.payload.entries),
      };
    default:
      return state;
  }
};

export default appReducer;
