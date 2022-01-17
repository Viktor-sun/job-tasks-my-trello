import { IAppState } from "../../interfaces";

const getIsAuthenticated = (state: IAppState) => state.user.isAuthenticated;
const getUser = (state: IAppState) => state.user;

// eslint-disable-next-line
export default { getIsAuthenticated, getUser };
