import { Link } from "react-router-dom";
import { navRoutes } from "../../routes";

interface IProps {
  title: string;
  cardId: string;
}

const Card = ({ title, cardId }: IProps) => {
  return (
    <Link to={`${navRoutes.board}/${cardId}`}>
      <li>{title}</li>
    </Link>
  );
};

export default Card;
