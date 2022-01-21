import { useState, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Modal from "../components/Modal";
import FormEditCard from "../components/FormEditCard";
import Layout from "../components/Layout";
import Title from "../components/shared/Title";
import Button from "../components/shared/Button";

import { cardsSelectors, boardSelectors } from "../redux/selectors";
import { boardActions, cardsActions } from "../redux/actions";
import { navRoutes } from "../routes";

const Card = () => {
  const dispatch = useDispatch();
  const { boardId, cardId } = useParams();
  const navigate = useNavigate();

  const columns = useSelector(boardSelectors.getColumns);
  const card = useSelector(cardsSelectors.getCard);
  const labels = useSelector(boardSelectors.getLabels);

  const [showForm, setShowForm] = useState(false);
  const [showMoveToColumn, setShowMoveToColumn] = useState(false);

  useEffect(() => {
    dispatch(cardsActions.fetchCard.Request(cardId));
    dispatch(boardActions.fetchLabels.Request(boardId));
    dispatch(boardActions.fetchColumns.Request(boardId));
  }, [cardId, boardId, dispatch]);

  const toggleShowForm = useCallback(() => {
    setShowForm((prevShow) => !prevShow);
  }, []);

  const handleBack = () => navigate(`${navRoutes.home}/${boardId}`);

  const handleDeleteCard = () => {
    dispatch(cardsActions.deleteCard.Request(cardId));
    navigate(-1);
  };

  const handleShowMoveToColumn = () => setShowMoveToColumn((prev) => !prev);

  const handleMove = useCallback(
    (columnId: string) => () => {
      dispatch(cardsActions.changeCardOwner.Request({ cardId, columnId }));
      handleShowMoveToColumn();
    },
    [cardId, dispatch]
  );

  const currentColumn = columns.find(
    (column) => column._id === card.owner
  )?.title;

  return (
    <Layout>
      <Container>
        <ButtonContainer>
          <Button type="button" name="back" onClick={handleBack} />
          <Button type="button" name="move" onClick={handleShowMoveToColumn} />
          <Button type="button" name="delete card" onClick={handleDeleteCard} />
        </ButtonContainer>

        {showMoveToColumn && (
          <Columns>
            {columns.map((column) => (
              <Column key={column._id} onClick={handleMove(column._id)}>
                to: {column.title}
              </Column>
            ))}
          </Columns>
        )}
        <CurrentColumn>in column {currentColumn}</CurrentColumn>
        <Title text={card.title} />
        <Label bgColor={card.label} />

        <DetailsList>
          <Item>Summary: {card.summary}</Item>
          <Item>Description: {card.description}</Item>
          <Item>Priority: {card.priority}</Item>
          <Item>Reporter: {card.reporter}</Item>
          <Item>Status: {card.status}</Item>
          <Item>Date: {card.date.toLocaleString()}</Item>
        </DetailsList>

        {showForm && (
          <Modal onCloseModal={toggleShowForm}>
            <FormEditCard
              onCloseForm={toggleShowForm}
              card={card}
              labels={labels}
            />
          </Modal>
        )}

        <Button type="button" name="Edit card" onClick={toggleShowForm} />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  position: relative;
  margin: auto;
  max-width: 600px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Columns = styled.ul`
  position: absolute;
  top: 35px;
  right: 178px;
  list-style: none;
  padding: 10px;
  margin: 0;
  font-size: 27px;
  border-radius: 7px;
  background-color: #fff;
  cursor: pointer;
`;

const Column = styled.li`
  padding: 5px;
  border-radius: 7px;
  transition: background-color 250ms, color 250ms;
  &:hover {
    background-color: ${(props) => props.theme.colors.accentColor};
    color: #ffffff;
  }
`;

const CurrentColumn = styled.p`
  font-size: 20px;
`;

type TLabelProps = { bgColor?: string };

const Label = styled.span<TLabelProps>`
  display: inline-block;
  width: 100%;
  height: 44px;
  border-radius: 7px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
`;

const DetailsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 30px;
  text-align: center;
`;

const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default Card;
