import { all } from "redux-saga/effects";
import { todosWatcher } from "./todos";
import { boardWatcher } from "./board";

export function* rootSagas() {
  yield all([todosWatcher(), boardWatcher()]);
}
