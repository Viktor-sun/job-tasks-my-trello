import { boardActions, cardsActions } from "../actions";
import { IBoard, IAction } from "../../interfaces";

interface IReducerExtends {
  columnId: string;
  cardId: string;
  id: string;
  title: string;
  editedCard: {};
}

const initialState: IBoard = {
  _id: "",
  title: "",
  bgColor: "",

  columns: [],
  cards: [],
  labels: [],
};

const boardReducer = <A extends IReducerExtends>(
  state = initialState,
  action: IAction<A>
) => {
  switch (action.type) {
    case boardActions.fetchBoard.Success.type:
      return action.payload;

    case boardActions.createColumn.Success.type:
      return {
        ...state,
        columns: [...state.columns, action.payload],
      };

    case cardsActions.addCard.Success.type:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    case boardActions.deleteColumn.Success.type:
      return {
        ...state,
        columns: state.columns.filter(
          (column) => column._id !== action.payload.columnId
        ),
      };

    case boardActions.fetchLabels.Success.type:
      return {
        ...state,
        labels: action.payload,
      };

    case boardActions.addLabel.Success.type:
      return {
        ...state,
        labels: [...state.labels, action.payload],
      };

    case boardActions.fetchColumns.Success.type:
      return {
        ...state,
        columns: action.payload,
      };

    // case boardActions.changeCardOwner.Success.type:
    //   const index = state.cards.findIndex(
    //     (card) => card._id === action.payload.cardId
    //   );
    //   const newCardsArr = [...state.cards];
    //   newCardsArr[index].owner = action.payload.columnId;

    //   return {
    //     ...state,
    //     cards: [...state.cards, action.payload],
    //   };

    default:
      return state;
  }
};

export default boardReducer;
