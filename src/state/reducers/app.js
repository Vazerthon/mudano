import * as R from 'ramda';
import { isPast } from 'date-fns';
import { constants } from '../actions/app';
import {
  getWeekDaysFrom,
  assignPublicHolidayStatus,
  adjacentTo,
  areEqual,
  closeTo,
} from '../utils/date';

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
  () => getWeekDaysFrom(new Date(2018, 1, 9), 300),
  addPublicHolidayFlag,
)();

const defaultAppState = {
  users: [],
  user: {},
  publicHolidays,
  timeline: defaultTimeline,
  stagedEntry: { warnings: [] },
  showEntryMaker: true,
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

const existingEntryIndex = (entries, entry) =>
  entries.findIndex(e => areEqual(e.date, entry.date) && e.unit === entry.unit);

const updateAppend = (i, entries, entry) =>
  i >= 0 ? R.update(i, entry)(entries) : R.append(entry)(entries);

const updatedEntries = (entries, entry) =>
  R.pipe(existingEntryIndex, i => updateAppend(i, entries, entry))(
    entries,
    entry,
  );

const updateUserEntry = (users, index, entry) =>
  R.update(index, {
    ...users[index],
    entries: [
      ...updatedEntries(users[index].entries, {
        ...entry,
        date: new Date(entry.date),
      }),
    ],
  })(users);

const addNewEntryForUser = (users, userId, entry) =>
  R.pipe(
    () => users.findIndex(u => u.userId === userId),
    i => updateUserEntry(users, i, entry),
  )();

const addWarningsToStagedEntry = (entry, allEntries) =>
  R.pipe(
    e => ({ ...e, warnings: [] }),
    e => ({
      ...e,
      warnings: isPast(e.date)
        ? [...e.warnings, { id: 'past', msg: 'This entry is in the past' }]
        : e.warnings,
    }),
    e => ({
      ...e,
      warnings: allEntries.some(en => areEqual(en.date, entry.date))
        ? [
            ...e.warnings,
            { id: 'same', msg: 'This entry overlaps with another user' },
          ]
        : e.warnings,
    }),
    e => ({
      ...e,
      warnings: allEntries.some(
        en => !areEqual(en.date, entry.date) && adjacentTo(en.date, entry.date),
      )
        ? [
            ...e.warnings,
            { id: 'adjacent', msg: 'This entry is adjacent to another user' },
          ]
        : e.warnings,
    }),
    e => ({
      ...e,
      warnings: allEntries.some(en => closeTo(en.date, entry.date))
        ? [
            ...e.warnings,
            { id: 'close', msg: 'This entry is close to another user' },
          ]
        : e.warnings,
    }),
  )(entry);

const appReducer = (state = defaultAppState, action) => {
  switch (action.type) {
    case constants.dataLoaded:
      return {
        ...state,
        users: [
          ...state.users,
          ...extractUsersFromEntries(action.payload.entries),
        ],
      };
    case constants.login:
      return {
        ...state,
        user: { ...action.payload },
        users: [
          ...state.users,
          {
            ...action.payload,
            entries: [],
          },
        ],
      };
    case constants.stageNewEntry:
      return {
        ...state,
        stagedEntry: addWarningsToStagedEntry(
          action.payload.entry,
          state.users.map(u => u.entries).reduce((p, c) => [...p, ...c], []),
        ),
      };
    case constants.submitEntry:
      return {
        ...state,
        stagedEntry: { warnings: [] },
        users: [
          ...addNewEntryForUser(
            state.users,
            action.payload.userId,
            action.payload.entry,
          ),
        ],
      };
    case constants.toggleEntryMaker:
      return { ...state, showEntryMaker: !state.showEntryMaker };
    default:
      return state;
  }
};

export default appReducer;
