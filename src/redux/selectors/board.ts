import { IBoardState } from "../../interfaces";

interface IBoard {
  board: IBoardState;
}

const getTitle = (state: IBoard): string => state.board.title;
const getColumns = (state: IBoard) => state.board.columns;

// eslint-disable-next-line
export default { getTitle, getColumns };
