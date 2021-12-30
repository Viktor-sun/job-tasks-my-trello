import { useState } from "react";
import { useSelector } from "react-redux";
import FormAddCard from "../FormAddCard";
import Cards from "../Cards";
import { boardSelectors } from "../../redux/selectors";

interface IProps {
  id: string;
  title: string;
}

const Column = ({ id, title }: IProps) => {
  const [showForm, setShowForm] = useState(false);
  const cards = useSelector(boardSelectors.getCards).filter(
    (card) => card.owner === id
  );

  const toggleShowForm = () => {
    setShowForm((prevShow) => !prevShow);
  };

  const handleClik = () => toggleShowForm();

  return (
    <div>
      <h2>{title}</h2>
      <button type="button" onClick={handleClik}>
        add card
      </button>
      {showForm && <FormAddCard onCloseForm={toggleShowForm} columnId={id} />}
      <Cards cards={cards} />
    </div>
  );
};

export default Column;
