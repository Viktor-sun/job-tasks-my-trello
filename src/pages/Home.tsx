import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import FormCreateBoard from "../components/FormCreateBoard";
import Title from "../components/shared/Title";
import Button from "../components/shared/Button";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <Wrapper>
      <Title text="hello" />
      <Button name="create new board" type="button" onClick={handleClick} />

      {showModal && (
        <Modal onCloseModal={handleClick}>
          <FormCreateBoard />
        </Modal>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  max-width: 500px;
  text-align: center;
`;

export default Home;
