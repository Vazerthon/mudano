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
  () => getWeekDaysFrom(new Date(2018, 1, 8), 40),
  addPublicHolidayFlag,
)();

const defaultAppState = {
  users: [],
  publicHolidays,
  timeline: defaultTimeline,
};

const entriesForUser = (entries, id) => entries.filter(e => e.userId === id);

const withoutUserInfo = entry => ({
  date: entry.parsedDate,
  unit: entry.unit,
  value: entry.value,
});

const extractUsersFromEntries = entries =>
  R.pipe(
    R.uniqBy(x => x.userId),
    users => users.map(u => ({ userId: u.userId, name: u.name })),
    users =>
      users.map(u => ({
        ...u,
        entries: entriesForUser(entries, u.userId).map(withoutUserInfo),
      })),
  )(entries);

const appReducer = (state = defaultAppState, action) => {
  switch (action.type) {
    case constants.dataLoaded:
      return {
        ...state,
        users: extractUsersFromEntries(action.payload.entries),
      };
    default:
      return state;
  }
};

export default appReducer;
