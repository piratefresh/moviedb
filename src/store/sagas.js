import { takeLatest, all, takeEvery } from "redux-saga/effects";

import * as TYPES from "../types/index";
import {
  fetchMovies,
  fetchMovie,
  fetchGenres,
  fetchMovieSearch,
  fetchMoviesHeader,
  fetchMoviesCategorie,
  fetchMoviesPopular,
  fetchMoviesTopRated
} from "../actions/movieActions";

function* rootSaga() {
  yield all([
    takeLatest(TYPES.FETCH_GENRES_REQUEST, fetchGenres),
    takeLatest(TYPES.FETCH_MOVIES_REQUEST, fetchMovies),
    takeLatest(TYPES.FETCH_MOVIES_HEADER_REQUEST, fetchMoviesHeader),
    takeLatest(TYPES.FETCH_MOVIE_REQUEST, fetchMovie),
    takeLatest(TYPES.FETCH_MOVIES_CATEGORIE_REQUEST, fetchMoviesCategorie),
    takeLatest(TYPES.FETCH_MOVIES_POPULAR_REQUEST, fetchMoviesPopular),
    takeLatest(TYPES.FETCH_MOVIES_TOPRATED_REQUEST, fetchMoviesTopRated),
    takeEvery(TYPES.FETCH_MOVIE_SEARCH_REQUEST, fetchMovieSearch)
  ]);
}

export default rootSaga;
