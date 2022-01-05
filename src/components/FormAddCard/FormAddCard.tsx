import { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { boardActions } from "../../redux/actions";
import { Button, Input, Label } from "../../assets/styles/styledComponents";

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
      <Label>
        <Input
          type="text"
          onChange={handleChange}
          value={cardName}
          placeholder="Enter title"
        />
      </Label>
      <Button fontSize="15px" padding="10px 15px" type="submit">
        add card
      </Button>
      <Button
        fontSize="15px"
        padding="10px 15px"
        type="button"
        onClick={onCloseForm}
      >
        close
      </Button>
    </form>
  );
};

export default FormAddCard;
