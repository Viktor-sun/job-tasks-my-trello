import { put, takeEvery, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { boardActions } from "../actions";
import { IAction, ICard } from "../../interfaces";
import { customApi } from "../../helpers/axios";

export function* fetchBoardWorker(action: IAction<string>) {
  try {
    const boardId = action.payload;

    const dataBoard: AxiosResponse = yield call(
      customApi.get,
      `/boards/${boardId}`
    );

    const dataColumns: AxiosResponse = yield call(
      customApi.get,
      `/columns/${boardId}`
    );

    const dataCards: AxiosResponse = yield call(
      customApi.get,
      `/cards/${boardId}`
    );

    const { _id, title, bgColor } = dataBoard.data.data.board;
    const columns = dataColumns.data.data.columns;
    const cards = dataCards.data.data.cards;

    const payload = {
      _id,
      title,
      bgColor,
      columns,
      cards,
      labels: [],
    };

    yield put(boardActions.fetchBoard.Success(payload));
  } catch (error: any) {
    yield put(boardActions.fetchBoard.Error(error.message));
  }
}

export function* createColumnWorker(
  action: IAction<{ boardId: string; title: string }>
) {
  try {
    const { boardId, title } = action.payload;
    const data: AxiosResponse = yield call(
      customApi.post,
      `columns/${boardId}`,
      { title }
    );

    yield put(boardActions.createColumn.Success(data.data.data.column));
  } catch (error: any) {
    yield put(boardActions.createColumn.Error(error.message));
  }
}

export function* addCardWorker(action: IAction<ICard>) {
  try {
    const { boardId, owner: columnId } = action.payload;

    const data: AxiosResponse = yield call(
      customApi.post,
      `cards/${boardId}/${columnId}`,
      action.payload
    );
    yield put(boardActions.addCard.Success(data.data.data.card));
  } catch (error: any) {
    yield put(boardActions.addCard.Error(error.message));
  }
}

export function* deleteColumnWorker(action: IAction<string>) {
  try {
    const columnId = action.payload;
    yield call(customApi.delete, `columns/${columnId}`);

    yield put(boardActions.deleteColumn.Success({ columnId }));
  } catch (error: any) {
    yield put(boardActions.deleteColumn.Error(error.message));
  }
}

export function* deleteCardWorker(action: IAction<string>) {
  try {
    const cardId = action.payload;
    yield call(customApi.delete, `cards/${cardId}`);
    yield put(boardActions.deleteCard.Success({ cardId }));
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

export function* fetchLabelsWorker(action: IAction<string>) {
  try {
    const boardId = action.payload;
    const data: AxiosResponse = yield call(customApi.get, `/labels/${boardId}`);

    yield put(boardActions.fetchLabels.Success(data.data.data.labels));
  } catch (error: any) {
    yield put(boardActions.fetchLabels.Error(error.message));
  }
}

export function* addLabelWorker(
  action: IAction<{ boardId: string; label: string }>
) {
  try {
    const { boardId, label } = action.payload;
    const data: AxiosResponse = yield call(
      customApi.post,
      `labels/${boardId}`,
      { label }
    );

    yield put(boardActions.addLabel.Success(data.data.data.label));
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
  yield takeEvery(boardActions.fetchBoard.Request.type, fetchBoardWorker);
  yield takeEvery(boardActions.createColumn.Request.type, createColumnWorker);
  yield takeEvery(boardActions.addCard.Request.type, addCardWorker);
  yield takeEvery(boardActions.deleteColumn.Request.type, deleteColumnWorker);
  yield takeEvery(boardActions.deleteCard.Request.type, deleteCardWorker);
  yield takeEvery(boardActions.editCard.Request.type, editCardWorker);
  yield takeEvery(boardActions.fetchLabels.Request.type, fetchLabelsWorker);
  yield takeEvery(boardActions.addLabel.Request.type, addLabelWorker);
  yield takeEvery(
    boardActions.changeCardOwner.Request.type,
    changeCardOwnerWorker
  );
}
