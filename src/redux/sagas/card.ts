import { put, takeEvery, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { cardsActions } from "../actions";
import { IAction } from "../../interfaces";
import { customApi } from "../../helpers/axios";

export function* fetchCardWorker(action: IAction<string>) {
  try {
    const cardId = action.payload;
    const data: AxiosResponse = yield call(
      customApi.get,
      `/cards/${cardId}/one`
    );

    yield put(cardsActions.fetchCard.Success(data.data.data.card));
  } catch (error: any) {
    yield put(cardsActions.fetchCard.Error(error.message));
  }
}

export function* deleteCardWorker(action: IAction<string>) {
  try {
    const cardId = action.payload;
    yield call(customApi.delete, `cards/${cardId}`);
    yield put(cardsActions.deleteCard.Success({ cardId }));
  } catch (error: any) {
    yield put(cardsActions.deleteCard.Error(error.message));
  }
}

export function* editCardWorker(
  action: IAction<{ cardId: string; editedCard: {} }>
) {
  try {
    const cardId = action.payload.cardId;
    const data: AxiosResponse = yield call(
      customApi.post,
      `cards/${cardId}/edit`,
      action.payload.editedCard
    );
    yield put(cardsActions.editCard.Success(data.data.data.card));
  } catch (error: any) {
    yield put(cardsActions.editCard.Error(error.message));
  }
}

export function* changeCardOwnerWorker(
  action: IAction<{ cardId: string; columnId: string }>
) {
  try {
    const { cardId, columnId } = action.payload;
    const data: AxiosResponse = yield call(
      customApi.post,
      `cards/${cardId}/edit`,
      { owner: columnId }
    );

    yield put(cardsActions.changeCardOwner.Success(data.data.data.card));
  } catch (error: any) {
    yield put(cardsActions.changeCardOwner.Error(error.message));
  }
}

export function* cardsWatcher() {
  yield takeEvery(cardsActions.fetchCard.Request.type, fetchCardWorker);
  yield takeEvery(cardsActions.deleteCard.Request.type, deleteCardWorker);
  yield takeEvery(cardsActions.editCard.Request.type, editCardWorker);
  yield takeEvery(
    cardsActions.changeCardOwner.Request.type,
    changeCardOwnerWorker
  );
}
