import { takeEvery, put, call } from 'redux-saga/effects';
import { constants, actions } from '../actions/app';
import csvData from '../utils/csv-data';

export const parseCsvData = data =>
  data.split('\n').map(line => {
    const [userId, name, date, unit, value] = line.split(',');
    const parsedDate = new Date(date);
    return {
      userId,
      name,
      parsedDate,
      unit,
      value,
    };
  });

export function* loadDataSaga() {
  const data = yield csvData;
  const parsed = yield call(parseCsvData, data);
  yield put(actions.dataLoaded(parsed));
}

function* loadData() {
  yield takeEvery(constants.loadData, loadDataSaga);
}

const appEffects = [loadData];

export default appEffects;
