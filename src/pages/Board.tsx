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

  return (
    <Wrapper bgColor={bgColor}>
      <Title>board {title}</Title>
      <button type="button" onClick={toggleShowForm}>
        add todo list
      </button>
      {showForm && <FormAddList onCloseForm={toggleShowForm} />}
      <Columns />
    </Wrapper>
  );
};

type WrapperProps = {
  bgColor: string;
};

const Wrapper = styled.div<WrapperProps>`
  height: 100vh;

  ${({ bgColor }: WrapperProps) => `background-color: ${bgColor}`}
`;

const Title = styled.div`
  font-size: 50px;
`;

export default Board;
