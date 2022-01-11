import styled from "styled-components";

interface IProps {
  text?: string;
}

const Title = ({ text = "Hello" }: IProps) => {
  return <StyledTitle>{text}</StyledTitle>;
};

const StyledTitle = styled.h1`
  margin: 0;
  font-size: 50px;
  color: ${(props) => props.theme.colors.titleColor};
  text-align: center;
`;

export default Title;
