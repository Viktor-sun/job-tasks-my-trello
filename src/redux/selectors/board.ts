import { IBoardState } from "../../interfaces";

interface IBoard {
  board: IBoardState;
}

const getBoardsDetails = (state: IBoard) => state.board.boardsDetails;
const getColumns = (state: IBoard) => state.board.columns;
const getCards = (state: IBoard) => state.board.cards;
const getColors = (state: IBoard) => state.board.colors;

// eslint-disable-next-line
export default { getBoardsDetails, getColumns, getCards, getColors };
