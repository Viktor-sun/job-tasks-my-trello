import { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import FormAddColumn from "../components/FormAddColumn";
import Columns from "../components/Columns";
import Layout from "../components/Layout";
import Button from "../components/shared/Button";

import { boardActions } from "../redux/actions";
import { boardSelectors } from "../redux/selectors";

const Board = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const [showForm, setShowForm] = useState(false);
  const { title, bgColor } = useSelector(boardSelectors.getBoardsDetails);

  const toggleShowForm = useCallback(() => {
    setShowForm((prevShow) => !prevShow);
  }, []);

  useEffect(() => {
    dispatch(boardActions.fetchBoard.Request(boardId));
  }, [dispatch, boardId]);

  return (
    <Layout bgColor={bgColor} withTitle titleText={`board ${title}`}>
      <Container>
        {showForm && <FormAddColumn onCloseForm={toggleShowForm} />}
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
