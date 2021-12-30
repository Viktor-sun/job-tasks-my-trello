import { createAsyncActions } from "../../utils/redux-tools";

const changeTitle = createAsyncActions("board/changeTitle");
const createColumn = createAsyncActions("board/createColumn");
const addCard = createAsyncActions("board/addCard");

// eslint-disable-next-line
export default { changeTitle, createColumn, addCard };
