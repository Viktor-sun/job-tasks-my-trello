import { put, takeEvery } from "redux-saga/effects";
import { boardActions } from "../actions";
import { IAction } from "../../interfaces";

export function* changeTitleWorker(action: IAction<{}>) {
  try {
    // const data = yield call();
    yield put(boardActions.changeTitle.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.changeTitle.Error(error.message));
  }
}

export function* createColumnWorker(action: IAction<{}>) {
  try {
    yield put(boardActions.createColumn.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.createColumn.Error(error.message));
  }
}

export function* addCardWorker(action: IAction<{}>) {
  try {
    yield put(boardActions.addCard.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.addCard.Error(error.message));
  }
}

export function* deleteColumnWorker(action: IAction<{}>) {
  try {
    yield put(boardActions.deleteColumn.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.deleteColumn.Error(error.message));
  }
}

export function* deleteCardWorker(action: IAction<{}>) {
  try {
    yield put(boardActions.deleteCard.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.deleteCard.Error(error.message));
  }
}

export function* editCardWorker(action: IAction<{}>) {
  try {
    yield put(boardActions.editCard.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.editCard.Error(error.message));
  }
}

export function* addColorWorker(action: IAction<{}>) {
  try {
    yield put(boardActions.addColor.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.addColor.Error(error.message));
  }
}

export function* changeCardOwnerWorker(action: IAction<{}>) {
  try {
    yield put(boardActions.changeCardOwner.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.changeCardOwner.Error(error.message));
  }
}

export function* boardWatcher() {
  yield takeEvery(boardActions.changeTitle.Request.type, changeTitleWorker);
  yield takeEvery(boardActions.createColumn.Request.type, createColumnWorker);
  yield takeEvery(boardActions.addCard.Request.type, addCardWorker);
  yield takeEvery(boardActions.deleteColumn.Request.type, deleteColumnWorker);
  yield takeEvery(boardActions.deleteCard.Request.type, deleteCardWorker);
  yield takeEvery(boardActions.editCard.Request.type, editCardWorker);
  yield takeEvery(boardActions.addColor.Request.type, addColorWorker);
  yield takeEvery(
    boardActions.changeCardOwner.Request.type,
    changeCardOwnerWorker
  );
}
