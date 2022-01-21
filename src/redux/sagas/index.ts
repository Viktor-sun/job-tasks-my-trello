import { all } from "redux-saga/effects";
import { boardWatcher } from "./board";
import { boardsWatcher } from "./boards";
import { usersWatcher } from "./users";
import { cardsWatcher } from "./card";

export function* rootSagas() {
  yield all([boardWatcher(), boardsWatcher(), usersWatcher(), cardsWatcher()]);
}
