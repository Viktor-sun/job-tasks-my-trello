import { createAsyncActions } from "../../utils/redux-tools";

const fetchBoards = createAsyncActions("boards/fetchBoards");
const createBoard = createAsyncActions("board/createBoard");

// eslint-disable-next-line
export default { fetchBoards, createBoard };
