import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import FormAddList from "../components/FormAddColumn";
import Columns from "../components/Columns";
import { Title, Button, PageWrapper } from "../assets/styles/styledComponents";

import { boardSelectors } from "../redux/selectors";

const Board = () => {
  const [showForm, setShowForm] = useState(false);
  const { title, bgColor } = useSelector(boardSelectors.getBoardsDetails);

  const toggleShowForm = () => {
    setShowForm((prevShow) => !prevShow);
  };

  return (
    <PageWrapper bgColor={bgColor}>
      <Container>
        <Title>board {title}</Title>
        {showForm && <FormAddList onCloseForm={toggleShowForm} />}
        {!showForm && (
          <Button type="button" onClick={toggleShowForm}>
            add todo list
          </Button>
        )}
        <Columns />
      </Container>
    </PageWrapper>
  );
};

const Container = styled.div`
  margin: auto;
  max-width: 1280px;
`;

export default Board;
