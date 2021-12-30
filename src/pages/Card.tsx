import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { boardSelectors } from "../redux/selectors";

const Card = () => {
  const params = useParams();
  const navigate = useNavigate();
  const cards = useSelector(boardSelectors.getCards);
  const card = cards.find((card) => card.id === params.cardId);

  return (
    <div>
      <h1>card page</h1>
      <p>{card?.title}</p>
      <button type="button" onClick={() => navigate(-1)}>
        back
      </button>
    </div>
  );
};

export default Card;
