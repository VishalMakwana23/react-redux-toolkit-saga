import { put, takeEvery } from "redux-saga/effects";

import { increment } from "./counter.reducer";
import { DECREMENT, INCREMENT, RESET } from "./counter.type";

function* incrementCount(req) {
  try {
    yield put(increment(req.data));
  } catch (error) {
    console.log("Getting Error in Increment count : ", error);
  }
}

function* decrementCount(req) {
  try {
    yield put(increment(req.data));
  } catch (error) {
    console.log("Getting Error in Increment count : ", error);
  }
}

function* resetCount(req) {
  try {
    yield put(increment(req.data));
  } catch (error) {
    console.log("Getting Error in Increment count : ", error);
  }
}

function* authSaga() {
  yield takeEvery(INCREMENT, incrementCount);
  yield takeEvery(DECREMENT, decrementCount);
  yield takeEvery(RESET, resetCount);
}

export default authSaga;
