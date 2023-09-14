import { takeLatest, put } from "redux-saga/effects";
import { addTodo } from "./actions";
import actionConstants from "./actionsConstants";

function* addTodoSaga() {
  try {
    // const data = "dsfdsf";
    // yield put(() => addTodo(data));
  } catch {
    yield put(actionConstants.GET_TODO_FAILED);
  }
}

function* watchSaga() {
  yield takeLatest(actionConstants.ADD_TODO_REQUEST, addTodoSaga);
}

export default watchSaga;
