import { all, fork } from "redux-saga/effects";
import counterSaga from "./counter/saga";
import authSaga from "./auth/saga";

export default function* rootSaga() {
  yield all([fork(counterSaga), fork(authSaga)]);
}
