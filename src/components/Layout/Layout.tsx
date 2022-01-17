import styled from "styled-components";
import Title from "../shared/Title";
import AppBar from "../shared/AppBar";

interface IProps {
  children: React.ReactNode;
  bgColor?: string;
  withTitle?: boolean;
  titleText?: string;
}

const Layout = ({ children, bgColor, withTitle, titleText }: IProps) => {
  return (
    <>
      <AppBar />
      <PageWrapper bgColor={bgColor}>
        {withTitle && <Title text={titleText} />}
        {children}
      </PageWrapper>
    </>
  );
};

type WrapperProps = {
  bgColor?: string;
};

const PageWrapper = styled.div<WrapperProps>`
  padding: 50px;
  min-height: 100vh;

  ${({ bgColor }: WrapperProps) =>
    `background-color: ${bgColor ? bgColor : "#ffffff"}`}
`;

export default Layout;
