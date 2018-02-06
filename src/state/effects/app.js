import { takeEvery, put, call } from 'redux-saga/effects';
import { constants, actions } from '../actions/app';
import csvData from '../utils/csv-data';

export const loadCsvData = data =>
  data.split('\n').map(line => {
    const [userId, name, date, unit, value] = line.split(',');

    return {
      userId,
      name,
      date,
      unit,
      value,
    };
  });

function* loadDataSaga() {
  const parsed = yield call(loadCsvData, csvData);
  yield put(actions.dataLoaded(parsed));
}

function* loadData() {
  yield takeEvery(constants.loadData, loadDataSaga);
}

const appEffects = [loadData];

export default appEffects;
