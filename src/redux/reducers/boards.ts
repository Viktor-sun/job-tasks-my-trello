import { boardsActions } from "../actions";
import { IAction, TBoards } from "../../interfaces";

const initialState: TBoards = [];

const boardsReducer = (state = initialState, action: IAction<{}>) => {
  switch (action.type) {
    case boardsActions.fetchBoards.Success.type:
      return action.payload;

    default:
      return state;
  }
};

export default boardsReducer;
