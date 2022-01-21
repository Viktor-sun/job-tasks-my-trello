import { combineReducers } from "redux";
import boardReducer from "./board";
import boardsReducer from "./boards";
import usersReducer from "./users";
import errorReducer from "./error";
import cardsReducer from "./card";

export const rootReducer = combineReducers({
  boards: boardsReducer,
  board: boardReducer,
  user: usersReducer,
  card: cardsReducer,
  error: errorReducer,
});
