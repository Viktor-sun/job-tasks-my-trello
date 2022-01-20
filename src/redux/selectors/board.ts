import { IApp } from "../../interfaces";

const getBoardId = (state: IApp) => state.board._id;
const getBoardsDetails = (state: IApp) => ({
  title: state.board.title,
  bgColor: state.board.bgColor,
});
const getColumns = (state: IApp) => state.board.columns;
const getCards = (state: IApp) => state.board.cards;
const getLabels = (state: IApp) => state.board.labels;

// eslint-disable-next-line
export default {
  getBoardId,
  getBoardsDetails,
  getColumns,
  getCards,
  getLabels,
};
