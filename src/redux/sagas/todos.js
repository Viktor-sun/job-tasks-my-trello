import { put, takeEvery, call, all } from "redux-saga/effects";
import { todosActions } from "../actions";

const fetchT = () =>
  fetch("http://localhost:8050/api/todos").then((d) => d.json());

export function* fetchTodosWorker() {
  try {
    const data = yield call(fetchT);
    yield put(todosActions.fetchTodos.Success(data));
  } catch (error) {
    yield put(todosActions.fetchTodos.Error(error.message));
  }
}

export function* todosWatcher() {
  yield takeEvery(todosActions.fetchTodos.Request.type, fetchTodosWorker);
}

export function* rootSagas() {
  yield all([todosWatcher()]);
}
