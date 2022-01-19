import { IAppState } from "../../interfaces";

const getBoardsDetails = (state: IAppState) => ({
  title: state.board.title,
  bgColor: state.board.bgColor,
});
const getColumns = (state: IAppState) => state.board.columns;
const getCards = (state: IAppState) => state.board.cards;
const getLabels = (state: IAppState) => state.board.labels;

// eslint-disable-next-line
export default { getBoardsDetails, getColumns, getCards, getLabels };
