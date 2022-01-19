import { createAsyncActions } from "../../utils/redux-tools";

const setBoard = createAsyncActions("board/setBoard");
const createColumn = createAsyncActions("board/createColumn");
const addCard = createAsyncActions("board/addCard");
const deleteColumn = createAsyncActions("board/deleteColumn");
const deleteCard = createAsyncActions("board/deleteCard");
const addLabel = createAsyncActions("card/addLabel");
const changeCardOwner = createAsyncActions("card/changeCardOwner");
const editCard = createAsyncActions("card/editCard");

// eslint-disable-next-line
export default {
  setBoard,
  createColumn,
  addCard,
  deleteColumn,
  deleteCard,
  addLabel,
  changeCardOwner,
  editCard,
};
