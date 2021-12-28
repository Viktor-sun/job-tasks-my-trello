import { useState } from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../routes";

const FormCreateBoard = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
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
