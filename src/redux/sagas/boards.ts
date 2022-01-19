import { put, takeEvery, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { boardsActions } from "../actions";
import { IAction } from "../../interfaces";
import { customApi } from "../../helpers/axios";

export function* fetchBoardsWorker() {
  try {
    const data: AxiosResponse = yield call(customApi.get, "/boards");
    yield put(boardsActions.fetchBoards.Success(data.data.data.boards));
  } catch (error: any) {
    yield put(boardsActions.fetchBoards.Error(error.message));
  }
}

interface ICredentialsCreateBoard {
  title: string;
  bgColor: string;
}

export function* createBoardWorker(action: IAction<ICredentialsCreateBoard>) {
  try {
    const data: AxiosResponse = yield call(
      customApi.post,
      "/boards",
      action.payload
    );

    yield put(boardsActions.createBoard.Success(data.data.data.board));
  } catch (error: any) {
    yield put(boardsActions.createBoard.Error(error.message));
  }
}

export function* boardsWatcher() {
  yield takeEvery(boardsActions.fetchBoards.Request.type, fetchBoardsWorker);
  yield takeEvery(boardsActions.createBoard.Request.type, createBoardWorker);
}
