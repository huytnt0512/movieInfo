import { all } from "redux-saga/effects";
import { moviesSaga } from "./movieSaga";

export default function* rootSaga() {
  yield all([...moviesSaga]);
}
