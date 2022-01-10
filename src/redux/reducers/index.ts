import { combineReducers } from "redux";
import boardReducer from "./board";
import usersReducer from "./users";

export const rootReducer = combineReducers({
  board: boardReducer,
  user: usersReducer,
});
