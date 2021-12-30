import { useState } from "react";
import Modal from "../components/Modal";
import FormCreateBoard from "../components/FormCreateBoard";

import { useDispatch } from "react-redux";
import { todosActions } from "../redux/actions";

const Home = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div>
      <h1>hello</h1>
      <button onClick={handleClick}>create new board</button>
      <button
        type="button"
        onClick={() => dispatch(todosActions.fetchTodos.Request())}
      >
        fetch todo
      </button>
      {showModal && (
        <Modal onCloseModal={handleClick}>
          <FormCreateBoard />
        </Modal>
      )}
    </div>
  );
};

export default Home;
