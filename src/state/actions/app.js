export const constants = {
  loadData: '[APP] LOAD APP DATA',
  dataLoaded: '[APP] DATA LOADED',
  login: '[APP] LOG A USER IN',
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
};
