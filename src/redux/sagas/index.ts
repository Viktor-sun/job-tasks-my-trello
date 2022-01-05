import { all } from "redux-saga/effects";
import { boardWatcher } from "./board";

export function* rootSagas() {
  yield all([boardWatcher()]);
}
