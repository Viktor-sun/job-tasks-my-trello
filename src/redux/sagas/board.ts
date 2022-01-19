import { put, takeEvery, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { boardActions } from "../actions";
import { IAction } from "../../interfaces";
import { customApi } from "../../helpers/axios";

export function* setBoardWorker(
  action: IAction<{ _id: string; title: string; bgColor: string }>
) {
  try {
    const boardId = action.payload._id;

    const dataColumns: AxiosResponse = yield call(
      customApi.get,
      `/columns/${boardId}`
    );

    const columns = dataColumns.data.data.columns;

    const dataLabels: AxiosResponse = yield call(
      customApi.get,
      `/labels/${boardId}`
    );

    const labels = dataLabels.data.data.labels;

    const dataCards: AxiosResponse = yield call(
      customApi.get,
      `/cards/${boardId}`
    );

    const cards = dataCards.data.data.cards;

    const payload = {
      _id: action.payload._id,
      title: action.payload.title,
      bgColor: action.payload.bgColor,
      columns,
      cards,
      labels,
    };

    yield put(boardActions.setBoard.Success(payload));
  } catch (error: any) {
    yield put(boardActions.setBoard.Error(error.message));
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

export function* addLabelWorker(action: IAction<{}>) {
  try {
    yield put(boardActions.addLabel.Success(action.payload));
  } catch (error: any) {
    yield put(boardActions.addLabel.Error(error.message));
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
  yield takeEvery(boardActions.setBoard.Request.type, setBoardWorker);
  yield takeEvery(boardActions.createColumn.Request.type, createColumnWorker);
  yield takeEvery(boardActions.addCard.Request.type, addCardWorker);
  yield takeEvery(boardActions.deleteColumn.Request.type, deleteColumnWorker);
  yield takeEvery(boardActions.deleteCard.Request.type, deleteCardWorker);
  yield takeEvery(boardActions.editCard.Request.type, editCardWorker);
  yield takeEvery(boardActions.addLabel.Request.type, addLabelWorker);
  yield takeEvery(
    boardActions.changeCardOwner.Request.type,
    changeCardOwnerWorker
  );
}
