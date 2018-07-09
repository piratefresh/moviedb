import { call, put } from "redux-saga/effects";
import {
  FETCH_AUTH_REQUEST,
  FETCH_AUTH_SUCCESS,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGOUT_REQUEST,
  FETCH_LOGOUT_SUCCESS,
  FETCH_FAV_MOVIES_REQUEST,
  FETCH_FAV_MOVIES_SUCCESS
} from "../types/index";
import { auth, db } from "../firebase/firebase";

function handleError(error) {
  console.warn(error);
  return null;
}

export const fetchAuthRequest = () => ({
  type: FETCH_AUTH_REQUEST
});
export const fetchFavMovieRequest = id => ({
  type: FETCH_FAV_MOVIES_REQUEST,
  id
});
export const fetchLogoutRequest = () => ({
  type: FETCH_LOGOUT_REQUEST
});
export const fetchLoginRequest = email => ({
  type: FETCH_LOGIN_REQUEST,
  email
});

// GET Auth
export function* fetchAuth(action) {
  try {
    const users = yield call(auth.onAuthStateChanged);
    console.log(users);
    yield put({ type: FETCH_AUTH_SUCCESS, data: users });
  } catch (e) {
    handleError(e);
  }
}

// GET Login
export function* fetchLogin(action) {
  const { email } = action;
  try {
    yield put({ type: FETCH_LOGIN_SUCCESS, data: email });
  } catch (e) {
    handleError(e);
  }
}

// GET Login
export function* fetchLogout(action) {
  try {
    yield put({ type: FETCH_LOGOUT_SUCCESS });
  } catch (e) {
    handleError(e);
  }
}
