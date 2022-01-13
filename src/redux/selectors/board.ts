import { IAppState } from "../../interfaces";

const getBoardsDetails = (state: IAppState) => state.board.boardsDetails;
const getColumns = (state: IAppState) => state.board.columns;
const getCards = (state: IAppState) => state.board.cards;
const getColors = (state: IAppState) => state.board.colors;

// eslint-disable-next-line
export default { getBoardsDetails, getColumns, getCards, getColors };
