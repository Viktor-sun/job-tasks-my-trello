import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Modal from "../components/Modal";
import FormCreateBoard from "../components/FormCreateBoard";
import Title from "../components/shared/Title";
import Button from "../components/shared/Button";
import AppBar from "../components/shared/AppBar";

import { boardsActions } from "../redux/actions";
import { boardsSelectors } from "../redux/selectors";

const Home = () => {
  const dispatch = useDispatch();
  const boards = useSelector(boardsSelectors.getBoards);
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   dispatch(boardsActions.fetchBoards.Request());
  // }, [dispatch]);

  const handleClick = useCallback(
    () => setShowModal((prevShowModal) => !prevShowModal),
    []
  );

  return (
    <>
      <AppBar />
      <Wrapper>
        <Title text="hello" />
        <Button name="create new board" type="button" onClick={handleClick} />
        <button
          type="button"
          onClick={() => dispatch(boardsActions.fetchBoards.Request())}
        >
          getBoards
        </button>

        <ul>
          {boards.map((board) => (
            <li key={board._id}>{board?.title}</li>
          ))}
        </ul>

        {showModal && (
          <Modal onCloseModal={handleClick}>
            <FormCreateBoard />
          </Modal>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: auto;
  max-width: 500px;
  text-align: center;
`;

export default Home;
