import styled from "styled-components";
import Card from "../Card";
import { ICard } from "../../interfaces";

interface IProps {
  cards: ICard[];
}

const Cards = ({ cards }: IProps) => {
  return (
    <List>
      {cards.map((card) => (
        <Card
          key={card._id}
          cardId={card._id}
          title={card.title}
          label={card.label}
        />
      ))}
    </List>
  );
};

const List = styled.ul`
  margin: 20px 0;
  padding: 0;
  list-style: none;
`;

export default Cards;
