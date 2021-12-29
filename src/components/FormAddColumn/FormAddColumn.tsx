import { useState } from "react";
import { useDispatch } from "react-redux";
import { boardActions } from "../../redux/actions";

interface IProps {
  onCloseForm: () => void;
}

const FormAddList = ({ onCloseForm }: IProps) => {
  const dispatch = useDispatch();
  const [inputValue, setInputvalue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputvalue(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(boardActions.createColumn.Request(inputValue));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" onChange={handleChange} value={inputValue} />
      </label>
      <button type="submit">add list</button>
      <button type="button" onClick={onCloseForm}>
        close
      </button>
    </form>
  );
};

export default FormAddList;
