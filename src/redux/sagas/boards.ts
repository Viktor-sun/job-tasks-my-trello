import { put, takeEvery, call } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { boardsActions } from "../actions";

const api = () => axios.get("http://localhost:8050/api/board");

export function* fetchBoardsWorker() {
  try {
    const data: AxiosResponse = yield call(api);
    yield put(boardsActions.fetchBoards.Success(data.data.data.boards));
  } catch (error: any) {
    yield put(boardsActions.fetchBoards.Error(error.message));
  }
}

export function* boardsWatcher() {
  yield takeEvery(boardsActions.fetchBoards.Request.type, fetchBoardsWorker);
}
