import { IBoardState } from "./boardState";
import { IBoards } from "./boardsState";
import { IUsersState } from "./userState";

export interface IAppState {
  boards: IBoards[];
  board: IBoardState;
  user: IUsersState;
}
