import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { boardSelectors } from "../redux/selectors";
import { boardActions } from "../redux/actions";
import {
  Title,
  Button,
  PageWrapper,
  Input,
} from "../assets/styles/styledComponents";

const Card = () => {
  const dispatch = useDispatch();
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [showInputChangeTitle, setShowInputChangeTitle] = useState(false);

  const cards = useSelector(boardSelectors.getCards);
  const { bgColor } = useSelector(boardSelectors.getBoardsDetails);

  const card = cards.find((card) => card.id === cardId);

  const [titleInputValue, setTitleInputValue] = useState(card?.title);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitleInputValue(e.currentTarget.value);

  const handleShowChangeTitle = () => setShowInputChangeTitle((prev) => !prev);
  const handleChangeTitle = () => {
    if (titleInputValue === "" || titleInputValue === card?.title) {
      handleShowChangeTitle();
      return;
    }

    dispatch(
      boardActions.changeCardTitle.Request({
        id: cardId,
        title: titleInputValue,
      })
    );
    handleShowChangeTitle();
  };

  const handleBack = () => navigate(-1);

  const handleDeleteCard = () => {
    dispatch(boardActions.deleteCard.Request({ cardId }));
    navigate(-1);
  };

  const columns = useSelector(boardSelectors.getColumns);
  const handleMove = (columnId: string) => () => {
    dispatch(boardActions.changeCardOwner.Request({ cardId, columnId }));
  };

  const getCurrentColumn = () =>
    columns.find((column) => column.id === card?.owner)?.title;

  return (
    <PageWrapper bgColor={bgColor}>
      <Container>
        <ButtonContainer>
          <Button type="button" onClick={handleBack}>
            back
          </Button>

          <ul>
            {columns.map((column) => (
              <li key={column.id} onClick={handleMove(column.id)}>
                move to: {column.title}
              </li>
            ))}
          </ul>
          <Button type="button" onClick={handleDeleteCard}>
            delete card
          </Button>
        </ButtonContainer>

        <p>in column {getCurrentColumn()}</p>
        <Title onClick={handleShowChangeTitle}>{card?.title}</Title>
        {showInputChangeTitle && (
          <Input
            type="text"
            autoFocus
            value={titleInputValue}
            onChange={handleChange}
            onBlur={handleChangeTitle}
          />
        )}

        <DetailsList>
          <Item>Summary: {card?.summary}</Item>
          <Item>Description: {card?.description}</Item>
          <Item>Priority: {card?.priority}</Item>
          <Item>Reporter: {card?.reporter}</Item>
          <Item>Status: {card?.status}</Item>
          <Item>Label: {card?.label}</Item>
          <Item>Date: {card?.date.toLocaleString()}</Item>
        </DetailsList>
      </Container>
    </PageWrapper>
  );
};

const Container = styled.div`
  margin: auto;
  max-width: 600px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
