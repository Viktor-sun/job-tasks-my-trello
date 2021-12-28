import { useState } from "react";
import Modal from "../components/Modal";
import FormCreateBoard from "../components/FormCreateBoard";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((prevShowModal) => !prevShowModal);

  const handleClick = () => toggleModal();

  return (
    <div>
      <h1>hello</h1>
      <button onClick={handleClick}>create new board</button>
      {showModal && (
        <Modal onCloseModal={toggleModal}>
          <FormCreateBoard />
        </Modal>
      )}
    </div>
  );
};

export default Home;
