import { IAppState } from "../../interfaces";

const getBoards = (state: IAppState) => state.boards;

// eslint-disable-next-line
export default { getBoards };
