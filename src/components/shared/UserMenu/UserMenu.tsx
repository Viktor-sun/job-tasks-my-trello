import styled from "styled-components";
import { useDispatch } from "react-redux";
import Button from "../Button";
import { usersActions } from "../../../redux/actions";

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(usersActions.logout.Request());
  };

  return (
    <Container>
      Hello User
      <Button type="button" name="Log out" onClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default UserMenu;
