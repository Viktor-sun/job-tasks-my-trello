import { put, takeEvery } from "redux-saga/effects";
import { boardActions } from "../actions";
import { IAction } from "../../interfaces";

export function* changeTitleWorker(action: IAction<string>) {
  try {
    // const data = yield call();
    yield put(boardActions.changeTitle.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.changeTitle.Error(error.message));
  }
}

export function* createListWorker(action: IAction<string>) {
  try {
    yield put(boardActions.createColumn.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.createColumn.Error(error.message));
  }
}

export function* boardWatcher() {
  yield takeEvery(boardActions.changeTitle.Request.type, changeTitleWorker);
  yield takeEvery(boardActions.createColumn.Request.type, createListWorker);
}
