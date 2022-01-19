import { boardsActions } from "../actions";
import { IAction, IBoards } from "../../interfaces";

interface IReducerExtends {
  _id: string;
  title: string;
  bgColor: string;
  columns: [];
  labels: [];
}

const initialState: IBoards[] = [];

const boardsReducer = <A extends IReducerExtends>(
  state = initialState,
  action: IAction<A>
) => {
  switch (action.type) {
    case boardsActions.fetchBoards.Success.type:
      return action.payload;

    case boardsActions.createBoard.Success.type:
      const newState = [...state];
      newState.push(action.payload);
      return newState;

    default:
      return state;
  }
};

export default boardsReducer;
