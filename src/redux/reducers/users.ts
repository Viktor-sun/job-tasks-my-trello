import { usersActions } from "../actions";
import { IAction } from "../../interfaces";

interface IUsersState {
  isAuthenticated: boolean;
  name: string;
  password: string;
}

const initialState: IUsersState = {
  isAuthenticated: false,
  name: "",
  password: "",
};

const usersReducer = (state = initialState, action: IAction<{}>) => {
  switch (action.type) {
    case usersActions.logup.Success.type:
      return { ...action.payload, isAuthenticated: false };

    case usersActions.login.Success.type:
      return { ...action.payload, isAuthenticated: true };

    case usersActions.logup.Error.type:
      return { ...action.payload, isAuthenticated: false };
    case usersActions.login.Error.type:
      return { ...action.payload, isAuthenticated: false };

    default:
      return state;
  }
};

export default usersReducer;
