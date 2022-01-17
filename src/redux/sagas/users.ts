import { put, takeEvery, call } from "redux-saga/effects";
import { usersActions } from "../actions";
import { IAction } from "../../interfaces";
import axios, { AxiosResponse } from "axios";

interface ICredentials {
  login: string;
  password: string;
}

export function* logupWorker(action: IAction<ICredentials>) {
  try {
    const api = () =>
      axios.post("http://localhost:8050/api/users/signup", {
        name: action.payload.login,
        password: action.payload.password,
      });

    const data: AxiosResponse = yield call(api);
    yield put(usersActions.logup.Success(data.data.data.user));
  } catch (error: any) {
    yield put(usersActions.logup.Error(error.message));
  }
}

export function* loginWorker(action: IAction<ICredentials>) {
  try {
    const api = () =>
      axios.post(
        "http://localhost:8050/api/users/login",
        {
          name: action.payload.login,
          password: action.payload.password,
        },
        { withCredentials: true }
      );

    const data: AxiosResponse = yield call(api);
    localStorage.setItem("token", data.data.data.accessToken);
    console.log(data.data.data);
    yield put(usersActions.login.Success(data.data.data));
  } catch (error: any) {
    yield put(usersActions.login.Error(error.message));
  }
}

export function* usersWatcher() {
  yield takeEvery(usersActions.logup.Request.type, logupWorker);
  yield takeEvery(usersActions.login.Request.type, loginWorker);
}
