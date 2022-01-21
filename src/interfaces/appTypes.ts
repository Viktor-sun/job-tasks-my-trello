import { IBoard } from "./boardTypes";
import { IBoards } from "./boardsTypes";
import { IUser } from "./userTypes";
import { ICard } from "./cardTypes";

export interface IApp {
  boards: IBoards[];
  board: IBoard;
  user: IUser;
  card: ICard;
}
