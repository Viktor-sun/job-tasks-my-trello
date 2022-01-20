import { createAsyncActions } from "../../utils/redux-tools";

const fetchBoard = createAsyncActions("board/fetchBoard");
const createColumn = createAsyncActions("board/createColumn");
const addCard = createAsyncActions("board/addCard");
const deleteColumn = createAsyncActions("board/deleteColumn");
const deleteCard = createAsyncActions("board/deleteCard");
const fetchLabels = createAsyncActions("card/fetchLabels");
const addLabel = createAsyncActions("card/addLabel");
const changeCardOwner = createAsyncActions("card/changeCardOwner");
const editCard = createAsyncActions("card/editCard");

// eslint-disable-next-line
export default {
  fetchBoard,
  createColumn,
  addCard,
  deleteColumn,
  deleteCard,
  fetchLabels,
  addLabel,
  changeCardOwner,
  editCard,
};
