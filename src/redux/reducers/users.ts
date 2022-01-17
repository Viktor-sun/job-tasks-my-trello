import { usersActions } from "../actions";
import { IAction, IUsersState } from "../../interfaces";

const initialState: IUsersState = {
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
      return { isAuthenticated: false };
    case usersActions.login.Error.type:
      return { isAuthenticated: false };
    case usersActions.logout.Error.type:
      return { isAuthenticated: false };
    case usersActions.currentUser.Error.type:
      return { isAuthenticated: false };

    default:
      return state;
  }
};

export default usersReducer;
