import { IBoardState } from "./boardState";
import { TBoards } from "./boardsState";
import { IUsersState } from "./userState";

export interface IAppState {
  boards: TBoards;
  board: IBoardState;
  user: IUsersState;
}
