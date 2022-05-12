import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import movie, { movieSaga } from "./movie";
import loading from "./loading";
import common, { commonSaga } from "./common";
import movieDetail, { movieDetailSaga } from "./movieDetail";
// import common, { commonSaga } from "./common";

const rootReducer = combineReducers({
  loading,
  movie,
  movieDetail,
  common
});

export function* rootSaga() {
  yield all([
    movieSaga(),
    movieDetailSaga(),
    commonSaga()
  ]);
}

export default rootReducer;