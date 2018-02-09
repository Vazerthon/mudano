import { takeEvery, put, call, select } from 'redux-saga/effects';
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

export function* saveEntriesSaga() {
  const userId = yield select(state => state.app.user.userId);
  const { entries } = yield select(state =>
    state.app.users.find(u => u.userId === userId),
  );
  console.log('EXAMPLE SERVER UPDATE REQUEST');
  console.log(entries);
}

function* loadData() {
  yield takeEvery(constants.loadData, loadDataSaga);
}

function* saveEntries() {
  yield takeEvery(constants.saveEntries, saveEntriesSaga);
}

const appEffects = [loadData, saveEntries];

export default appEffects;
