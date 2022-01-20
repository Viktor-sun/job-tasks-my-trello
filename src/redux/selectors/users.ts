import { IApp } from "../../interfaces";

const getIsAuthenticated = (state: IApp) => state.user.isAuthenticated;
const getUser = (state: IApp) => state.user;

// eslint-disable-next-line
export default { getIsAuthenticated, getUser };
