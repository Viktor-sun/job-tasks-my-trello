import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormAddCard from "../FormAddCard";
import Cards from "../Cards";
import Modal from "../Modal";
import { boardSelectors } from "../../redux/selectors";
import { boardActions } from "../../redux/actions";
import { Button } from "../../assets/styles/styledComponents";
import styled from "styled-components";

interface IProps {
  id: string;
  title: string;
}

const Column = ({ id, title }: IProps) => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const cards = useSelector(boardSelectors.getCards).filter(
    (card) => card.owner === id
  );

  const handleToggleShowForm = useCallback(() => {
    setShowForm((prevShow) => !prevShow);
  }, []);

  const handleDeleteColumn = () => {
    dispatch(boardActions.deleteColumn.Request({ columnId: id }));
  };

  return (
    <Wrapper>
      <ButtonDelete type="button" onClick={handleDeleteColumn}>
        X
      </ButtonDelete>
      <Title>{title}</Title>
      <Button
        fontSize="15px"
        padding="10px 15px"
        type="button"
        onClick={handleToggleShowForm}
      >
        add card
      </Button>

      {showForm && (
        <Modal onCloseModal={handleToggleShowForm}>
          <FormAddCard onCloseForm={handleToggleShowForm} columnId={id} />
        </Modal>
      )}
      <Cards cards={cards} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: 10px;
  width: 170px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 28px;
`;

const ButtonDelete = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  color red;
  border-radius: 50%;
  cursor:pointer
`;

export default Column;
