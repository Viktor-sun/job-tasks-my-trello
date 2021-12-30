import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FormAddList from "../components/FormAddColumn";
import Columns from "../components/Columns";

import { boardSelectors } from "../redux/selectors";

const Board = () => {
  const [showForm, setShowForm] = useState(false);
  const { title, bgColor } = useSelector(boardSelectors.getBoardsDetails);
  const toggleShowForm = () => {
    setShowForm((prevShow) => !prevShow);
  };

  const Wrapper = styled.div`
    height: 100vh;
    background-color: ${bgColor};
  `;

  return (
    <Wrapper>
      <h1>board {title}</h1>
      <button type="button" onClick={toggleShowForm}>
        add todo list
      </button>
      {showForm && <FormAddList onCloseForm={toggleShowForm} />}
      <Columns />
    </Wrapper>
  );
};

export default Board;
