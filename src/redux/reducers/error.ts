import {
  boardActions,
  usersActions,
  boardsActions,
  cardsActions,
} from "../actions";
import { IAction } from "../../interfaces";

const errorReducer = (state = null, action: IAction<string>) => {
  switch (action.type) {
    case boardsActions.createBoard.Error.type:
      return action.payload;
    case boardActions.createColumn.Error.type:
      return action.payload;
    case cardsActions.addCard.Error.type:
      return action.payload;
    case boardActions.deleteColumn.Error.type:
      return action.payload;
    case cardsActions.editCard.Error.type:
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

    case boardsActions.createBoard.Success.type:
      return null;
    case boardActions.createColumn.Success.type:
      return null;
    case cardsActions.addCard.Success.type:
      return null;
    case boardActions.deleteColumn.Success.type:
      return null;
    case cardsActions.editCard.Success.type:
      return null;
    case boardActions.addLabel.Success.type:
      return null;
    case boardActions.changeCardOwner.Success.type:
      return null;

    case usersActions.logup.Success.type:
      return null;
    case usersActions.login.Success.type:
      return null;
    case usersActions.logout.Success.type:
      return null;
    case usersActions.currentUser.Success.type:
      return null;

    case boardsActions.fetchBoards.Success.type:
      return null;

    default:
      return state;
  }
};

export default errorReducer;
