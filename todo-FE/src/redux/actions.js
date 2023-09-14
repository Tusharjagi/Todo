import actionConstants from "../redux/actionsConstants";

export const addTodo = (payload) => ({
  type: actionConstants.ADD_TODO_SUCCESS,
  payload,
});
