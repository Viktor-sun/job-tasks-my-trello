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

  const handleBack = () => navigate(-1);

  const handleDeleteCard = () => {
    dispatch(boardActions.deleteCard.Request({ cardId }));
    navigate(-1);
  };

  const handleShowChangeTitle = () => setShowInputChangeTitle((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitleInputValue(e.currentTarget.value);

  const handleChangeTitle = () => {
    dispatch(
      boardActions.changeCardTitle.Request({
        id: cardId,
        title: titleInputValue,
      })
    );
    handleShowChangeTitle();
  };

  return (
    <PageWrapper bgColor={bgColor}>
      <Container>
        <ButtonContainer>
          <Button type="button" onClick={handleBack}>
            back
          </Button>
          <Button type="button" onClick={handleDeleteCard}>
            delete card
          </Button>
        </ButtonContainer>
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

export default Card;
