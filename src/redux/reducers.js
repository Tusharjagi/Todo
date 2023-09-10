import actionConstants from "./actionsConstants";

const initialState = {
  todo: [],
};

function reducers(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionConstants.ADD_TODO_REQUEST:
      return {
        ...state,
        todo: [...state.todo, payload],
      };
    case actionConstants.ADD_TODO_SUCCESS:
      return {
        ...state,
        todo: [...state.todo],
      };
    case actionConstants.ADD_TODO_FAILED:
      return {
        ...state,
        todo: [],
      };
    default:
      return state;
  }
}

export default reducers;
