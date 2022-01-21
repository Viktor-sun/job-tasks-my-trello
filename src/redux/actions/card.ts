import { createAsyncActions } from "../../utils/redux-tools";

const fetchCard = createAsyncActions("card/fetchCard");
const addCard = createAsyncActions("card/addCard");
const deleteCard = createAsyncActions("card/deleteCard");
const fetchLabels = createAsyncActions("card/fetchLabels");
const addLabel = createAsyncActions("card/addLabel");
const changeCardOwner = createAsyncActions("card/changeCardOwner");
const editCard = createAsyncActions("card/editCard");

// eslint-disable-next-line
export default {
  fetchCard,
  addCard,
  deleteCard,
  fetchLabels,
  addLabel,
  changeCardOwner,
  editCard,
};
