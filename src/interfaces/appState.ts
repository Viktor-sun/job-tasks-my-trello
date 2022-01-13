import { IBoardState } from "./boardState";
import { TBoards } from "./boardsState";

export interface IAppState {
  boards: TBoards;
  board: IBoardState;
}
