import { createAsyncActions } from "../../utils/redux-tools";

const fetchTodos = createAsyncActions("todos/fetchTodos");

// eslint-disable-next-line
export default { fetchTodos };
