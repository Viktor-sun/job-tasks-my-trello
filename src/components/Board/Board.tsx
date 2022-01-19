import styled from "styled-components";
import { useDispatch } from "react-redux";
import { IBoards } from "../../interfaces";
import { boardActions } from "../../redux/actions";

interface IProps {
  board: IBoards;
}

const Board = ({ board }: IProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(boardActions.setBoard.Request(board));
  };

  return <BoardItem onClick={handleClick}>{board.title}</BoardItem>;
};

const BoardItem = styled.li`
  margin: 10px;
  padding: 7px 15px;
  border: 2px ${(props) => props.theme.colors.accentColor} solid;
  border-radius: 7px;
  cursor: pointer;
`;

export default Board;
