import { cardsActions } from "../actions";
import { IAction, ICard } from "../../interfaces";

interface IStateCard {}

const initialState: ICard = {
  _id: "",
  title: "",
  boardId: "string",
  owner: "string",
  summary: "string",
  date: new Date(),
  status: "string",
  reporter: "string",
  description: "string",
  label: "string",
  priority: "string",
};

const boardsReducer = <A extends IStateCard>(
  state = initialState,
  action: IAction<A>
) => {
  switch (action.type) {
    case cardsActions.fetchCard.Success.type:
      return action.payload;

    case cardsActions.editCard.Success.type:
      return action.payload;

    case cardsActions.changeCardOwner.Success.type:
      return action.payload;

    default:
      return state;
  }
};

export default boardsReducer;
