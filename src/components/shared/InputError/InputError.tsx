import styled from "styled-components";

const InputError = ({ touched, errors, field }: any) => {
  return (
    <>
      {touched[field.name] && errors[field.name] && (
        <TextError>{errors[field.name]}</TextError>
      )}
    </>
  );
};

export const TextError = styled.span`
  color: red;
`;

export default InputError;
