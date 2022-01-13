import { combineReducers } from "redux";
import boardReducer from "./board";
import boardsReducer from "./boards";
import usersReducer from "./users";
import errorReducer from "./error";

export const rootReducer = combineReducers({
  boards: boardsReducer,
  board: boardReducer,
  user: usersReducer,
  error: errorReducer,
});
