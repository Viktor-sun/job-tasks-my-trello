import styled, { css } from "styled-components";

interface IProps {
  type: "button" | "submit" | "reset";
  name: string;
  onClick?: () => void;
  size?: string;
}

const Button = ({ type, name, onClick, size }: IProps) => (
  <StyledButton type={type} onClick={onClick} size={size}>
    {name}
  </StyledButton>
);

const small = css`
  padding: 6px 10px;
  font-size: 17px;
  box-shadow: 0 6px #999;
`;

const medium = css`
  padding: 10px 20px;
  font-size: 20px;
  box-shadow: 0 8px #999;
`;

const large = css`
  padding: 15px 25px;
  font-size: 24px;
  box-shadow: 0 9px #999;
`;

enum ButtonSize {
  small = "s",
  medium = "m",
  large = "l",
}

type TButtonProps = {
  size?: string;
};

const StyledButton = styled.button<TButtonProps>`
  display: inline-block;
  // padding: ${(props) => props.size || "15px 25px"};
  // font-size: ${(props) => props.size || "24px"};
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  border: none;
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.accentColor};
  ${(props) => {
    switch (props.size) {
      case ButtonSize.small:
        return small;
      case ButtonSize.medium:
        return medium;
      case ButtonSize.large:
        return large;

      default:
        return large;
    }
  }};
  &:hover,
  &:focus {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  &:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

export default Button;
