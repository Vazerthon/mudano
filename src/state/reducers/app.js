import { constants } from '../actions/app';

const defaultAppState = {
  entries: [],
};

const appReducer = (state = defaultAppState, action) => {
  switch (action.type) {
    case constants.dataLoaded:
      return { ...state, entries: action.payload.entries };
    default:
      return state;
  }
};

export default appReducer;
