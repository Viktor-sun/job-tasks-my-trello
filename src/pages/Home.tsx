import { useState, useCallback } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import FormCreateBoard from "../components/FormCreateBoard";
import Title from "../components/shared/Title";
import Button from "../components/shared/Button";
import AppBar from "../components/shared/AppBar";
import Boards from "../components/Boards";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

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

        <Boards />

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
