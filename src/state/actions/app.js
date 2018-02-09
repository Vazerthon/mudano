export const constants = {
  loadData: '[APP] LOAD APP DATA',
  dataLoaded: '[APP] DATA LOADED',
  login: '[APP] LOG A USER IN',
  stageNewEntry: '[APP] STAGE A NEW ENTRY',
  submitEntry: '[APP] SUBMIT ENTRY',
  saveEntries: '[APP] SAVE ALL ENTRIES',
  toggleEntryMaker: '[APP] TOGGLE ENTRY MAKER VISIBILITY',
};

export const actions = {
  loadData: () => ({
    type: constants.loadData,
  }),
  dataLoaded: entries => ({
    type: constants.dataLoaded,
    payload: { entries },
  }),
  login: (name, userId) => ({
    type: constants.login,
    payload: { name, userId },
  }),
  stageNewEntry: entry => ({
    type: constants.stageNewEntry,
    payload: { entry },
  }),
  submitEntry: (userId, entry) => ({
    type: constants.submitEntry,
    payload: { userId, entry },
  }),
  saveEntries: () => ({ type: constants.saveEntries }),
  toggleEntryMaker: () => ({ type: constants.toggleEntryMaker }),
};
