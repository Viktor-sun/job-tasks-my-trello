import { boardActions, usersActions, boardsActions } from "../actions";
import { IAction } from "../../interfaces";

const errorReducer = (state = null, action: IAction<string>) => {
  switch (action.type) {
    case boardActions.changeTitle.Error.type:
      return action.payload;
    case boardActions.createColumn.Error.type:
      return action.payload;
    case boardActions.addCard.Error.type:
      return action.payload;
    case boardActions.deleteColumn.Error.type:
      return action.payload;
    case boardActions.editCard.Error.type:
      return action.payload;
    case boardActions.addLabel.Error.type:
      return action.payload;
    case boardActions.changeCardOwner.Error.type:
      return action.payload;

    case usersActions.logup.Error.type:
      return action.payload;
    case usersActions.login.Error.type:
      return action.payload;
    case usersActions.logout.Error.type:
      return action.payload;
    case usersActions.currentUser.Error.type:
      return action.payload;

    case boardsActions.fetchBoards.Error.type:
      return action.payload;

    default:
      return state;
  }
};

export default errorReducer;
