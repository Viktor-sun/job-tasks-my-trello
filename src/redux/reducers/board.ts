import { boardActions } from "../actions";
import { IBoardState, IAction } from "../../interfaces";

interface IReducerExtends {
  columnId: string;
  cardId: string;
  id: string;
  title: string;
  editedCard: {};
}

const initialState: IBoardState = {
  id: "",
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
    case boardActions.setBoard.Success.type:
      return action.payload;

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

    case boardActions.deleteColumn.Success.type:
      return {
        ...state,
        columns: state.columns.filter(
          (column) => column.id !== action.payload.columnId
        ),
      };

    case boardActions.deleteCard.Success.type:
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload.cardId),
      };

    case boardActions.editCard.Success.type:
      const idx = state.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      const newCards = [...state.cards];

      const editedCard = {
        ...newCards[idx],
        ...action.payload.editedCard,
      };

      newCards.splice(idx, 1, editedCard);

      return {
        ...state,
        cards: newCards,
      };

    case boardActions.addLabel.Success.type:
      return {
        ...state,
        labels: [...state.labels, action.payload],
      };

    case boardActions.changeCardOwner.Success.type:
      const index = state.cards.findIndex(
        (card) => card.id === action.payload.cardId
      );
      const newCardsArr = [...state.cards];
      newCardsArr[index].owner = action.payload.columnId;

      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    default:
      return state;
  }
};

export default boardReducer;
