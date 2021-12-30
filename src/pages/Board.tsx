import { useState } from "react";
import { useSelector } from "react-redux";
import FormAddList from "../components/FormAddColumn";
import Columns from "../components/Columns";

import { boardSelectors } from "../redux/selectors";

const Board = () => {
  const [showForm, setShowForm] = useState(false);
  const title = useSelector(boardSelectors.getTitle);
  const toggleShowForm = () => {
    setShowForm((prevShow) => !prevShow);
  };

  return (
    <div className="board">
      <h1>board {title}</h1>
      <button type="button" onClick={toggleShowForm}>
        add todo list
      </button>
      {showForm && <FormAddList onCloseForm={toggleShowForm} />}
      <Columns />
    </div>
  );
};

export default Board;
