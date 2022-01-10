import { put, takeEvery } from "redux-saga/effects";
import { usersActions } from "../actions";
import { IAction } from "../../interfaces";

export function* loginWorker(action: IAction<{}>) {
  try {
    yield put(usersActions.login.Success(action.payload));
  } catch (error: any) {
    yield put(usersActions.login.Error(error.message));
  }
}

export function* logupWorker(action: IAction<{}>) {
  try {
    yield put(usersActions.logup.Success(action.payload));
  } catch (error: any) {
    yield put(usersActions.logup.Error(error.message));
  }
}

export function* usersWatcher() {
  yield takeEvery(usersActions.login.Request.type, loginWorker);
  yield takeEvery(usersActions.logup.Request.type, logupWorker);
}
