import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { boardActions } from "../../redux/actions";

interface IProps {
  onCloseForm: () => void;
  columnId: string;
}

const FormAddCard = ({ onCloseForm, columnId }: IProps) => {
  const dispatch = useDispatch();
  const [cardName, setCardName] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCardName(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      boardActions.addCard.Request({
        id: shortid.generate(),
        title: cardName,
        owner: columnId,
      })
    );
    onCloseForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" onChange={handleChange} value={cardName} />
      </label>
      <button type="submit">add card</button>
      <button type="button" onClick={onCloseForm}>
        close
      </button>
    </form>
  );
};

export default FormAddCard;
