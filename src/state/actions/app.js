export const constants = {
  loadData: '[APP] LOAD APP DATA',
  dataLoaded: '[APP] DATA LOADED',
};

export const actions = {
  loadData: () => ({
    type: constants.loadData,
  }),
  dataLoaded: entries => ({
    type: constants.dataLoaded,
    payload: { entries },
  }),
};
