import { all } from "redux-saga/effects";
import { boardWatcher } from "./board";
import { usersWatcher } from "./users";

export function* rootSagas() {
  yield all([boardWatcher(), usersWatcher()]);
}
