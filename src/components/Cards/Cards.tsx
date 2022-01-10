import styled from "styled-components";
import Card from "../Card";

interface IProps {
  cards: {
    id: string;
    title: string;
    owner: string;
    summary: string;
    date: Date;
    status: string;
    reporter: string;
    description: string;
    label: string;
    priority: string;
  }[];
}

const Cards = ({ cards }: IProps) => {
  return (
    <List>
      {cards.map((card) => (
        <Card
          key={card.id}
          cardId={card.id}
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
