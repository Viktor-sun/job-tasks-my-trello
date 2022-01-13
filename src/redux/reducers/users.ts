import { usersActions } from "../actions";
import { IAction } from "../../interfaces";

interface IUsersState {
  // id:string
  name: string;
  password: string;
}

const initialState: IUsersState = {
  // id:
  name: "",
  password: "",
};

const usersReducer = (state = initialState, action: IAction<{}>) => {
  switch (action.type) {
    case usersActions.logup.Success.type:
      return action.payload;

    case usersActions.login.Success.type:
      return action.payload;

    default:
      return state;
  }
};

export default usersReducer;
