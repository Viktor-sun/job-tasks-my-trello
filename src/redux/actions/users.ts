import { createAsyncActions } from "../../utils/redux-tools";

const login = createAsyncActions("users/login");
const logup = createAsyncActions("users/logup");
const logout = createAsyncActions("users/logout");
const currentUser = createAsyncActions("users/current");

// eslint-disable-next-line
export default { login, logup, logout, currentUser };
