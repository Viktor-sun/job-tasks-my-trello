import Card from "../Card";

interface IProps {
  cards: { id: string; title: string }[];
}

const Cards = ({ cards }: IProps) => {
  return (
    <ul>
      {cards.map((card) => (
        <Card key={card.id} title={card.title} />
      ))}
    </ul>
  );
};

export default Cards;
