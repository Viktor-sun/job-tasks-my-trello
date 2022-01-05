import { Link } from "react-router-dom";
import styled from "styled-components";
import { navRoutes } from "../../routes";

interface IProps {
  title: string;
  cardId: string;
}

const Card = ({ title, cardId }: IProps) => {
  return (
    <Link
      style={{ color: "inherit", textDecoration: "none" }}
      to={`${navRoutes.board}/${cardId}`}
    >
      <Item>{title}</Item>
    </Link>
  );
};

const Item = styled.li`
  background-color: ${(props) => props.theme.colors.backgroundColor};
  margin: 3px;
  padding: 5px 10px;
  border-radius: 4px;
  transform: scale(1);
  transition: transform 250ms;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Card;
