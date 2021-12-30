import { boardActions } from "../actions";
import { IBoardState, IAction } from "../../interfaces";

type TAction = [] | {};

const initialState: IBoardState = {
  boardsDetails: { title: "", bgColor: "" },

  columns: [
    {
      id: "RoBsqI1kp",
      title: "col 1",
    },
    {
      id: "4w5H6K8vy",
      title: "col 2",
    },
  ],
  cards: [
    {
      id: "iUcM5A59g",
      title: "card 1",
      owner: "RoBsqI1kp",
    },
    {
      id: "IaaiDFNBc",
      title: "card 2",
      owner: "4w5H6K8vy",
    },
  ],
  error: null,
};

const boardReducer = (state = initialState, action: IAction<TAction>) => {
  switch (action.type) {
    case boardActions.changeTitle.Success.type:
      return { ...state, boardsDetails: action.payload };

    case boardActions.createColumn.Success.type:
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };

    case boardActions.addCard.Success.type:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    case boardActions.changeTitle.Error.type:
      return { ...state, error: action.payload };
    case boardActions.createColumn.Error.type:
      return { ...state, error: action.payload };
    case boardActions.addCard.Error.type:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default boardReducer;
