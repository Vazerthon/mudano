import * as R from 'ramda';
import { constants } from '../actions/app';

const defaultAppState = {
  entries: [],
  users: [],
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
