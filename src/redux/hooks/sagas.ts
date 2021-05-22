import { all, takeEvery, put } from "redux-saga/effects";

import { setStateCreation } from "./actions-creators";
import {
  SET_LOADING_HOOKS_ACTION,
  SET_SCROLLDIR_ACTION,
  SET_OFFSETTOP_ACTION,
} from "./actions-types";

export function* setLoadingHooks(action) {
  yield put(setStateCreation({ loading: action.bool }));
}

export function* setScrollDir(action) {
  yield put(setStateCreation({ isScrollDown: action.bool }));
}

export function* setOffsetTop(action) {
  yield put(setStateCreation({ offsetTop: action.number }));
}

export default function* rootSaga() {
  yield all([takeEvery(SET_LOADING_HOOKS_ACTION, setLoadingHooks)]);
  yield all([takeEvery(SET_SCROLLDIR_ACTION, setScrollDir)]);
  yield all([takeEvery(SET_OFFSETTOP_ACTION, setOffsetTop)]);
}
