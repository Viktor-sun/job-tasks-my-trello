import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IBoards } from "../../interfaces";
import { navRoutes } from "../../routes";

interface IProps {
  board: IBoards;
}

const Board = ({ board }: IProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${navRoutes.home}/${board._id}`);
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
