import { combineReducers } from "redux";
import boardReducer from "./board";
import todosReducer from "./todos";

export const rootReducer = combineReducers({
  todos: todosReducer,
  board: boardReducer,
});
