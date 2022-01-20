import { ICard } from "./cardTypes";
import { IColumn } from "./columnTypes";
import { ILabels } from "./labelsTytpes";
export interface IBoard {
  _id: string;
  title: string;
  bgColor: string;
  columns: IColumn[];
  cards: ICard[];
  labels: ILabels[];
}
