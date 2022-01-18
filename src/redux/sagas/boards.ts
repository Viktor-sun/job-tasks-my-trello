import { put, takeEvery, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { boardsActions, usersActions } from "../actions";
import { customApi } from "../../helpers/axios";

export function* fetchBoardsWorker() {
  try {
    const api = () => customApi.get("/board");
    const data: AxiosResponse = yield call(api);
    yield put(boardsActions.fetchBoards.Success(data.data.data.boards));
  } catch (error: any) {
    yield put(boardsActions.fetchBoards.Error(error.message));
    yield put(usersActions.logout.Success());
  }
}

export function* boardsWatcher() {
  yield takeEvery(boardsActions.fetchBoards.Request.type, fetchBoardsWorker);
}
