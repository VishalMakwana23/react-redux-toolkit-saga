import { call, put, takeEvery } from "redux-saga/effects";
import { fetchLoading, getLoginDetail } from "./auth.reducer";
import { POST } from "../../services/methods";
import { USER_LOGIN } from "./auth.type";

function* fetchLogin(req) {
  try {
    yield put(fetchLoading(true));
    const res = yield call(POST, "/auth/login", req.payload);
    localStorage.setItem("accessToken", res.token);
    yield put(getLoginDetail(res));
  } catch (error) {
    console.log("getting login error :", error);
  } finally {
    yield put(fetchLoading(false));
  }
}

function* authSaga() {
  yield takeEvery(USER_LOGIN, fetchLogin);
}

export default authSaga;
