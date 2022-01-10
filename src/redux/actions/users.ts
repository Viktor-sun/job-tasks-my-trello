import { createAsyncActions } from "../../utils/redux-tools";

const login = createAsyncActions("users/login");
const logup = createAsyncActions("users/logup");

// eslint-disable-next-line
export default { login, logup };
