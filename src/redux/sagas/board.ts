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

export function* createColumnWorker(action: IAction<string>) {
  try {
    yield put(boardActions.createColumn.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.createColumn.Error(error.message));
  }
}

export function* addCardWorker(action: IAction<string>) {
  try {
    yield put(boardActions.addCard.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.addCard.Error(error.message));
  }
}

export function* deleteColumnWorker(action: IAction<string>) {
  try {
    yield put(boardActions.deleteColumn.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.deleteColumn.Error(error.message));
  }
}

export function* deleteCardWorker(action: IAction<string>) {
  try {
    yield put(boardActions.deleteCard.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.deleteCard.Error(error.message));
  }
}

export function* changeCardTitleWorker(action: IAction<string>) {
  try {
    yield put(boardActions.changeCardTitle.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.changeCardTitle.Error(error.message));
  }
}

export function* boardWatcher() {
  yield takeEvery(boardActions.changeTitle.Request.type, changeTitleWorker);
  yield takeEvery(boardActions.createColumn.Request.type, createColumnWorker);
  yield takeEvery(boardActions.addCard.Request.type, addCardWorker);
  yield takeEvery(boardActions.deleteColumn.Request.type, deleteColumnWorker);
  yield takeEvery(boardActions.deleteCard.Request.type, deleteCardWorker);
  yield takeEvery(
    boardActions.changeCardTitle.Request.type,
    changeCardTitleWorker
  );
}
