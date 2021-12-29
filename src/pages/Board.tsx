import { useState } from "react";
import { useSelector } from "react-redux";
import FormAddList from "../components/FormAddColumn";
import Column from "../components/Column";
import { boardSelectors } from "../redux/selectors";

const Board = () => {
  const [showForm, setShowForm] = useState(false);
  const title = useSelector(boardSelectors.getTitle);
  const columns = useSelector(boardSelectors.getColumns);
  const toggleShowForm = () => {
    setShowForm((prevShow) => !prevShow);
  };

  return (
    <div>
      <h1>board {title}</h1>
      <button type="button" onClick={toggleShowForm}>
        add todo list
      </button>
      {showForm && <FormAddList onCloseForm={toggleShowForm} />}
      {columns.map((column) => (
        <Column title={column.title} />
      ))}
    </div>
  );
};

export default Board;
