import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import combineReducers from "../reducers/index";
import mySaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(mySaga);
