import { Link } from "react-router-dom";
import styled from "styled-components";
import { navRoutes } from "../../../routes";

const AuthNav = () => {
  return (
    <Container>
      <StyledLink to={navRoutes.login}>LogIn</StyledLink>
      <StyledLink to={navRoutes.logup}>LogUp</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  margin: 10px;
  font-size: 24px;

  color: ${(psrops) => psrops.theme.colors.accentColor};
`;

export default AuthNav;
