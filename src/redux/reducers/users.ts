import { usersActions } from "../actions";
import { IAction, IUser } from "../../interfaces";

const initialState: IUser = {
  isAuthenticated: false,
  name: "",
  accessToken: "",
  refreshToken: "",
};

const usersReducer = (state = initialState, action: IAction<{}>) => {
  switch (action.type) {
    case usersActions.logup.Success.type:
      return { ...action.payload, isAuthenticated: false };

    case usersActions.login.Success.type:
      return { ...action.payload, isAuthenticated: true };

    case usersActions.logout.Success.type:
      return initialState;

    case usersActions.currentUser.Success.type:
      return { ...action.payload, isAuthenticated: true };

    case usersActions.logup.Error.type:
      return initialState;
    case usersActions.login.Error.type:
      return initialState;
    case usersActions.logout.Error.type:
      return initialState;
    case usersActions.currentUser.Error.type:
      return initialState;

    default:
      return state;
  }
};

export default usersReducer;
