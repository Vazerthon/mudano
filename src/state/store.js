import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import appReducer from './reducers/app';
import appSagas from './effects/app';

const reducer = combineReducers({
  app: appReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

[...appSagas].forEach(saga => sagaMiddleware.run(saga));

export default store;
