import styled from "styled-components";

const AuthFormContainer = ({ children }: { children: React.ReactNode }) => {
  return <FormContainer>{children}</FormContainer>;
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
`;

export default AuthFormContainer;
