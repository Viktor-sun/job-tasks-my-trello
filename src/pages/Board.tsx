import { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import FormAddList from "../components/FormAddColumn";
import Columns from "../components/Columns";
import Layout from "../components/Layout";
import Button from "../components/shared/Button";

import { boardSelectors } from "../redux/selectors";

const Board = () => {
  const [showForm, setShowForm] = useState(false);
  const { title, bgColor } = useSelector(boardSelectors.getBoardsDetails);

  const toggleShowForm = useCallback(() => {
    setShowForm((prevShow) => !prevShow);
  }, []);

  return (
    <Layout bgColor={bgColor} withTitle titleText={`board ${title}`}>
      <Container>
        {showForm && <FormAddList onCloseForm={toggleShowForm} />}
        {!showForm && (
          <Button
            type="button"
            name=" add todo list"
            onClick={toggleShowForm}
          />
        )}
        <Columns />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  margin: auto;
  max-width: 1280px;
`;

export default Board;
