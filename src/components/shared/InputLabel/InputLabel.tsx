import styled from "styled-components";

interface IProps {
  label?: string;
  children: React.ReactNode;
}

const InputLabel = ({ label, children }: IProps) => {
  return (
    <Label>
      {label}
      {children}
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
`;

export default InputLabel;
