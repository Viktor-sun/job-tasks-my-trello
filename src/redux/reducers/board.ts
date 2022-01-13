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
      id: "aUF49QD-Z",
      owner: "RoBsqI1kp",
      date: new Date("2022-01-06T09:39:08"),
      title: "card 2",
      summary: "some summary",
      description: "more description",
      priority: "Low",
      reporter: "viktor",
      status: "Forgotten",
      label: "#544128",
    },
    {
      id: "CnnNlC1ZJl",
      owner: "4w5H6K8vy",
      date: new Date("2022-01-06T10:39:08"),
      title: "card 1",
      summary: "hello boy",
      description: "some description",
      priority: "Low",
      reporter: "viktor",
      status: "Forgotten",
      label: "#a7a9c3",
    },
  ],
  labels: ["#ffffff", "#544128", "#a7a9c3"],
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
