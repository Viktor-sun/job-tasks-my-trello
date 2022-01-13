import { createAsyncActions } from "../../utils/redux-tools";

const fetchBoards = createAsyncActions("boards/fetchBoards");

// eslint-disable-next-line
export default { fetchBoards };
