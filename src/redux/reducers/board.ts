import { boardActions } from "../actions";
import { IBoardState, IAction } from "../../interfaces";

// interface IChangeTitle {
//   readonly type: string;
//   readonly payload: {
//     title: string;
//     bgColor: string;
//   };
// }

// interface ICreateColumn {
//   readonly type: string;
//   readonly payload: {
//     id: string;
//     title: string;
//   };
// }

// interface IAddCard {
//   readonly type: string;
//   readonly payload: {
//     id: string;
//     title: string;
//     owner: string;
//   };
// }

// interface IDeleteColumn {
//   readonly type: string;
//   readonly payload: { columnId: string };
// }

// interface IDeleteCard {
//   readonly type: string;
//   readonly payload: { cardId: string };
// }

// interface IChangeCardTitle {
//   readonly type: string;
//   readonly payload: {
//     id: string;
//     title: string;
//   };
// }

// type TAction =
//   | IChangeTitle
//   | ICreateColumn
//   | IAddCard
//   | IDeleteColumn
//   | IDeleteCard
//   | IChangeCardTitle;

interface IReducerExtends {
  columnId: string;
  cardId: string;
  id: string;
  title: string;
}

const initialState: IBoardState = {
  boardsDetails: { title: "", bgColor: "#aabbcc" },

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
      id: "CnnNlC1ZJl",
      owner: "4w5H6K8vy",
      title: "card 1",
      summary: "hello boy",
      description: "some description",
      priority: "Low",
      reporter: "viktor",
      status: "Forgotten",
      label: "aquamarine",
    },
  ],
  error: null,
};

const boardReducer = <A extends IReducerExtends>(
  state = initialState,
  action: IAction<A>
) => {
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

    case boardActions.changeCardTitle.Success.type:
      const idx = state.cards.findIndex(
        (card) => card.id === action.payload.id
      );
      const newCards = [...state.cards];
      newCards[idx].title = action.payload.title;
      return {
        ...state,
        cards: newCards,
      };

    case boardActions.changeTitle.Error.type:
      return { ...state, error: action.payload };
    case boardActions.createColumn.Error.type:
      return { ...state, error: action.payload };
    case boardActions.addCard.Error.type:
      return { ...state, error: action.payload };
    case boardActions.deleteColumn.Error.type:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default boardReducer;
