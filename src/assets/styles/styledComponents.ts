import styled from "styled-components";

export const Title = styled.h1`
  margin: 0;
  font-size: 50px;
  color: ${(props) => props.theme.colors.titleColor};
  text-align: center;
`;

type TButtonProps = {
  padding?: string;
  fontSize?: string;
};

export const Button = styled.button<TButtonProps>`
  display: inline-block;
  padding: ${(props) => props.padding || "15px 25px"};
  font-size: ${(props) => props.fontSize || "24px"};
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  background-color: ${(props) => props.theme.colors.accentColor};
  &:hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
    &:active {
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

type WrapperProps = {
  bgColor: string;
};

export const PageWrapper = styled.div<WrapperProps>`
  padding: 50px;
  height: 100vh;

  ${({ bgColor }: WrapperProps) => `background-color: ${bgColor}`}
`;
