import { Link } from "react-router-dom";
import styled from "styled-components";
import { navRoutes } from "../../routes";

interface IProps {
  title: string;
  cardId: string;
  label: string;
}

const Card = ({ title, cardId, label }: IProps) => {
  return (
    <Link
      style={{ color: "inherit", textDecoration: "none" }}
      to={`${navRoutes.board}/${cardId}`}
    >
      <Item>
        {title}
        <Label bgColor={label}></Label>
      </Item>
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

type TLabelProps = { bgColor: string };

const Label = styled.span<TLabelProps>`
  display: inline-block;
  width: 70px;
  margin-left: 29px;
  height: 13px;
  border-radius: 7px;
  background-color: ${({ bgColor }) => bgColor};
`;

export default Card;
