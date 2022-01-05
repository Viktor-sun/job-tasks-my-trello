import { createAsyncActions } from "../../utils/redux-tools";

const changeTitle = createAsyncActions("board/changeTitle");
const createColumn = createAsyncActions("board/createColumn");
const addCard = createAsyncActions("board/addCard");
const deleteColumn = createAsyncActions("board/deleteColumn");
const deleteCard = createAsyncActions("board/deleteCard");
const changeCardTitle = createAsyncActions("board/changeCardTitle");

// eslint-disable-next-line
export default {
  changeTitle,
  createColumn,
  addCard,
  deleteColumn,
  deleteCard,
  changeCardTitle,
};
