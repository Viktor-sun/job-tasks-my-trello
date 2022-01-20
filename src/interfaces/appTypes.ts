import { IBoard } from "./boardTypes";
import { IBoards } from "./boardsTypes";
import { IUser } from "./userTypes";

export interface IApp {
  boards: IBoards[];
  board: IBoard;
  user: IUser;
}
