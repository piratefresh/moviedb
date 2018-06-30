import { takeLatest } from "redux-saga/effects";

import * as TYPES from "../types/index";
import { fetchMovies } from "../actions/movieActions";

function* mySaga() {
  yield takeLatest(TYPES.FETCH_MOVIES_REQUEST, fetchMovies);
}

export default mySaga;
