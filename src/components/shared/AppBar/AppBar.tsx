import { useSelector } from "react-redux";
import styled from "styled-components";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";
import { usersSelectors } from "../../../redux/selectors";

const AppBar = () => {
  const isAuthenticated = useSelector(usersSelectors.getIsAuthenticated);

  return (
    <Header>
      <Container>{isAuthenticated ? <UserMenu /> : <AuthNav />}</Container>
    </Header>
  );
};

const Header = styled.header`
  padding: 15px;
  background-color: ${(props) => props.theme.colors.backgroundColor};
`;

const Container = styled.div`
  margin: auto;
  max-width: 1280px;
`;

export default AppBar;
