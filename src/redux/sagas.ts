import { all } from "redux-saga/effects";

import hooks from "./hooks/sagas";

export default function* rootSaga() {
  yield all([hooks(),]);
}
