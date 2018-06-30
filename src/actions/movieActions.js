import axios from "axios";
import { call, put } from "redux-saga/effects";
import * as TYPES from "../types";
const apiKey = "9983ae98fd65654ca7494dd94103697e";

function handleError(error) {
  console.warn(error);
  return null;
}

const api = url => fetch(url).then(response => response.json());

export const fetchMoviesRequest = () => ({
  type: TYPES.FETCH_MOVIES_REQUEST
});

// GET MOVIES
export function* fetchMovies(action) {
  try {
    const movies = yield call(
      api,
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&=en-US&page=1&region=US`
    );
    yield put({ type: TYPES.FETCH_MOVIES_SUCCESS, data: movies.results });
  } catch (e) {
    handleError(e);
  }
}
