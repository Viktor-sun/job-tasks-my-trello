import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

interface IProps {
  title: string;
  cardId: string;
  label: string;
}

const Card = ({ title, cardId, label }: IProps) => {
  const { pathname } = useLocation();

  return (
    <StyledLink to={`${pathname}/${cardId}`}>
      <Item>
        {title}
        <Label bgColor={label}></Label>
      </Item>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

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
