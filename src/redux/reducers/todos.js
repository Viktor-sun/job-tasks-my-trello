import { todosActions } from "../actions";

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case todosActions.fetchTodos.Success.type:
      return action.payload;

    default:
      return state;
  }
};

export default todosReducer;
