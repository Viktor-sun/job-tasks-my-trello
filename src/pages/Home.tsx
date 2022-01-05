import { useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import FormCreateBoard from "../components/FormCreateBoard";
import { Title, Button } from "../assets/styles/styledComponents";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <Wrapper>
      <Title>hello</Title>
      <Button onClick={handleClick}>create new board</Button>

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
