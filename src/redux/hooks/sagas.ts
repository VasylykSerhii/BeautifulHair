import { all, takeEvery, put } from "redux-saga/effects";

import { setStateCreation } from "./actions-creators";
import {
  SET_LOADING_HOOKS_ACTION,
  SET_SCROLLDIR_ACTION,
  SET_OFFSETTOP_ACTION,
} from "./actions-types";

export function* SET_LOADING_HOOKS(action) {
  yield put(setStateCreation({ loading: action.bool }));
}

export function* SET_SCROLLDIR(action) {
  yield put(setStateCreation({ scrollDir: action.dir }));
}

export function* SET_OFFSETTOP(action) {
  yield put(setStateCreation({ offsetTop: action.number }));
}

export default function* rootSaga() {
  yield all([takeEvery(SET_LOADING_HOOKS_ACTION, SET_LOADING_HOOKS)]);
  yield all([takeEvery(SET_SCROLLDIR_ACTION, SET_SCROLLDIR)]);
  yield all([takeEvery(SET_OFFSETTOP_ACTION, SET_OFFSETTOP)]);
}
