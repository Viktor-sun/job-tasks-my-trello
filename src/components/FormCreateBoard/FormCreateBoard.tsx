import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import routes from "../../routes";
import { boardActions } from "../../redux/actions";

const FormCreateBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(boardActions.changeTitle.Request(inputValue));
    navigate(routes.board);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Board title
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">submit</button>
    </form>
  );
};

export default FormCreateBoard;
