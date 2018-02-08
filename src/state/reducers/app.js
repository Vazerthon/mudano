import * as R from 'ramda';
import { constants } from '../actions/app';
import { getWeekDaysFrom, assignPublicHolidayStatus } from '../utils/date';

// TODO - ideally load this as a side effect
const publicHolidays = [
  { date: new Date(2018, 2, 30), label: 'Good Friday' },
  { date: new Date(2018, 3, 2), label: 'Easter Monday' },
  { date: new Date(2018, 4, 7), label: 'Early May bank holiday' },
  { date: new Date(2018, 4, 28), label: 'Spring bank holiday' },
  { date: new Date(2018, 7, 27), label: 'Summer bank holiday' },
  { date: new Date(2018, 11, 25), label: 'Christmas Day' },
  { date: new Date(2018, 11, 26), label: 'Boxing Day' },
  { date: new Date(2019, 0, 1), label: 'New Year’s Day' },
  { date: new Date(2019, 3, 19), label: 'Good Friday' },
  { date: new Date(2019, 3, 22), label: 'Easter Monday' },
  { date: new Date(2019, 4, 6), label: 'Early May bank holiday' },
  { date: new Date(2019, 4, 27), label: 'Spring bank holiday' },
  { date: new Date(2019, 7, 26), label: 'Summer bank holiday' },
  { date: new Date(2019, 11, 25), label: 'Christmas Day' },
  { date: new Date(2019, 11, 26), label: 'Boxing Day' },
];

const addPublicHolidayFlag = dates =>
  assignPublicHolidayStatus(dates, publicHolidays);

const defaultTimeline = R.pipe(
  () => getWeekDaysFrom(new Date(2018, 1, 8), 100),
  addPublicHolidayFlag,
)();

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
