import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Board from "../Board";

import { boardsActions } from "../../redux/actions";
import { boardsSelectors } from "../../redux/selectors";

const Boards = () => {
  const dispatch = useDispatch();
  const boards = useSelector(boardsSelectors.getBoards);

  useEffect(() => {
    dispatch(boardsActions.fetchBoards.Request());
  }, [dispatch]);

  return (
    <BoardsList>
      {boards.map((board) => (
        <Board key={board._id} board={board} />
      ))}
    </BoardsList>
  );
};

const BoardsList = styled.ul`
  display: flex;
  list-style: none;
`;

export default Boards;
